# Daily Finance News Email — Setup Guide

Automated daily financial news digest powered by Claude AI with live web search.
Runs for free on GitHub Actions and sends you a curated email every morning.

## How It Works

1. GitHub Actions runs a cron job every day at 7:00 AM EST
2. A Python script calls the Claude API with the **web search tool** enabled
3. Claude searches the web for today's top financial news across 5 categories
4. Claude curates, analyzes, and explains why each story matters for investors
5. The script formats a polished HTML email and sends it via Gmail

## Setup (One-Time)

### 1. Get an Anthropic API Key

1. Go to [console.anthropic.com](https://console.anthropic.com)
2. Create an account and add credits (the daily digest costs ~$0.05-0.15/day)
3. Go to **API Keys** and create a new key
4. **Important**: Your org admin must enable **web search** in Console → Settings → Privacy

### 2. Set Up Gmail App Password

Gmail requires an "App Password" (not your regular password) for SMTP:

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already on
3. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Create a new app password (select "Mail" and "Other")
5. Copy the 16-character password

### 3. Add GitHub Secrets

Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these 4 secrets:

| Secret Name        | Value                                    |
| ------------------ | ---------------------------------------- |
| `ANTHROPIC_API_KEY`| Your Anthropic API key                   |
| `SENDER_EMAIL`     | Your Gmail address (e.g. you@gmail.com)  |
| `SENDER_PASSWORD`  | The 16-char Gmail App Password           |
| `RECIPIENT_EMAIL`  | Email to receive the digest              |

### 4. Enable the Workflow

The workflow runs automatically on the `master` or `main` branch. After merging, go to
**Actions** → **Daily Finance News Email** → **Enable workflow**.

You can also click **Run workflow** to test it immediately.

## Cost Estimate

| Component          | Cost                                              |
| ------------------ | ------------------------------------------------- |
| GitHub Actions     | Free (public repos get 2,000 min/month)           |
| Claude API tokens  | ~$0.01-0.05/day (using Haiku 4.5)                 |
| Web search         | $0.01/search × ~5-10 searches = ~$0.05-0.10/day   |
| Gmail SMTP         | Free                                              |
| **Total**          | **~$0.05-0.15/day (~$2-5/month)**                 |

To use a smarter model, set `CLAUDE_MODEL` in the workflow file to `claude-sonnet-4-6`
(~3x cost) or `claude-opus-4-6` (~5x cost).

## Customization

Edit `scripts/daily_finance_news.py`:

- **Change news categories**: Edit the `SYSTEM_PROMPT` to focus on specific sectors
- **Change schedule**: Edit the cron in `.github/workflows/daily-finance-news.yml`
- **Change model**: Set `CLAUDE_MODEL` env var (default: `claude-haiku-4-5`)
- **Limit searches**: Adjust `MAX_SEARCHES` (default: 10)

## Testing Locally

```bash
export ANTHROPIC_API_KEY="your-key"
export SENDER_EMAIL="you@gmail.com"
export SENDER_PASSWORD="your-app-password"
export RECIPIENT_EMAIL="you@gmail.com"

pip install -r scripts/requirements.txt
python scripts/daily_finance_news.py
```

To test without email (prints to console):

```bash
export ANTHROPIC_API_KEY="your-key"
python scripts/daily_finance_news.py
```
