export const capitalize = s => {
  if (typeof s !== "string") return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const uppercase = a => {
  if (typeof a !== "string") return "";
  return a.toUpperCase();
};

export const lowercase = a => {
  if (typeof a !== "string") return "";
  return a.toLowerCase();
};

export const trim = a => {
  if (typeof a !== "string") return "";
  return a.trim();
};

export const replace = (a, b, c) => {
  let sentence = c;
  if (typeof (a, b, c) !== "string") return "";
  return sentence.replace(a, b);
};
