const removeFromArray = function (arr, toRemove) {
  const args = Array.from(arguments);
  for (let i = 0; i < arguments.length; i++) {
    const index = arr.indexOf(arguments[i]);
    if (index > -1) {
      arr.splice(index, 1);
    }
  }
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
