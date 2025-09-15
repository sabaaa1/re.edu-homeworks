function reverseString(str) {
  if (typeof str !== "string") return "";
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  return res;
}

function reverseRecursion(str) {
  if (str === "") return "";
  return str[str.length - 1] + reverseRecursion(str.slice(0, str.length - 1));
}

console.log(reverseString("ludi + xinkali = love"));
console.log(reverseString("  Hello   World  "));
console.log(reverseString("3.14 is pi"));
console.log(reverseString(3.14));

console.log(reverseRecursion("ludi + xinkali = love"));
console.log(reverseRecursion("  Hello   World  "));
console.log(reverseRecursion("3.14 is pi"));
