function groupByCurrency(transactions) {
  const result = {};
  for (const { amount, currency } of transactions) {
    if (!result[currency]) result[currency] = [];
    result[currency].push({ amount });
  }
  return result;
}
const transactions = [
  { amount: 10, currency: "EUR" },
  { amount: 20, currency: "USD" },
  { amount: 100, currency: "GEL" },
  { amount: 50, currency: "EUR" },
  { amount: 1, currency: "GEL" },
  { amount: 5, currency: "USD" },
];
return console.log(groupByCurrency(transactions));
