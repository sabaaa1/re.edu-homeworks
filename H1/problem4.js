function countVowels(word) {
  if (!word || typeof word !== "string") throw Error("ENTER VALID STRING");
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of word) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("iko arabets rostevan"));
