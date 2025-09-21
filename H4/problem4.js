function countSums(arr, positiveSum = 0, negativeSum = 0) {
  if (arr.length === 0) return [positiveSum, negativeSum];

  const current = arr[0];
  if (current > 0) positiveSum += current;
  else if (current < 0) negativeSum += current;

  return countSums(arr.slice(1), positiveSum, negativeSum);
}

console.log(countSums([1, -2, 3, 4, -5]));
console.log(countSums([10, -20, 30, 0]));
console.log(countSums([0, 0, 0, -0]));
