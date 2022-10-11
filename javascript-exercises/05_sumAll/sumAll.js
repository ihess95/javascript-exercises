const sumAll = function (num1, num2) {
  let total = 0;
  let smallerNumber = num1;
  let largerNumber = num2;
  if (
    num1 < 0 ||
    num2 < 0 ||
    typeof num1 !== "number" ||
    typeof num2 !== "number"
  ) {
    return "ERROR";
  } else {
    if (num2 < num1) {
      smallerNumber = num2;
      largerNumber = num1;
    }
    for (let i = smallerNumber; i <= largerNumber; i++) {
      total += i;
    }
    return total;
  }
};

// Do not edit below this line
module.exports = sumAll;
