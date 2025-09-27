function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function test() {
  console.log("ha");
  await sleep(3000);
  console.log("he");
}
test();
