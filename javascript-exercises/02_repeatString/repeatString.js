const repeatString = function (input, numTimes) {
  let output = "";
  if (numTimes >= 0) {
    for (numTimes; numTimes > 0; numTimes -= 1) {
      output += input;
    }
    return output;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
