# EventLive KSA — SEO development review (2026-11-01)

## Changes prepared (not deployed)
- Align static LocalBusiness `sameAs` in `index.html` with the four official URLs supplied by the site owner.
- Remove the unconfirmed X/Twitter account from the default social links in `src/App.tsx`, affecting the footer and React-generated JSON-LD.
- No YouTube account added because no official channel URL was provided.
- No changes to production, deployment settings, robots.txt, or sitemap.xml.

## SEO findings requiring implementation review
1. `public/sitemap.xml` currently lists **only the home URL**. Do not add hypothetical service URLs without verifying real distinct indexable routes.
2. `src/main.tsx` mounts a single React `App`; `server.ts` falls back to `index.html` for unknown paths. The current source has no React Router dependency. Verify that any proposed service URL renders unique, crawlable content, canonical URL, title, description, and status code rather than the home page or a generic SPA fallback.
3. `index.html` currently uses `https://eventliveksa.com/` as canonical, while the Vercel domain configuration observed in the earlier audit redirects apex to `https://www.eventliveksa.com/`. Decide one canonical host, test live redirects, and align canonical, JSON-LD IDs, sitemap, robots sitemap directive, and OG URLs before shipping.
4. The static HTML already contains LocalBusiness JSON-LD; `src/App.tsx` also renders LocalBusiness JSON-LD. Consolidate into a single stable organization identity (same `@id`) to avoid conflicting fields, preferably in server-rendered HTML.
5. Confirm business phone and address fields against current owner-approved business data before changes; do not fabricate street addresses or postal codes.
6. Validate JSON-LD with Schema Markup Validator / Rich Results Test. `sameAs` helps entity disambiguation but does not guarantee rich results or indexing.
7. Confirm live HTTPS certificate, crawlability, 200 responses, robots directives, canonical tags, and Google Search Console URL Inspection for each **real** route.
8. Consider pre-rendering/SSR for each real service page; ensure unique human-helpful copy, H1, metadata, internal links, and BreadcrumbList/Service JSON-LD where appropriate. Avoid indexing thin duplicates.
9. Request indexing and resubmit sitemap **only after deployment approval and validation**.

## Official social profiles supplied by owner (ownership claimed; external profile access not independently verified)
- Instagram: https://instagram.com/eventliveksa
- TikTok: https://www.tiktok.com/@eventlivesa
- Snapchat: https://snapchat.com/add/eventliveksa
- LinkedIn: https://linkedin.com/company/eventliveksa

## Release gate
Do not merge this branch or deploy to production without owner approval. Review diffs, verify build and profile links, resolve canonical and route architecture, and then propose a staged deployment.
