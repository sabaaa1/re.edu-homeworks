function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countdown(number, interval) {
  for (let i = number; i >= 0; i--) {
    console.log(i);
    if (i > 0) {
      await sleep(interval);
    }
  }
}

countdown(5, 1000);
