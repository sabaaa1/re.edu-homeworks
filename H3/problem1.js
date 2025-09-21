function caluclateSum(arr, ind = 0, sum = 0) {
  if (ind === arr.length) return sum;
  return caluclateSum(arr, ind + 1, sum + arr[ind]);
}

function caluclateAverage(arr) {
  let sum = caluclateSum(arr);
  return sum / arr.length;
}

console.log(caluclateAverage([1, 2, 3, 4, 5]));
console.log(caluclateAverage([10, 20, 30]));
console.log(caluclateAverage([-5, 0, 5]));
console.log(caluclateAverage([-1]));
