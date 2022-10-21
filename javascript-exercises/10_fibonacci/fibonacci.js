const fibonacci = function (n) {
  let x = 0;
  let y = 1;
  if (n === 0) return 0;
  if (n < 0) return "OOPS";
  for (let i = 1; i < n; i++) {
    const temp = y;
    y = x + y;
    x = temp;
  }

  return y;
};

// Do not edit below this line
module.exports = fibonacci;
