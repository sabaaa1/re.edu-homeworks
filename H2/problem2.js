function sum(num) {
  if (typeof num !== "number") return 0;
  let numstr = Math.abs(num).toString();
  let total = 0;
  for (let i = 0; i < numstr.length; i++) {
    total += Number(numstr[i]);
  }
  return total;
}
console.log(sum("John Doe"));
console.log(sum(123));
console.log(sum(456));
console.log(sum(0));
console.log(sum(-123));
