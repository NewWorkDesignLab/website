const { redirects } = require("./vercel.json");

function toRe(src) {
  let out = "";
  let i = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === ":") {
      let j = i + 1;
      let name = "";
      while (j < src.length && /[A-Za-z0-9_]/.test(src[j])) name += src[j++];
      if (src[j] === "(") {
        let depth = 1;
        let k = j + 1;
        let pat = "";
        while (k < src.length && depth > 0) {
          if (src[k] === "(") depth++;
          else if (src[k] === ")") {
            depth--;
            if (!depth) break;
          }
          pat += src[k++];
        }
        out += "(" + pat + ")";
        i = k + 1;
      } else {
        out += "([^/]+)";
        i = j;
      }
    } else {
      out += c.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      i++;
    }
  }
  return new RegExp("^" + out + "$");
}

const rules = redirects.map((r) => ({ ...r, re: toRe(r.source) }));

function resolve(path) {
  const chain = [path];
  for (let hop = 0; hop < 6; hop++) {
    const cur = chain[chain.length - 1];
    if (/^https?:/.test(cur)) return chain;
    const hit = rules.find((r) => r.re.test(cur));
    if (!hit) return chain;
    const m = cur.match(hit.re);
    const names = [...hit.source.matchAll(/:([A-Za-z0-9_]+)/g)].map((x) => x[1]);
    const dest = hit.destination.replace(
      /:([A-Za-z0-9_]+)/g,
      (_, n) => m[names.indexOf(n) + 1] ?? "",
    );
    if (chain.includes(dest)) {
      chain.push(dest + "  <-- LOOP");
      return chain;
    }
    chain.push(dest);
  }
  chain.push("<-- TOO MANY HOPS");
  return chain;
}

for (const p of process.argv.slice(2)) {
  const chain = resolve(p).slice(1);
  console.log(p.padEnd(86), "->", chain.length ? chain.join(" -> ") : "(kein Treffer)");
}
