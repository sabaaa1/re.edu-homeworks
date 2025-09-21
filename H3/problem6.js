function mostFrequent(arr) {
  if (arr.length === 0) return null;

  const counts = new Map();
  for (const num of arr) {
    counts.set(num, (counts.get(num) || 0) + 1);
  }

  let maxCount = 0;
  let result = null;
  for (const [num, frequency] of counts) {
    if (frequency > maxCount) {
      maxCount = frequency;
      result = num;
    }
  }

  return result;
}

console.log(mostFrequent([4, 5, 6, 5, 4, 5]));
console.log(mostFrequent([7, 7, 8, 8, 9]));
console.log(mostFrequent([]));
