# New Work Design Lab – Website

Modern placeholder website (coming soon) built with
[Next.js](https://nextjs.org/) (App Router) and TypeScript. Optimized for
deployment on [Vercel](https://vercel.com) under the domain
**newworkdesignlab.org**.

The page renders on a single screen (no scrolling). A minimal top bar offers a
German/English language toggle on the left and a LinkedIn button on the right.

## Local development

```bash
npm install
npm run dev      # development server at http://localhost:3000
npm run build    # production build
npm run start    # run the production build locally
```

## Structure

```
public/
  icon.png            # favicon
src/
  app/
    layout.tsx        # root layout + global metadata/SEO + favicon
    page.tsx          # placeholder page (coming soon)
  content/
    texts.json        # German/English copy for the language toggle
  styles/
    globals.css       # styles (gradients, animated shapes)
```

## Deployment on Vercel

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the repository at [vercel.com/new](https://vercel.com/new).
   Vercel detects Next.js automatically (build: `next build`).
3. After the first deploy, add the domain `newworkdesignlab.org`
   (and optionally `www.newworkdesignlab.org`) under **Settings → Domains**.
4. Set the DNS records shown by Vercel at your domain registrar:
   - `A` record for `newworkdesignlab.org` → `76.76.21.21`
   - `CNAME` record for `www` → `cname.vercel-dns.com`
5. Vercel issues an SSL certificate automatically.

Alternatively, via CLI:

```bash
npm i -g vercel
vercel            # preview deployment
vercel --prod     # production deployment
```

## Customizing

- Page copy (German & English): `src/content/texts.json`
- LinkedIn URL: `LINKEDIN_URL` constant in `src/app/page.tsx`
- Colors/design: CSS variables at the top of `src/styles/globals.css`
- Favicon: replace `public/icon.png`

