# Global Connection Travel website

Travel-first static website for Global Connection Travel, a Global Connection Corporation company.

## Files
- `index.html` — homepage structure and metadata
- `styles.css` — responsive visual design
- `script.js` — mobile navigation and demo enquiry-form handling

## Local preview
Open `index.html` in a browser, or run a local static server from this directory:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Cloudflare Pages deployment
1. Push this folder to a GitHub repository named `global-connection-website`.
2. In Cloudflare, open Workers & Pages → Create → Pages → Connect to Git.
3. Select the repository.
4. Framework preset: None; Build command: leave blank; Build output directory: `/`.
5. Deploy and test the generated `*.pages.dev` address.
6. Add `globalconnectionlk.com` as a custom domain in the Pages project and follow Cloudflare's DNS instructions.

Do not change the current production DNS until the new Pages deployment is tested and ready. If the domain currently uses another DNS provider or website host, plan the migration carefully to avoid email or website downtime.

## Before launch
- Confirm all phone numbers, email addresses, address and business hours.
- Connect the enquiry form to an approved CRM or email endpoint; it is currently a front-end demo only.
- Replace/approve imagery and check image licensing/availability.
- Add privacy policy, cookie notice if needed, analytics and social links.
- Confirm exact legal company/brand wording.
