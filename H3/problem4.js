function findMax(arr) {
  return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
}

console.log(findMax([1, 4, -5]));
console.log(findMax([-10, -5, -3, -1]));
console.log(findMax([42]));
console.log(findMax([]));
