function getAbbr(str) {
  return str
    .split(" ")
    .map((s) => s[0].toUpperCase())
    .join(".");
}
console.log(getAbbr("John Doe"));
console.log(getAbbr("edson arantes do nascimento Pele"));
console.log(getAbbr("Jude GOAT Bellingham"));
