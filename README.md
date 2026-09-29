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

## Pages

| Page | File | What's on it |
| --- | --- | --- |
| Home | `index.html` | Hero, one card per programme, core team, sponsors |
| Meetups | `meetups.html` (`/meetups`) | Latest edition, its run sheet, every edition, first-timer notes |
| Student outreach | `students.html` (`/students`) | Latest campus session, every session |
| Casuals | `casuals.html` (`/casuals`) | How casuals work, latest casual, every casual, the annual WWDC watch party |

Cloudflare serves each `*.html` file at its extensionless path. Every page
ends with the same **Connect** block (WhatsApp, LinkedIn, YouTube, Instagram,
X); its icons live in `assets/icons.svg`. To preview locally with the same
clean URLs, use any static server that maps `/meetups` to `meetups.html`
(for example `npx wrangler dev`).

## Adding an event

Each programme page is a featured **latest** event followed by a log of
every earlier one:

| Programme | Page | Photos live in |
| --- | --- | --- |
| Meetups | `meetups.html` | `assets/Events/S00N/` |
| Swift Student Outreach | `students.html` | `assets/Events/student-outreach/<campus-slug>/` |
| Casuals | `casuals.html` | `assets/Events/Casuals/00N/` |
| WWDC watch party | `casuals.html#wwdc` | `assets/Events/watchparty/<year>/` |

To add an event:

1. Drop up to three photos in that programme's folder as `01`, `02`, `03`, then
   size them. Originals cap at 1280px wide, with `-1024` and `-640`
   variants beside them for `srcset`:

   ```sh
   cd assets/Events/<programme>/<slug>
   for n in 01 02 03; do
     sips --resampleWidth 1280 $n.jpg --out $n.jpg          # only if wider
     sips --resampleWidth 1024 $n.jpg --out $n-1024.jpg     # only if wider than 1024
     sips --resampleWidth 640  $n.jpg --out $n-640.jpg
   done
   ```

   Use the file's real pixel width as the largest `srcset` descriptor —
   if an original is already under 1280 it stays that size, and the
   descriptor should say so rather than claiming `1280w`.
2. Demote the current featured event into a new `<li class="edition">`
   row at the top of the log, keeping its photos, write-up and facts.
   Remove its `edition--latest` class and give it a `<details open>` wrapper
   (past events show expanded; visitors can still collapse them).
3. Put the new event in the feature slot and mark its log row
   `edition--latest`.
4. Update the count on that programme's card in `index.html` (`#work`).

Nothing else moves, and the page only grows by one collapsed row per event.
The section comments in `index.html` restate these steps in place.

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
