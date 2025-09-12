function hasNumber(password) {
  for (let char of password) {
    if (char >= "0" && char <= "9") return true;
  }
  return false;
}

function hasCapital(password) {
  for (let char of password) {
    if (char >= "A" && char <= "Z") return true;
  }
  return false;
}

function checkPass(password) {
  if (typeof password !== "string") return false;
  if (password.length < 8) return false;
  if (!hasNumber(password)) return false;
  if (!hasCapital(password)) return false;
  return true;
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function main() {
  rl.question("Please enter password: ", (input) => {
    if (checkPass(input)) {
      console.log("Password accepted");
      rl.close();
      return;
    }
    console.log("Please enter valid password:");
    main();
  });
}

main();
