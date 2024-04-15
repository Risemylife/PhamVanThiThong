var sum_to_n_a = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
};

var sum_to_n_b = function (n) {
  return (n * (n + 1)) / 2;
};

var sum_to_n_c = function findSum(n) {
  if (n !== 0) return n + findSum(n - 1);
  else return n;
};
