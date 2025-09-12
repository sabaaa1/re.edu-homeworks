function reverseString(str) {
  if (typeof str !== "string") throw new Error("ENTER STRING");
  return str.split("").reverse().join("");
}

function reverseStringTRYHARD(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
function reverseStringRecursive(str) {
  if (str.length <= 1) {
    return str;
  }
  return str[str.length - 1] + reverseStringRecursive(str.slice(0, -1));
}

console.log(reverseString("easy world"));
console.log(reverseStringTRYHARD("hard world"));
console.log(reverseStringRecursive("recursion world"));
