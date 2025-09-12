function celsiusToFahrenheit(celsius) {
  if (isNaN(celsius)) throw new Error("ENTER CORRECT NUM");
  return (celsius * 9) / 5 + 32;
}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("for example: enter 3 → and u will see", celsiusToFahrenheit(3));

rl.question("PLS enter Celsius ", (input) => {
  const celsius = parseFloat(input);
  console.log(celsiusToFahrenheit(celsius));
  rl.close();
});
