const palindromes = function (word) {
  const caps = word.toLowerCase();
  const punc = caps.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const arr = punc.split("");
  const reverse = arr.reverse();
  const joined = reverse.join("");
  if (joined === punc) {
    return true;
  }
};

// Do not edit below this line
module.exports = palindromes;
