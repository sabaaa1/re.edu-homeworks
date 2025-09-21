function filterLongWords(arr) {
  return arr
    .filter((word) => word.length > 5)
    .map((word) => word.toUpperCase())
    .join("#");
}
console.log(filterLongWords(["cat", "parrot", "dog", "elephant"]));
console.log(filterLongWords([]));
