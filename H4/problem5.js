function arraySum(arr) {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
}

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum([7, -2, 9, -5]));
console.log(arraySum([]));
