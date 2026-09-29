<p align="center">
  <img src="assets/SPLogo.png" alt="SwiftPune" width="120" height="120" />
</p>

<h1 align="center">SwiftPune</h1>

<p align="center">
  An Apple platforms community in Pune — engineers, designers, and students.<br/>
  <a href="https://swiftpune.org">swiftpune.org</a>
</p>

---

This is the source for the **SwiftPune** website — a small, fast, static site for a
volunteer-run community of people who build on Apple's platforms (iOS, macOS,
visionOS, and server-side Swift) in Pune, India.

It leads with our actual work — meetups, campus outreach, and casuals —
rather than mission statements.

## Working on the site

The site is built with [Eleventy](https://www.11ty.dev/). Pages are
templates in `src/`, and everything that repeats lives in one place:

| To change… | Edit |
| --- | --- |
| A meetup, campus session, casual or watch party | `src/_data/meetups.js`, `outreach.js` or `casuals.js` |
| Links (WhatsApp, socials, email, forms) or the nav | `src/_data/site.js` |
| Nav, Connect block or footer markup | `src/_includes/partials/` |
| The `<head>` and page shell | `src/_includes/layouts/base.njk` |
| How events render (gallery, feature, log, run sheet) | `src/_includes/macros/events.njk` |
| Page copy | `src/index.njk`, `meetups.njk`, `student-outreach.njk`, `casuals.njk`, `code-of-conduct.njk` |
| Styles, scripts, images | `css/`, `js/`, `assets/` (copied as-is) |

```sh
npm install
npm start        # http://localhost:8080, rebuilds on save
npm run build    # writes the site to _site/
```

`/meetups`, `/student-outreach` and `/casuals` are served from
`meetups.html` etc. — by Cloudflare in production and by the dev server
locally. Cloudflare runs `npm run build` on every deploy (see
`wrangler.jsonc`) and serves `_site/`.

## Adding an event

Each programme page features its **latest** event and logs every earlier
one. Both come from that programme's data file, newest first:

| Programme | Data file | Photos live in |
| --- | --- | --- |
| Meetups | `src/_data/meetups.js` | `assets/Events/S00N/` |
| Swift Student Outreach | `src/_data/outreach.js` | `assets/Events/student-outreach/<campus-slug>/` |
| Casuals | `src/_data/casuals.js` (`events`) | `assets/Events/Casuals/00N/` |
| WWDC watch party | `src/_data/casuals.js` (`annual`) | `assets/Events/watchparty/<year>/` |

1. Drop up to three photos in that programme's folder as `01`, `02`, `03`,
   then size them. Originals cap at 1280px wide, with `-1024` and `-640`
   variants beside them for `srcset`:

   ```sh
   cd assets/Events/<programme>/<slug>
   for n in 01 02 03; do
     sips --resampleWidth 1280 $n.jpg --out $n.jpg          # only if wider
     sips --resampleWidth 1024 $n.jpg --out $n-1024.jpg     # only if wider than 1024
     sips --resampleWidth 640  $n.jpg --out $n-640.jpg
   done
   ```

   If an original is narrower than 1280px, pass its real width to the
   photo helper, e.g. `C001(1, "Alt text", { width: 960, variants: [640] })`.
2. Add an entry to the **top** of that file's `events` list — copy the
   entry below it and change the details.

That's the whole job. The previous event moves into the log (shown
expanded), and the homepage card's count and "latest" date, the hosts
list and the next open host slot all update on the next build.

## Get involved

- **WhatsApp** — the fastest way to hear about the next meetup or casual
- **LinkedIn / YouTube / Instagram / X** — in the Connect block on every page (Mastodon is in the footer)
- **Pitch a talk** or **bring SwiftPune to your campus** — forms linked from the site
- **Email** — [community@swiftpune.org](mailto:community@swiftpune.org)

By taking part in the community you agree to our
[Code of Conduct](code-of-conduct.html).

## Trademarks

Apple, the Apple logo, Swift, the Swift logo, SwiftUI, iOS, iPadOS, macOS,
watchOS, visionOS, and WWDC are trademarks of Apple Inc., registered in the U.S.
and other countries. SwiftPune is an independent, community-run group and is not
affiliated with, endorsed by, or sponsored by Apple Inc.

---

<p align="center"><em>// runs on the enthusiasm of the community, good food &amp; beverages</em></p>
