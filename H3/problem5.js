function onlyPalindromes(arr) {
  return arr.filter((item) => {
    if (item === item.split("").reverse().join("")) return item;
  });
}
console.log(onlyPalindromes(["racecar", "racxa", "level", "dacxa", "madam"]));
console.log(onlyPalindromes(["-00", "616", "77"]));
console.log(onlyPalindromes(["a", "b", "c", "d"]));
console.log(onlyPalindromes([]));
