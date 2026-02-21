# Daily Finance News Email — Setup Guide

Automated daily financial news digest delivered to your inbox every morning.
Runs 100% free on GitHub Actions using public RSS feeds.

## How It Works

1. GitHub Actions runs a cron job every day at 7:00 AM EST
2. Python script fetches top financial news from Google News RSS feeds
3. News is organized into 6 categories (US Markets, Global, Company News, Economy, Tech/AI, Crypto)
4. A polished HTML email is formatted and sent via Gmail SMTP
5. Total cost: **$0**

## Setup (One-Time, ~5 minutes)

### 1. Set Up Gmail App Password

Gmail requires an "App Password" (not your regular password) for SMTP:

1. Go to [myaccount.google.com/security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already on
3. Go to [myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
4. Create a new app password (select "Mail" and "Other", name it "Finance News Bot")
5. Copy the 16-character password

### 2. Add GitHub Secrets

Go to your GitHub repo → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**

Add these 3 secrets:

| Secret Name        | Value                                    |
| ------------------ | ---------------------------------------- |
| `SENDER_EMAIL`     | Your Gmail address (e.g. you@gmail.com)  |
| `SENDER_PASSWORD`  | The 16-char Gmail App Password           |
| `RECIPIENT_EMAIL`  | Email to receive the digest              |

### 3. Enable the Workflow

After merging to your main branch:

1. Go to **Actions** tab in your repo
2. Click **Daily Finance News Email**
3. Click **Enable workflow**
4. Click **Run workflow** to test it immediately

## News Categories

| Category                  | What It Covers                                    |
| ------------------------- | ------------------------------------------------- |
| US Stock Market           | S&P 500, Nasdaq, Dow — major moves and why        |
| Global Markets            | Europe, Asia, forex, commodities                  |
| Company News & Earnings   | Earnings reports, M&A, IPOs, upgrades/downgrades  |
| Economy & Federal Reserve | Inflation, jobs, interest rates, GDP, Fed policy   |
| Tech & AI Investing       | AI stocks, FAANG, semiconductor news              |
| Crypto & Digital Assets   | Bitcoin, Ethereum, crypto market moves             |

## Customization

Edit `scripts/daily_finance_news.py`:

- **Change news categories**: Modify the `RSS_FEEDS` list
- **Add/remove topics**: Change the Google News search queries
- **Adjust article count**: Change `max_articles` per section
- **Change schedule**: Edit the cron in `.github/workflows/daily-finance-news.yml`
  - `0 12 * * *` = 7 AM EST / 12 PM UTC daily
  - `0 12 * * 1-5` = Weekdays only
  - `0 14 * * *` = 9 AM EST

## Testing Locally

```bash
# With email:
export SENDER_EMAIL="you@gmail.com"
export SENDER_PASSWORD="your-app-password"
export RECIPIENT_EMAIL="you@gmail.com"
pip install -r scripts/requirements.txt
python scripts/daily_finance_news.py

# Without email (prints to console):
pip install -r scripts/requirements.txt
python scripts/daily_finance_news.py
```

## Cost

| Component      | Cost  |
| -------------- | ----- |
| GitHub Actions | Free  |
| RSS Feeds      | Free  |
| Gmail SMTP     | Free  |
| **Total**      | **$0** |
