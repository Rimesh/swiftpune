// Links and contact details used across every page. Change a URL here and
// it changes in the nav, the Connect block and the footer at once.
export default {
  url: "https://swiftpune.org",
  email: "community@swiftpune.org",

  whatsapp: "https://chat.whatsapp.com/FbfE8mr1aIA8Ac97EHV4yw",
  linkedin: "https://www.linkedin.com/company/swiftpune/",
  youtube: "https://www.youtube.com/@SwiftPune",
  instagram: "https://www.instagram.com/swiftpune/",
  x: "https://twitter.com/swiftpune",
  mastodon: "https://mastodon.social/@swiftpune",

  forms: {
    pitchTalk: "https://forms.gle/r2qK6PbT3RxkErJm9",
    campus: "https://forms.gle/CeZP6YjRmobC9hE4A",
  },

  // Top-level pages, in nav order. `key` matches each page's `nav` front matter.
  nav: [
    { key: "meetups", href: "/meetups", label: "Meetups", mobile: "Meetups" },
    { key: "outreach", href: "/student-outreach", label: "Students", mobile: "Student outreach" },
    { key: "casuals", href: "/casuals", label: "Casuals", mobile: "Casuals" },
  ],

  // The follow-along channels in the Connect block, after the WhatsApp tile.
  channels: [
    { icon: "linkedin", key: "linkedin", name: "LinkedIn", desc: "Announcements and event recaps.", brand: "#0A66C2" },
    { icon: "youtube", key: "youtube", name: "YouTube", desc: "Every meetup talk, recorded.", brand: "#FF0000" },
    { icon: "instagram", key: "instagram", name: "Instagram", desc: "Photos from our events.", brand: "#E4405F" },
    { icon: "x", key: "x", name: "X (Twitter)", desc: "Quick updates from the community.", brand: "#000000" },
  ],
};
