function getGrade(score) {
  if (typeof score !== "number" || score < 0 || score > 100) {
    throw new Error("Enter valid score between 0-100");
  }
  if (score >= 91) return "A";
  if (score >= 81) return "B";
  if (score >= 71) return "C";
  if (score >= 61) return "E";
  if (score >= 51) return "D";
  return "F";
}

console.log("100 - ", getGrade(100));
console.log("getGrade(85):", getGrade(81));
console.log("getGrade(75):", getGrade(73));
console.log("getGrade(60):", getGrade(60));
console.log("getGrade(0):", getGrade(0));
