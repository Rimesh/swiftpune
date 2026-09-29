import fs from "node:fs";
import path from "node:path";

const OUTPUT = "_site";

// Arrow glyphs used on links and buttons. `out` = leaves the site (↗),
// `next` = goes further in (→), `back` = returns (←).
const ARROWS = {
  out: "M7 17 17 7M9 7h8v8",
  next: "M5 12h14M13 5l7 7-7 7",
  back: "M19 12H5M11 5l-7 7 7 7",
};

const fmt = (iso, opts) => {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d || 1)).toLocaleDateString("en-US", { timeZone: "UTC", ...opts });
};

export default function (eleventyConfig) {
  // Static files are served exactly as they sit in the repo.
  eleventyConfig.addPassthroughCopy({ assets: "assets", css: "css", js: "js" });
  eleventyConfig.ignores.add("**/.DS_Store");

  eleventyConfig.addShortcode("arrow", (kind, size, stroke) =>
    `<svg viewBox="0 0 24 24" width="${size || 18}" height="${size || 18}" fill="none" stroke="currentColor" stroke-width="${stroke || 2.4}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${ARROWS[kind] || ARROWS.out}"/></svg>`
  );

  // "2026-03-08" -> "Mar 8, 2026"; month-only "2026-04" -> "Apr 2026".
  eleventyConfig.addFilter("shortDate", (iso) =>
    iso.length > 7 ? fmt(iso, { month: "short", day: "numeric", year: "numeric" }) : fmt(iso, { month: "short", year: "numeric" })
  );
  // -> "Mar 2026", for the homepage cards.
  eleventyConfig.addFilter("monthYear", (iso) => fmt(iso, { month: "short", year: "numeric" }));
  // "S002" -> "S003": the open slot in the homepage hosts list.
  eleventyConfig.addFilter("nextKey", (key) =>
    key.replace(/\d+$/, (n) => String(Number(n) + 1).padStart(n.length, "0"))
  );

  // Cloudflare serves meetups.html at /meetups; make the dev server do the same.
  eleventyConfig.setServerOptions({
    middleware: [
      (req, res, next) => {
        const [pathname, query] = req.url.split("?");
        if (pathname !== "/" && !path.extname(pathname) && fs.existsSync(path.join(OUTPUT, `${pathname}.html`))) {
          req.url = `${pathname}.html${query ? `?${query}` : ""}`;
        }
        next();
      },
    ],
  });

  return {
    dir: { input: "src", includes: "_includes", data: "_data", output: OUTPUT },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk"],
  };
}
