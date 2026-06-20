# DrumPulse marketing site

Public marketing + privacy + help pages for **DrumPulse** (Apple Watch drumming
tracker). Plain static HTML, served by GitHub Pages.

- **Live:** https://drumpulseapp.com/
- **App repo:** private (`MarioCruz/DrumPulse`).

## Pages
- `index.html` — landing page (+ `SoftwareApplication` JSON-LD)
- `how-it-works.html` — full feature explainer, mirrors the in-app Help & Guide
- `faq.html` — SEO/AI FAQ with `FAQPage` JSON-LD structured data
- `privacy.html` — privacy policy (the URL used in App Store Connect)
- `assets/` — `style.css`, icon, og image
- `robots.txt`, `sitemap.xml` — crawler + AI-bot discovery
- `.nojekyll` — serve files as-is (no Jekyll build)

## SEO / AI notes
- Each page has a `<title>`, meta description, and `<link rel="canonical">`.
- `faq.html` ships a JSON-LD `FAQPage` so Google can show rich results and AI
  answer engines can ingest the Q&A directly. Keep the visible answers and the
  JSON-LD `text` fields in sync if you edit either.
- `robots.txt` explicitly allows the major AI crawlers (GPTBot, ClaudeBot,
  PerplexityBot, Applebot-Extended, Google-Extended, etc.).

## Moving to a custom domain later
Everything internal uses **relative links**, so the nav/pages keep working on any
domain. To move (e.g. `drumpulse.app`):
1. Add a `CNAME` file with the domain; set DNS per GitHub Pages docs.
2. Find-and-replace the absolute base URL `https://mariocruz.github.io/drumpulse-app`
   in: every page's `<link rel="canonical">` + `og:url`, the JSON-LD `url` fields,
   `sitemap.xml`, and `robots.txt`'s `Sitemap:` line.
3. Update the three URLs in the app repo's `SUBMISSION.md` / App Store Connect
   (privacy, marketing, support).
