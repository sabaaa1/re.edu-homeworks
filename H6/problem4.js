function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function guessNumber(target) {
  let randomNumber;

  do {
    await sleep(1000);
    randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(randomNumber);
  } while (randomNumber !== target);

  console.log("u found it", target);
}

guessNumber(15);
