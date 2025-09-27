function calculateAverageAgeByDepartment(employees) {
  const result = {};

  employees.forEach((emp) => {
    if (!result[emp.dept]) result[emp.dept] = { sum: 0, count: 0 };

    result[emp.dept].sum += emp.age;
    result[emp.dept].count++;
  });

  for (let dept in result) {
    result[dept] = result[dept].sum / result[dept].count;
  }

  return result;
}

const employees = [
  { name: "Ana", dept: "HR", age: 25 },
  { name: "Nika", dept: "IT", age: 30 },
  { name: "Luka", dept: "IT", age: 22 },
  { name: "Saba", dept: "HR", age: 20 },
];

console.log(calculateAverageAgeByDepartment(employees));
