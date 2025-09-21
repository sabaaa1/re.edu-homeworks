function groupByClassAverage(students) {
  const result = {};

  for (const { cls, grade } of students) {
    if (!result[cls]) result[cls] = [];
    result[cls].push(grade);
  }

  for (const cls in result) {
    const grades = result[cls];
    result[cls] = grades.reduce((a, b) => a + b) / grades.length;
  }

  return result;
}

const test1 = [
  { name: "Ann", cls: "A", grade: 92 },
  { name: "Ben", cls: "B", grade: 75 },
  { name: "vicxa", cls: "B", grade: 85 },
  { name: "racxa", cls: "A", grade: 91 },
  { name: "DELIBATHEONE", cls: "A", grade: 1000 },
];

console.log(groupByClassAverage(test1));
