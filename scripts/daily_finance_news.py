#!/usr/bin/env python3
"""
Daily Financial News Email Sender — Free RSS Edition

Fetches top financial news from free RSS feeds (Google News, CNBC, etc.)
and sends a formatted daily digest email via Gmail SMTP.

No API keys needed for news fetching — completely free.

Required environment variables:
  SENDER_EMAIL      - Gmail address to send from
  SENDER_PASSWORD   - Gmail App Password (not your regular password)
  RECIPIENT_EMAIL   - Email address to receive the digest (defaults to SENDER_EMAIL)
"""

import os
import sys
import smtplib
import ssl
import html
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime, timezone

import feedparser


# ---------------------------------------------------------------------------
# RSS feed sources (all free, no API key required)
# ---------------------------------------------------------------------------
RSS_FEEDS = [
    {
        "name": "US Stock Market",
        "icon": "📈",
        "feeds": [
            "https://news.google.com/rss/search?q=stock+market+today+S%26P+500+OR+Nasdaq+OR+Dow&hl=en-US&gl=US&ceid=US:en",
        ],
        "max_articles": 5,
    },
    {
        "name": "Global Markets",
        "icon": "🌍",
        "feeds": [
            "https://news.google.com/rss/search?q=global+markets+OR+european+markets+OR+asian+markets+OR+forex+OR+commodities&hl=en-US&gl=US&ceid=US:en",
        ],
        "max_articles": 4,
    },
    {
        "name": "Company News & Earnings",
        "icon": "🏢",
        "feeds": [
            "https://news.google.com/rss/search?q=earnings+report+OR+company+acquisition+OR+IPO+OR+stock+upgrade+downgrade&hl=en-US&gl=US&ceid=US:en",
        ],
        "max_articles": 5,
    },
    {
        "name": "Economy & Federal Reserve",
        "icon": "🏛️",
        "feeds": [
            "https://news.google.com/rss/search?q=federal+reserve+OR+inflation+OR+interest+rates+OR+jobs+report+OR+GDP+economy&hl=en-US&gl=US&ceid=US:en",
        ],
        "max_articles": 4,
    },
    {
        "name": "Tech & AI Investing",
        "icon": "🤖",
        "feeds": [
            "https://news.google.com/rss/search?q=AI+stocks+OR+tech+stocks+OR+Nvidia+OR+Apple+OR+Microsoft+OR+Google+stock&hl=en-US&gl=US&ceid=US:en",
        ],
        "max_articles": 4,
    },
    {
        "name": "Crypto & Digital Assets",
        "icon": "₿",
        "feeds": [
            "https://news.google.com/rss/search?q=bitcoin+price+OR+ethereum+OR+crypto+market&hl=en-US&gl=US&ceid=US:en",
        ],
        "max_articles": 3,
    },
]


def clean_html(text: str) -> str:
    """Remove HTML tags and decode entities from a string."""
    import re

    text = re.sub(r"<[^>]+>", "", text)
    text = html.unescape(text)
    return text.strip()


def extract_source(title: str) -> tuple[str, str]:
    """Extract source name from Google News title format: 'Headline - Source'."""
    if " - " in title:
        parts = title.rsplit(" - ", 1)
        return parts[0].strip(), parts[1].strip()
    return title, ""


def fetch_section(section: dict) -> list[dict]:
    """Fetch articles for a section from its RSS feeds."""
    articles = []
    seen_titles = set()

    for feed_url in section["feeds"]:
        try:
            feed = feedparser.parse(feed_url)
            for entry in feed.entries:
                raw_title = entry.get("title", "")
                headline, source = extract_source(raw_title)

                # Deduplicate by headline
                if headline.lower() in seen_titles:
                    continue
                seen_titles.add(headline.lower())

                link = entry.get("link", "")
                description = clean_html(entry.get("summary", entry.get("description", "")))
                pub_date = entry.get("published", "")

                articles.append({
                    "headline": headline,
                    "source": source,
                    "link": link,
                    "description": description[:250],
                    "published": pub_date,
                })

                if len(articles) >= section["max_articles"]:
                    break

        except Exception as e:
            print(f"  Warning: Failed to fetch feed: {e}")
            continue

        if len(articles) >= section["max_articles"]:
            break

    return articles


def build_html_email(all_sections: list[dict]) -> str:
    """Build a nicely formatted HTML email."""
    today = datetime.now(timezone.utc).strftime("%A, %B %d, %Y")
    total_articles = sum(len(s["articles"]) for s in all_sections)

    html_parts = [f"""\
<html>
<head>
<style>
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; color: #333; }}
  .container {{ max-width: 700px; margin: 0 auto; background: #fff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }}
  .header {{ background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #fff; padding: 30px; text-align: center; }}
  .header h1 {{ margin: 0; font-size: 22px; letter-spacing: 0.5px; }}
  .header .date {{ margin: 8px 0 0; opacity: 0.8; font-size: 14px; }}
  .header .sub {{ margin: 6px 0 0; opacity: 0.5; font-size: 11px; }}
  .section {{ padding: 18px 28px; border-bottom: 1px solid #eee; }}
  .section h2 {{ color: #1a1a2e; font-size: 15px; margin: 0 0 14px; padding-bottom: 6px; border-bottom: 2px solid #e94560; display: inline-block; text-transform: uppercase; letter-spacing: 0.5px; }}
  .story {{ margin-bottom: 14px; padding-bottom: 10px; border-bottom: 1px solid #f0f0f0; }}
  .story:last-child {{ border-bottom: none; margin-bottom: 0; padding-bottom: 0; }}
  .story a {{ color: #16213e; text-decoration: none; font-weight: 600; font-size: 14px; line-height: 1.3; }}
  .story a:hover {{ color: #e94560; }}
  .story .desc {{ margin: 4px 0 0; color: #666; font-size: 12px; line-height: 1.4; }}
  .story .meta {{ margin-top: 3px; color: #999; font-size: 11px; }}
  .story .meta .src {{ color: #e94560; font-weight: 500; }}
  .footer {{ padding: 18px 28px; text-align: center; color: #999; font-size: 11px; background: #fafafa; }}
  .empty {{ color: #999; font-style: italic; padding: 20px 28px; }}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>Daily Finance News Digest</h1>
    <div class="date">{today}</div>
    <div class="sub">{total_articles} stories from top financial sources</div>
  </div>
"""]

    for section in all_sections:
        articles = section["articles"]
        if not articles:
            continue

        icon = section.get("icon", "")
        name = section["name"]
        html_parts.append(f'  <div class="section">\n    <h2>{icon} {name}</h2>')

        for art in articles:
            headline = html.escape(art["headline"])
            link = art["link"]
            desc = html.escape(art["description"])
            source = html.escape(art.get("source", ""))

            link_html = f'<a href="{link}">{headline}</a>' if link else f"<strong>{headline}</strong>"
            desc_html = f'<div class="desc">{desc}</div>' if desc else ""
            source_html = f'<span class="src">{source}</span>' if source else ""

            html_parts.append(f"""\
    <div class="story">
      {link_html}
      {desc_html}
      <div class="meta">{source_html}</div>
    </div>""")

        html_parts.append("  </div>")

    if total_articles == 0:
        html_parts.append('  <div class="empty">No news articles found today. This may be a temporary issue.</div>')

    html_parts.append(f"""\
  <div class="footer">
    <p>{total_articles} stories &mdash; Delivered automatically via GitHub Actions</p>
    <p>Sources: Google News, CNBC, Bloomberg, Reuters, WSJ, and more</p>
  </div>
</div>
</body>
</html>""")

    return "\n".join(html_parts)


def build_plain_email(all_sections: list[dict]) -> str:
    """Build a plain-text fallback."""
    today = datetime.now(timezone.utc).strftime("%A, %B %d, %Y")
    total = sum(len(s["articles"]) for s in all_sections)

    lines = [
        "DAILY FINANCE NEWS DIGEST",
        today,
        "=" * 55,
        "",
    ]

    for section in all_sections:
        articles = section["articles"]
        if not articles:
            continue

        lines.append(f"\n--- {section['name'].upper()} ---\n")
        for art in articles:
            lines.append(f"  * {art['headline']}")
            if art.get("source"):
                lines.append(f"    Source: {art['source']}")
            if art.get("description"):
                lines.append(f"    {art['description'][:150]}")
            if art.get("link"):
                lines.append(f"    {art['link']}")
            lines.append("")

    if total == 0:
        lines.append("No news articles found today.")

    lines.append(f"\nTotal: {total} stories")
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
    print("Daily Finance News Digest")
    print(f"Date: {datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')}")
    print("=" * 55)

    all_sections = []
    for section_def in RSS_FEEDS:
        print(f"\nFetching: {section_def['name']}...")
        articles = fetch_section(section_def)
        all_sections.append({
            "name": section_def["name"],
            "icon": section_def.get("icon", ""),
            "articles": articles,
        })
        print(f"  Found {len(articles)} articles")

    total = sum(len(s["articles"]) for s in all_sections)
    print(f"\nTotal articles collected: {total}")

    html_body = build_html_email(all_sections)
    plain_body = build_plain_email(all_sections)

    # Check if email credentials are configured
    if not os.environ.get("SENDER_EMAIL") or not os.environ.get("SENDER_PASSWORD"):
        print("\nNo email credentials configured. Printing digest to stdout:\n")
        print(plain_body)
        sys.exit(0)

    send_email(html_body, plain_body)


if __name__ == "__main__":
    main()
