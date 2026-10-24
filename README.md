# IND AMICUS LEGAL — Website Package Redesign

This repository contains the production-ready redesign of **IND AMICUS LEGAL** tailored for GitHub Pages.

## Key Improvements Implemented

1. **Bar Council of India (BCI) Rule 36 Compliance:**
   - Full disclaimer modal with non-solicitation declaration.
   - `localStorage` memory so visitors don't face repeated modal locks upon every reload or subpage visit.
   - Restrained, professional tone (no forbidden superlatives, solicitations, or outcome promises).

2. **Technical Fixes:**
   - **Fixed Telephone Link:** Corrected `about:invalid#zCSafez` to valid `tel:+919717755479`.
   - **Schema.org Structured Data:** Embedded JSON-LD `LegalService` metadata for Google Search ranking.
   - **Open Graph / Meta Tags:** Rich preview cards for LinkedIn, WhatsApp, and Twitter sharing.

3. **Curated Content Architecture:**
   - Populated the previously empty **What's New / Legal Intelligence** section with authentic corporate & regulatory briefs (ESOP restructuring, Sec 92E Transfer Pricing, and UBBL compliance).
   - High-contrast typography pairing: *Playfair Display* (Serif), *Cinzel* (Header Accent), and *Plus Jakarta Sans* (Body).

4. **Zero-Dependency Architecture:**
   - Pure HTML5, CSS3, and Vanilla JavaScript.
   - Ultra-fast load times with preconnected Google Fonts and zero external tracking bloat.

## How to Deploy to your GitHub Pages (`vksgupta29/legal2`)

1. Copy the contents of this folder (`index.html`, `css/`, `js/`) into your repository root or `docs/` folder (depending on your Pages settings).
2. Commit and push:
   ```bash
   git add .
   git commit -m "Deploy redesign: BCI compliance, fixed contact links, modern UI/UX"
   git push origin main
   ```
3. Visit `https://vksgupta29.github.io/legal2/` to see your refreshed firm website live.
