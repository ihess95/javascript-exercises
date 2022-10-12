const ftoc = function (temp) {
  const result = (temp - 32) * (5 / 9);
  return parseFloat(result.toFixed(1));
};

const ctof = function (temp) {
  const result = temp * (9 / 5) + 32;
  return parseFloat(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
