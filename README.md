This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Cloudflare Turnstile

Create a Turnstile widget for the site in Cloudflare and allow the domains where the site is deployed. In Vercel, add these environment variables to each environment that should accept form submissions, then redeploy:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY`: the widget's site key. This key is public.
- `TURNSTILE_SECRET_KEY`: the widget's secret key. Keep it server-only; do not use a `NEXT_PUBLIC_` prefix.

The contact, speaking, newsletter, and press-download forms require a successful server-side Turnstile verification before data is sent to GoHighLevel. Submissions fail closed if either key is missing or Cloudflare cannot verify the token. For local development, use Cloudflare's documented test keys rather than production secrets.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
