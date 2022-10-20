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

console.log(factorial(0));
