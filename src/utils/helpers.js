export function normalizeNameToId(name = "Jane Student") {
  return String(name).trim().toLowerCase().replace(/\s+/g, "_");
}

export function isNumericToken(token) {
  return typeof token === "string" && /^\d+$/.test(token);
}

export function isAlphabeticToken(token) {
  return typeof token === "string" && /^[a-zA-Z]+$/.test(token);
}

export function sumNumericTokens(tokens) {
  const sum = tokens.reduce((acc, t) => acc + parseInt(t, 10), 0);
  return String(sum);
}

export function alternatingCapsReverseConcat(alphaTokens) {
  const letters = [];
  alphaTokens.forEach(tok => {
    for (const ch of tok) letters.push(ch);
  });
  letters.reverse();
  return letters.map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase())).join("");
}

export function partitionTokens(dataArray) {
  const even = [];
  const odd = [];
  const alphabets = [];
  const specials = [];

  dataArray.forEach(raw => {
    const token = typeof raw === "string" ? raw : String(raw);

    if (isNumericToken(token)) {
      const n = parseInt(token, 10);
      if (n % 2 === 0) even.push(token);
      else odd.push(token);
      return;
    }

    if (isAlphabeticToken(token)) {
      alphabets.push(token.toUpperCase());
      return;
    }

    specials.push(token);
  });

  return { even, odd, alphabets, specials };
}
