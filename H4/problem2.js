function twoMinSum(arr) {
  let sortedArr = arr.sort((a, b) => a - b);
  if (sortedArr.length < 2) return null;
  return sortedArr[0] + sortedArr[1];
}

console.log(twoMinSum([10, -2, 3, 4]));
console.log(twoMinSum([5, 8, -9, 0]));
console.log(twoMinSum([]));
