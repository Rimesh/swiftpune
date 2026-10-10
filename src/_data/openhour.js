// Open Hour — every online session, newest first.
//
// TO ADD A SESSION (OH002, OH003, …): drop a photo or screenshot in
// assets/Events/OpenHour/00N/ as 01 (see README for the -1024 / -640
// variants), then add an entry to the TOP of `events`. The first entry is
// featured on /open-hour; the rest become expanded rows in the sessions
// log. The homepage card follows.
import { photos } from "../_lib/photos.js";
import site from "./site.js";

const OH001 = photos("assets/Events/OpenHour/001", "jpg");

export default {
  latestLabel: "latest open hour",
  logLabel: "open_hours.log",

  card: {
    tag: "Open Hour",
    tagClass: "openhour",
    media: "blue",
    title: "One topic, online.",
    desc: "A video call around a single topic. Someone leads it, then it's open questions and a chance to meet the community from home.",
    unit: ["session", "sessions"],
    cta: "Every open hour",
    image: OH001(1, "The first SwiftPune Open Hour on Google Meet, iPhone Duo with Nikhil Nigade", { width: 1189 }),
  },

  events: [
    {
      key: "OH001",
      name: "iPhone Duo, with Nikhil Nigade",
      date: "2026-10-10",
      title: 'iPhone Duo, with <span class="ink">Nikhil Nigade</span>.',
      lead: `The first Open Hour. Nikhil Nigade led the conversation on
        iPhone Duo, then the floor opened up for questions — community
        members on one call on a Saturday morning, from wherever they were.`,
      facts: [
        ["Where", "Online, on Google Meet"],
        ["When", "Saturday, October 10, 2026"],
        ["Led by", '<a href="https://www.linkedin.com/in/dezinezync/" target="_blank" rel="noopener">Nikhil Nigade</a>'],
      ],
      note: { href: site.whatsapp, label: "Hear about the next one on WhatsApp" },
      photos: {
        label: "OH001 photos",
        items: [OH001(1, "Community members on the first SwiftPune Open Hour call, iPhone Duo with Nikhil Nigade", { width: 1189 })],
      },
    },
  ],
};
