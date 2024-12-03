// input: [7,1,5,3,6,4]
// output: 5
// buy in 1 and sell in 6 => 6 - 1 = 5
function maxProfit(prices: number[]): number {
  let bestBuy = prices[0];
  let current_profit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < bestBuy) {
      bestBuy = prices[i]; // lowest is always best option to buy
    } else {
      // in each step we calc our profit and change sell stock
      // if it give us more profit than current profit
      current_profit = Math.max(current_profit, prices[i] - bestBuy);
    }
  }

  return current_profit;
}
