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

It leads with our actual work — meetups, campus outreach, and community nights —
rather than mission statements.

## Adding an event

The homepage is organised by **programme**, not by event. There are three,
and the number never changes:

| Programme | Section | Photos live in |
| --- | --- | --- |
| Meetups | `#meetups` | `assets/Events/S00N/` |
| Swift Student Outreach | `#outreach` | `assets/Events/student-outreach/<campus-slug>/` |
| Community nights | `#wwdc` | `assets/Events/watchparty/<year>/` |

Each programme section is a featured **latest** edition followed by a log of
every earlier one. To add an event:

1. Drop three photos in that programme's folder as `01`, `02`, `03`.
2. Demote the current featured edition into a new `<li class="edition">`
   row at the top of the log, keeping its photos, write-up and facts.
   Remove its `edition--latest` class and give it a `<details>` wrapper.
3. Put the new event in the feature slot and mark its log row
   `edition--latest`.
4. Update the count on that programme's card in `#work`.

Nothing else moves, and the page only grows by one collapsed row per event.
The section comments in `index.html` restate these steps in place.

## Get involved

- **WhatsApp** — the fastest way to hear about the next meetup
- **LinkedIn / Instagram / X / Mastodon** — linked in the site footer
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
