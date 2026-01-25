---
layout: ../../layouts/BlogPost.astro
title: 'Building a Personal Finance Tracker with React and Plaid'
description: 'A deep dive into building a full-stack personal finance application, including bank integration, data visualization, and lessons learned.'
pubDate: 2026-01-12
author: 'James Hawley'
category: 'projects'
---

Last semester, I built a personal finance tracker as a side project. I wanted something that would automatically categorize my transactions and show me where my money was actually going. Here's how I built it and what I learned.

## The Stack

- **Frontend**: React with TypeScript, TailwindCSS for styling
- **Backend**: Node.js with Express
- **Database**: PostgreSQL for transaction data
- **Bank Integration**: Plaid API for connecting to financial institutions
- **Hosting**: Railway for the backend, Vercel for the frontend

## Why Plaid?

Plaid is the infrastructure that powers most fintech apps' bank connections. When you link your bank account in Venmo or Robinhood, you're using Plaid. They provide a secure way to:

1. Authenticate users with their banks
2. Pull transaction history
3. Get account balances
4. Verify identity and account ownership

Their developer sandbox lets you test with fake accounts, which made development much easier.

## The Plaid Integration

Connecting Plaid involves three steps:

1. **Create a link token** on your backend
2. **Launch Plaid Link** on your frontend (their pre-built UI for bank authentication)
3. **Exchange the public token** for an access token that lets you fetch data

```typescript
// Backend: Create link token
app.post('/api/create_link_token', async (req, res) => {
  const response = await plaidClient.linkTokenCreate({
    user: { client_user_id: req.user.id },
    client_name: 'Finance Tracker',
    products: ['transactions'],
    country_codes: ['US'],
    language: 'en',
  });
  res.json({ link_token: response.data.link_token });
});

// Backend: Exchange public token for access token
app.post('/api/exchange_token', async (req, res) => {
  const { public_token } = req.body;
  const response = await plaidClient.itemPublicTokenExchange({
    public_token,
  });
  // Store access_token securely - this is what you use to fetch data
  await saveAccessToken(req.user.id, response.data.access_token);
  res.json({ success: true });
});
```

## Transaction Categorization

Plaid provides basic category information, but I wanted more customization. I built a simple rule-based system that:

1. Uses Plaid's categories as a starting point
2. Applies custom rules based on merchant names (e.g., "TRADER JOE'S" → Groceries)
3. Allows manual overrides that create new rules

For most use cases, this works better than ML-based categorization because the rules are transparent and predictable.

## Data Visualization

I used Recharts for the visualizations. The main views:

- **Monthly spending by category**: Stacked bar chart showing where money goes
- **Spending trends**: Line chart comparing current month to previous months
- **Top merchants**: Horizontal bar chart of most frequent purchases

The key insight: keep visualizations simple. My first iteration had too many charts and options. The version I actually use has three views that answer the questions I actually care about.

## Lessons Learned

**Security is paramount**: Financial data is sensitive. I used environment variables for all API keys, implemented proper authentication with JWTs, and never stored bank credentials. Plaid handles the credential security, but you still need to protect access tokens.

**Error handling matters**: Bank connections fail. Plaid's servers have outages. Transactions get duplicated. Building robust error handling and retry logic took more time than the happy path.

**Start with a narrow scope**: I originally planned budgeting features, savings goals, and investment tracking. By focusing on transaction aggregation and visualization, I actually shipped something useful.

**Plaid's sandbox is excellent**: Being able to test with fake accounts that have realistic transaction data made development much faster than working with real accounts.

## What I'd Do Differently

**Use a sync approach instead of polling**: Plaid has a webhooks-based sync flow that's more efficient than pulling transactions on a schedule. I'd use that from the start.

**Better data normalization**: Transaction data from different banks is inconsistent. I'd invest more upfront in normalizing merchant names and categories.

**Mobile-first design**: I built desktop-first and then adapted for mobile. Since I actually check my finances on my phone, I should have prioritized mobile.

## The Code

The project is on GitHub if you want to see the full implementation. It's not production-ready—there are rough edges and TODO comments—but it works for my personal use.

Building this project taught me more about full-stack development, API integration, and financial data than any class or tutorial. If you're looking for a side project, I'd recommend picking something you'd actually use. The motivation to solve your own problem is powerful.
