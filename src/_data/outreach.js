// Swift Student Outreach — every campus session, newest first.
//
// TO ADD A SESSION: drop its photos in
// assets/Events/student-outreach/<campus-slug>/ as 01/02/03, then add an
// entry to the TOP of `events`. The first entry is featured on
// /student-outreach; the rest become expanded rows in the sessions log.
// The homepage card follows automatically.
import { photos } from "../_lib/photos.js";
import site from "./site.js";

const MITWPU = photos("assets/Events/student-outreach/MIT-WPU-sept-2026", "jpg");
const BV = photos("assets/Events/student-outreach/bharati-vidyapeeth-2026", "jpg");
const VU = photos("assets/Events/student-outreach/vu-april-2026", "jpeg");

export default {
  latestLabel: "latest session",
  logLabel: "sessions.log",

  card: {
    tag: "Student outreach",
    tagClass: "outreach",
    media: "green",
    title: "Swift, taught on campus.",
    desc: "We run the session inside the university, on their timetable, for students who haven't opened Xcode yet.",
    unit: ["session", "sessions"],
    cta: "Every session",
    image: MITWPU(1, "Students at their Macs in the lab at MIT-WPU, with SwiftPune on the screen"),
  },

  events: [
    {
      key: "03",
      tag: "MIT-WPU",
      name: "MIT World Peace University, Pune",
      date: "2026-09-11",
      title: 'A lab full of <span class="ink">Macs</span>.',
      lead: `A Friday morning in MIT World Peace University's Mac lab:
        students at the iMacs, Swift and SwiftUI on the big screens,
        and the SwiftPune crew in the room for every question.`,
      facts: [
        ["Campus", "MIT World Peace University (MIT-WPU), Pune"],
        ["When", "Friday, September 11, 2026"],
      ],
      note: { href: site.forms.campus, label: "Bring SwiftPune to your campus" },
      photos: {
        label: "MIT-WPU session photos",
        items: [
          MITWPU(1, "Students at their Macs in the lab at MIT-WPU, with SwiftPune on the screen"),
          MITWPU(2, "A room of students following the session from their Macs at MIT-WPU"),
          MITWPU(3, "The SwiftPune crew gathered around a laptop at MIT-WPU"),
        ],
      },
    },

    {
      key: "02",
      tag: "Bharati Vidyapeeth",
      name: "Bharati Vidyapeeth (IMED), Pune",
      date: "2026-07-25",
      title: 'Get started with <span class="ink">iOS development</span>.',
      lead: `A full session at Bharati Vidyapeeth's Institute of Management
        and Entrepreneurship Development, on Swift, SwiftUI and what
        comes after — closing with Abhishek Shinde on what a working
        iOS developer's day actually looks like.`,
      facts: [
        ["Campus", "Institute of Management &amp; Entrepreneurship Development, Bharati Vidyapeeth, Pune"],
        ["When", "Saturday, July 25, 2026"],
        ["Session", "Get Started with iOS Development — Swift, SwiftUI, and Beyond"],
      ],
      note: { href: site.forms.campus, label: "Bring SwiftPune to your campus" },
      photos: {
        label: "Bharati Vidyapeeth session photos",
        items: [
          BV(1, "Get Started with iOS Development — Swift, SwiftUI, and Beyond, on stage at Bharati Vidyapeeth", { width: 1112 }),
          BV(2, "Abhishek Shinde presenting Day in the Life to students at Bharati Vidyapeeth"),
          BV(3, "The SwiftPune crew with IMED faculty after the session"),
        ],
      },
    },

    {
      key: "01",
      name: "Vishwakarma University, Pune",
      date: "2026-04",
      summary: `The one that started the programme. We ran the first
        campus session at Vishwakarma University, Pune —
        hands-on Swift for students where they already study,
        which turned out to work far better than asking them
        to find us on a weekend.`,
      facts: [
        ["Campus", "Vishwakarma University, Pune"],
        ["For", "Students getting started with Swift &amp; SwiftUI"],
      ],
      photos: {
        label: "Vishwakarma University session photos",
        items: [1, 2, 3].map((n) => VU(n, `Swift Student Outreach at Vishwakarma University — photo ${n}`)),
      },
    },
  ],
};
