// Builds photo records for the event data files.
//
//   const S002 = photos("assets/Events/S002", "jpeg");
//   S002(1, "Alt text")  ->  assets/Events/S002/01.jpeg, with the -640 and
//                            -1024 variants beside it in its srcset.
//
// Pass { width } when the original is narrower than 1280px, and
// { variants } when it has fewer resized copies (see README).
export function photos(dir, ext) {
  return (n, alt, { width = 1280, variants = [640, 1024] } = {}) => {
    const base = `${dir}/${String(n).padStart(2, "0")}`;
    const src = `${base}.${ext}`;
    const srcset = [...variants.map((w) => `${base}-${w}.${ext} ${w}w`), `${src} ${width}w`].join(", ");
    return { src, srcset, alt };
  };
}
