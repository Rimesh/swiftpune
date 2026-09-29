// Meetups — every edition, newest first.
//
// TO ADD A MEETUP (S003, S004, …):
//   1. Drop its photos in assets/Events/S00N/ as 01/02/03 (see README for
//      the -1024 / -640 variants).
//   2. Add an entry to the TOP of `events` below. The first entry is
//      featured on /meetups; every other entry becomes an expanded row in
//      the editions log, using its `summary` (or `lead`) and `facts`.
//   3. That's it — the homepage card count, the "latest" date and the
//      hosts list on the homepage all follow from this file.
//
// `runSheet` and `recap` only render while an edition is the latest one.
import { photos } from "../_lib/photos.js";

const S002 = photos("assets/Events/S002", "jpeg");
const S001 = photos("assets/Events/S001", "jpeg");

export default {
  latestLabel: "latest edition",
  logLabel: "editions.log",

  // Homepage programme card.
  card: {
    tag: "Meetups",
    tagClass: "meetup",
    media: "teal",
    title: "Talks for people already shipping.",
    desc: "Half a weekend morning at a host company's office. Three 20-minute talks, a hands-on lab, every talk recorded.",
    unit: ["edition", "editions"],
    cta: "Every edition",
    image: S002(1, "SwiftPune S002 meetup at Xplor Technologies"),
  },

  events: [
    {
      key: "S002",
      host: "Xplor Technologies",
      name: "Xplor Technologies, Kharadi",
      date: "2026-03-08",
      title: 'Three talks and a <span class="ink">hands-on lab</span>.',
      lead: `March 8, 2026, fourteen floors up in Kharadi. App
        discoverability, CI/CD with Fastlane, and a real-world Swift 6
        migration — then laptops out for a lab on decomposing Apple
        platform designs.`,
      facts: [
        ["Hosted by", "Xplor Technologies, Kharadi"],
        ["When", "Sunday, March 8, 2026"],
        ["On the day", "3 talks, 1 lab, all recorded"],
      ],
      photos: {
        label: "S002 photos",
        items: [1, 2, 3].map((n) => S002(n, `SwiftPune S002 meetup at Xplor Technologies — photo ${n}`)),
      },
      runSheet: [
        { time: "09:45", kind: "check", title: "Doors &amp; check-in" },
        {
          time: "10:15",
          kind: "talk",
          title: "Make Your Apps More Discoverable",
          by: '<a href="https://www.linkedin.com/in/kanishka-c/" target="_blank" rel="noopener">Kanishka Chaudhry</a> — SDE @ Upstox · 2× Apple Scholar',
          links: [{ href: "https://www.youtube.com/watch?v=rjuUAT50alc", label: "Watch recording" }],
        },
        { time: "10:35", kind: "sponsor", title: "Stage minute — Xplor Technologies", by: "Venue &amp; food sponsor for S002." },
        {
          time: "10:50",
          kind: "talk",
          title: "CI/CD With GitHub Actions and Fastlane",
          by: '<a href="https://www.linkedin.com/in/garimasaini0/" target="_blank" rel="noopener">Garima Saini</a> — Sr. iOS Engineer @ Xplor',
          links: [{ href: "https://www.youtube.com/watch?v=QNa4UO-9G1w", label: "Watch recording" }],
        },
        {
          time: "11:10",
          kind: "talk",
          title: "Swift 6 Migration",
          by: '<a href="https://www.linkedin.com/in/divya-maloo-72629284/" target="_blank" rel="noopener">Divya Maloo</a> (Sr. iOS @ PhonePe) &amp; <a href="https://www.linkedin.com/in/swetal-matkar-73a836204/" target="_blank" rel="noopener">Swetal Matkar</a> (iOS Developer)',
          links: [{ href: "https://www.youtube.com/watch?v=LWGDs-tR6_o", label: "Watch recording" }],
        },
        { time: "11:30", kind: "break", title: "Refreshments &amp; networking" },
        {
          time: "12:00",
          kind: "lab",
          title: "Decompose Designs for Apple Platforms",
          by: '<a href="https://www.linkedin.com/in/dezinezync/" target="_blank" rel="noopener">Nikhil Nigade</a> — iOS, macOS &amp; systems engineer',
          links: [
            { href: "https://github.com/dezinezync/SwiftPuneS002-Labs-Starter", label: "Labs · Starter" },
            { href: "https://github.com/dezinezync/SwiftPuneS002-Labs-Final", label: "Labs · Final" },
          ],
        },
        { time: "12:30", kind: "close", title: "Closing &amp; networking" },
      ],
      recap: [
        {
          eyebrow: "venue",
          title: "Xplor Tech1 Systems",
          body: "14th Floor, International Technology Park · Block 1, Wing 2 · Kharadi, Pune 411014",
          link: {
            href: "https://www.google.com/maps/place/Xplor+Tech1+Systems+Private+Limited/@18.5616118,73.9564067,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2c34f6c6895e3:0xf4a5781b456b38a3!8m2!3d18.5616118!4d73.9564067!16s%2Fg%2F11vc7hlg62",
            label: "Open in Maps",
          },
        },
        {
          eyebrow: "hosted_by",
          title: "Xplor Technologies",
          body: "Hosted venue and food for S002. A genuine thank-you from the SwiftPune room.",
          link: { href: "https://www.xplortechnologies.com", label: "xplortechnologies.com" },
        },
        {
          eyebrow: "registration",
          link: { href: "https://luma.com/1jb79fac", label: "S002 event page on Luma", strong: true },
        },
      ],
    },

    {
      key: "S001",
      host: "EPAM Systems",
      name: "EPAM Systems, Pune",
      date: "2025-11-24",
      summary: `SwiftPune began as a single question — is there a room
        in Pune for the people who build on Apple's platforms?
        S001 was the answer. EPAM Systems gave us the space, a
        handful of developers gave the talks, and a roomful of
        strangers left as a community that wanted to come back.`,
      facts: [
        ["Hosted by", "EPAM Systems, Pune"],
        ["On the day", "Talks, then hallway conversations that ran long"],
      ],
      photos: {
        label: "S001 photos",
        items: [1, 2, 3].map((n) => S001(n, `SwiftPune's first meetup, S001 — photo ${n}`)),
      },
    },
  ],
};
