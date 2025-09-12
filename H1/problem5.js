function factorial(num) {
  checkNum(num);
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

function factorialRecursive(num) {
  checkNum(num);
  if (num === 0) return 1;
  return num * factorialRecursive(num - 1);
}

function checkNum(num) {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num))
    throw Error("Enter valid num");
}

console.log(factorial(1));
console.log(factorial(4));
console.log(factorialRecursive(1));
console.log(factorialRecursive(5));
