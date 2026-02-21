#!/usr/bin/env python3
"""
Daily Financial News Email Sender — Powered by Claude

Uses the Anthropic Claude API with its built-in web search tool to:
1. Search for today's most important financial/market news
2. Curate and analyze the top stories with investor-relevant insights
3. Format a polished HTML email digest
4. Send it via Gmail SMTP

Required environment variables:
  ANTHROPIC_API_KEY - Anthropic API key
  SENDER_EMAIL      - Gmail address to send from
  SENDER_PASSWORD   - Gmail App Password (not your regular password)
  RECIPIENT_EMAIL   - Email address to receive the digest (defaults to SENDER_EMAIL)

Optional environment variables:
  CLAUDE_MODEL      - Model to use (default: claude-haiku-4-5, cheapest option)
"""

import os
import re
import sys
import json
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timezone

import anthropic


# ---------------------------------------------------------------------------
# Configuration
# ---------------------------------------------------------------------------
MODEL = os.environ.get("CLAUDE_MODEL", "claude-haiku-4-5")
MAX_SEARCHES = 10  # Max web searches Claude can perform per run

SYSTEM_PROMPT = """\
You are a senior financial analyst and market researcher. Your job is to \
produce a daily financial news digest email for an investor who wants to \
stay informed about the most important market-moving events.

Today's date: {today}

INSTRUCTIONS:
1. Search the web for today's most important financial and market news.
2. Cover these categories (search for each separately):
   - US Stock Market (S&P 500, Nasdaq, Dow) — major moves and why
   - Global Markets — notable moves in Europe, Asia, currencies, commodities
   - Top Company News — earnings, M&A, major announcements
   - Economy & Fed — inflation, jobs, interest rates, GDP, Fed commentary
   - Tech & AI — major developments relevant to investors
3. For each story, explain WHY it matters to investors (not just what happened).
4. Include source URLs for each major story.

OUTPUT FORMAT:
Return your digest as a JSON object with this exact structure:
{{
  "market_summary": "2-3 sentence overview of today's market action",
  "sections": [
    {{
      "title": "Section Name",
      "stories": [
        {{
          "headline": "Story headline",
          "summary": "2-3 sentences explaining what happened and why it matters for investors",
          "source_url": "https://...",
          "source_name": "Bloomberg / Reuters / etc"
        }}
      ]
    }}
  ]
}}

Return ONLY the JSON object, no markdown code fences or other text.\
"""


def fetch_news_with_claude() -> dict:
    """Use Claude with web search to find and curate today's financial news."""
    client = anthropic.Anthropic()

    today = datetime.now(timezone.utc).strftime("%A, %B %d, %Y")

    print(f"Asking Claude ({MODEL}) to search for today's financial news...")

    # Use streaming to handle potentially long responses with web search
    with client.messages.stream(
        model=MODEL,
        max_tokens=4096,
        system=SYSTEM_PROMPT.format(today=today),
        tools=[
            {
                "type": "web_search_20250305",
                "name": "web_search",
                "max_uses": MAX_SEARCHES,
            }
        ],
        messages=[
            {
                "role": "user",
                "content": (
                    f"Please search for and compile today's ({today}) most important "
                    "financial news. Cover: US markets, global markets, major company "
                    "news, economic data, and tech/AI developments. "
                    "Return the curated digest as JSON."
                ),
            }
        ],
    ) as stream:
        response = stream.get_final_message()

    # Extract usage info
    usage = response.usage
    search_count = 0
    if hasattr(usage, "server_tool_use") and usage.server_tool_use:
        search_count = getattr(usage.server_tool_use, "web_search_requests", 0)

    print(f"  Input tokens: {usage.input_tokens}")
    print(f"  Output tokens: {usage.output_tokens}")
    print(f"  Web searches performed: {search_count}")

    # Handle pause_turn — continue the conversation if Claude paused
    if response.stop_reason == "pause_turn":
        print("  Claude paused mid-turn, continuing...")
        messages = [
            {
                "role": "user",
                "content": (
                    f"Please search for and compile today's ({today}) most important "
                    "financial news. Cover: US markets, global markets, major company "
                    "news, economic data, and tech/AI developments. "
                    "Return the curated digest as JSON."
                ),
            },
            {"role": "assistant", "content": response.content},
        ]
        with client.messages.stream(
            model=MODEL,
            max_tokens=4096,
            system=SYSTEM_PROMPT.format(today=today),
            tools=[
                {
                    "type": "web_search_20250305",
                    "name": "web_search",
                    "max_uses": MAX_SEARCHES,
                }
            ],
            messages=messages,
        ) as stream:
            response = stream.get_final_message()

    # Extract the text content (Claude's final response with the JSON)
    text_content = ""
    for block in response.content:
        if block.type == "text":
            text_content += block.text

    if not text_content.strip():
        print("  Warning: No text response from Claude")
        return {"market_summary": "No news digest available today.", "sections": []}

    # Parse JSON from Claude's response
    # Strip markdown code fences if present
    cleaned = text_content.strip()
    cleaned = re.sub(r"^```(?:json)?\s*", "", cleaned)
    cleaned = re.sub(r"\s*```$", "", cleaned)

    try:
        digest = json.loads(cleaned)
    except json.JSONDecodeError as e:
        print(f"  Warning: Failed to parse JSON from Claude: {e}")
        print(f"  Raw response (first 500 chars): {text_content[:500]}")
        # Fallback: use the raw text as market summary
        return {
            "market_summary": text_content[:500],
            "sections": [],
        }

    return digest


def build_html_email(digest: dict) -> str:
    """Build a nicely formatted HTML email from the Claude-curated digest."""
    today = datetime.now(timezone.utc).strftime("%A, %B %d, %Y")
    market_summary = digest.get("market_summary", "")
    sections = digest.get("sections", [])

    html = f"""\
<html>
<head>
<style>
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; color: #333; }}
  .container {{ max-width: 700px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }}
  .header {{ background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #fff; padding: 30px; text-align: center; }}
  .header h1 {{ margin: 0; font-size: 22px; letter-spacing: 0.5px; }}
  .header .date {{ margin: 8px 0 0; opacity: 0.8; font-size: 14px; }}
  .header .powered {{ margin: 6px 0 0; opacity: 0.5; font-size: 11px; }}
  .summary {{ padding: 20px 30px; background: #f0f4ff; border-bottom: 1px solid #dde; font-size: 15px; line-height: 1.5; }}
  .section {{ padding: 20px 30px; border-bottom: 1px solid #eee; }}
  .section h2 {{ color: #1a1a2e; font-size: 16px; margin: 0 0 15px; padding-bottom: 8px; border-bottom: 2px solid #e94560; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; }}
  .story {{ margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #f0f0f0; }}
  .story:last-child {{ border-bottom: none; margin-bottom: 0; padding-bottom: 0; }}
  .story h3 {{ margin: 0 0 6px; font-size: 15px; color: #16213e; }}
  .story p {{ margin: 0; color: #555; font-size: 13px; line-height: 1.5; }}
  .story .source {{ margin-top: 4px; }}
  .story .source a {{ color: #e94560; text-decoration: none; font-size: 12px; }}
  .story .source a:hover {{ text-decoration: underline; }}
  .footer {{ padding: 20px 30px; text-align: center; color: #999; font-size: 11px; background: #fafafa; }}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>Daily Finance News Digest</h1>
    <div class="date">{today}</div>
    <div class="powered">Curated by Claude AI with live web search</div>
  </div>
  <div class="summary">{market_summary}</div>
"""

    for section in sections:
        title = section.get("title", "News")
        stories = section.get("stories", [])
        if not stories:
            continue

        html += f'  <div class="section">\n    <h2>{title}</h2>\n'
        for story in stories:
            headline = story.get("headline", "")
            summary = story.get("summary", "")
            source_url = story.get("source_url", "")
            source_name = story.get("source_name", "Source")

            source_html = ""
            if source_url:
                source_html = f'<div class="source"><a href="{source_url}">{source_name}</a></div>'

            html += f"""\
    <div class="story">
      <h3>{headline}</h3>
      <p>{summary}</p>
      {source_html}
    </div>
"""
        html += "  </div>\n"

    total_stories = sum(len(s.get("stories", [])) for s in sections)
    html += f"""\
  <div class="footer">
    <p>Curated by Claude AI &mdash; {total_stories} stories today</p>
    <p>Powered by Anthropic's Claude with web search</p>
  </div>
</div>
</body>
</html>"""

    return html


def build_plain_email(digest: dict) -> str:
    """Build a plain-text fallback version of the email."""
    today = datetime.now(timezone.utc).strftime("%A, %B %d, %Y")
    market_summary = digest.get("market_summary", "")
    sections = digest.get("sections", [])

    lines = [
        "DAILY FINANCE NEWS DIGEST",
        f"{today}",
        "Curated by Claude AI with live web search",
        "=" * 55,
        "",
        market_summary,
        "",
    ]

    for section in sections:
        title = section.get("title", "News")
        stories = section.get("stories", [])
        if not stories:
            continue

        lines.append(f"\n--- {title.upper()} ---\n")
        for story in stories:
            lines.append(f"  * {story.get('headline', '')}")
            lines.append(f"    {story.get('summary', '')}")
            if story.get("source_url"):
                lines.append(f"    Source: {story['source_url']}")
            lines.append("")

    total_stories = sum(len(s.get("stories", [])) for s in sections)
    lines.append(f"\nTotal stories: {total_stories}")
    return "\n".join(lines)


def send_email(html_body: str, plain_body: str) -> None:
    """Send the email via Gmail SMTP."""
    sender = os.environ["SENDER_EMAIL"]
    password = os.environ["SENDER_PASSWORD"]
    recipient = os.environ.get("RECIPIENT_EMAIL", sender)

    today = datetime.now(timezone.utc).strftime("%b %d, %Y")

    msg = MIMEMultipart("alternative")
    msg["Subject"] = f"Daily Finance News Digest - {today}"
    msg["From"] = f"Finance News Bot <{sender}>"
    msg["To"] = recipient

    msg.attach(MIMEText(plain_body, "plain"))
    msg.attach(MIMEText(html_body, "html"))

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=context) as server:
        server.login(sender, password)
        server.sendmail(sender, [recipient], msg.as_string())

    print(f"Email sent successfully to {recipient}")


def main():
    print("=" * 55)
    print("Daily Finance News Digest — Powered by Claude")
    print(f"Date: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print(f"Model: {MODEL}")
    print("=" * 55)

    # Verify Anthropic API key is set
    if not os.environ.get("ANTHROPIC_API_KEY"):
        print("\nError: ANTHROPIC_API_KEY environment variable is not set.")
        sys.exit(1)

    # Use Claude to search the web and curate the news digest
    digest = fetch_news_with_claude()

    # Build email content
    html_body = build_html_email(digest)
    plain_body = build_plain_email(digest)

    # Check if email credentials are configured
    if not os.environ.get("SENDER_EMAIL") or not os.environ.get("SENDER_PASSWORD"):
        print("\nNo email credentials configured. Printing digest to stdout:\n")
        print(plain_body)
        sys.exit(0)

    send_email(html_body, plain_body)


if __name__ == "__main__":
    main()
