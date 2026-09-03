# Spencer Corwin's Personal Website

Live site: [spencercorwin.com](https://spencercorwin.com) (GitHub Pages).

To point the domain at this repo, in GoDaddy DNS for **spencercorwin.com**:

| Type | Name | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `spencercorwin.github.io` |

Remove any existing A/AAAA/CNAME/forwarding records on `@` or `www` that still point at GoDaddy hosting (`8.232.114.87` or similar). After DNS updates, set the custom domain to `spencercorwin.com` in the repo **Settings → Pages**, then enable **Enforce HTTPS**. Optionally 301-forward `spencercorwin.io` to `https://spencercorwin.com` in GoDaddy so old links keep working.
