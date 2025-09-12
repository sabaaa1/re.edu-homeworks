function checkNum(num) {
  if (typeof num !== "number" || num < 0) throw Error("Enter valid num");
}

function sumEvenNums(num) {
  checkNum(num);
  let result = 0;
  for (let i = 0; i <= num; i += 2) {
    result += i;
  }
  return result;
}

console.log(sumEvenNums(5));
console.log(sumEvenNums(8));
