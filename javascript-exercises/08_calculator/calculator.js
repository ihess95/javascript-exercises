const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  const sum = arr.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};

const multiply = function (arr) {
  return arr.length
    ? arr.reduce((accumulator, nextItem) => accumulator * nextItem)
    : 0;
};

const power = function (x, y) {
  let p = 1;
  for (let i = 0; i < y; i++) {
    p *= x;
  }
  return p;
};

const factorial = function (x) {
  let p = x;
  for (let i = x - 1; i > 0; i--) {
    p *= i;
  }
  if (p === 0) {
    return 1;
  } else {
    return p;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
