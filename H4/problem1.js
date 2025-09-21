function removelastChar(arr) {
  return arr.map((item) => item.substring(0, item.length - 1));
}

console.log(removelastChar(["hello", "world", "!"]));
console.log(removelastChar([]));
