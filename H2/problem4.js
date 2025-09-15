function removeSpaces(str) {
  if (typeof str !== "string") return "";
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") res += str[i];
  }
  return res;
}
console.log(removeSpaces("ludi + xinkali = love"));
console.log(removeSpaces("  Hello   World  "));
console.log(removeSpaces("3.14 is pi"));
console.log(removeSpaces(3.14));
