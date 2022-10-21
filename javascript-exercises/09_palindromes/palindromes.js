const palindromes = function (word) {
  const noSpace = word.split(" ").join();
  const caps = noSpace.toLowerCase();
  const punc = caps.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  const arr = punc.split("");
  const reverse = arr.reverse();
  const joined = reverse.join("");
  if (joined === punc) {
    return true;
  } else {
    return false;
  }
};

//Method used in Odin project
// const palindromesP = function (string) {
//   const pString = string.toLowerCase().replace(/[^a-z]/g, "");
//   return pString.split("").reverse().join("") === pString;
// };

// Do not edit below this line
module.exports = palindromes;
