function uniqueArray(resultArray, restrictedNums) {
  return resultArray.filter((item) => !restrictedNums.includes(item));
}

console.log(uniqueArray([1, 2, 3, 4, 5], [2, 4, -3, "5"]));
console.log(uniqueArray([], [10, 3]));
console.log(uniqueArray([5, 6, 7, 8, 9], []));
