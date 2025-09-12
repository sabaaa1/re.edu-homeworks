function countWords(sentence) {
  if (!sentence || typeof sentence !== "string")
    throw Error("ENTER VALID SENTENCE");
  return sentence
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}
console.log(countWords("   bellingham     GOAT.      "));
