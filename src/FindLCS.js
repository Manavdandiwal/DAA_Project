function max(a, b) {
  if (a > b) return a;
  return b;
}

function reverse(str) {
  return str.split("").reverse().join("");
}

export default function LCS(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  var dp = new Array(len1 + 1);

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len2 + 1);
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = 0;
    }
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  console.log(dp);
  var str = "";
  let x = len1,
    y = len2;

  while (x > 0 && y > 0) {
    if (str1[x - 1] === str2[y - 1]) {
      str += str1[x - 1];
      x--;
      y--;
    } else if (dp[x][y - 1] > dp[x - 1][y]) {
      y--;
    } else {
      x--;
    }
  }

  console.log(str);
  str = reverse(str);
  console.log(str);
  return { dp, str };
}
