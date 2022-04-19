function max(a, b) {
  if (a >= b) return a;
  return b;
}

export default function Knapsack(profit, weight, W) {
  // profit array, weight array, weight of Knapsack
  const N = profit.length;

  var dp = new Array(N + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(W + 1);
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (weight[i - 1] <= j) {
        dp[i][j] = max(
          dp[i - 1][j],
          dp[i - 1][j - weight[i - 1]] + profit[i - 1]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp);
  return dp;
}
