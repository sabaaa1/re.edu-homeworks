function removeDuplicates(str) {
  if (typeof str !== "string") return "";
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) result += str[i];
  }
  return result;
}
console.log(removeDuplicates("banana"));
console.log(removeDuplicates("xinkaliiiiii"));
console.log(removeDuplicates(123));
