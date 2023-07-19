// time O(n) || space O(1)

function nonConstructibleChange(coins) {
  if (coins.length <= 0) {
    return 1;
  }
  coins.sort((a, b) => a - b);
  let currentChange = 0;
  for (let i = 0; i < coins.length; i++) {
    if (currentChange + 1 >= coins[i]) {
      currentChange += coins[i];
    } else {
      return currentChange + 1;
    }
  }
  return currentChange + 1;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));

// time O(n) || space O(1)

// solution by chaining fn

function nonConstructibleChange(coins) {
  if (coins.length <= 0) {
    return 1;
  }
  let currentChange = 1;
  coins
    .sort((a, b) => a - b)
    .forEach((coin) =>
      coin < currentChange + 1 ? (currentChange += coin) : 0
    );

  return currentChange;
}

console.log(nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
