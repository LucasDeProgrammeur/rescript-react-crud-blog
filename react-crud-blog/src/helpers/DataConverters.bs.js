'use strict';


function optionToString(option) {
  if (option !== undefined) {
    return option;
  } else {
    return "";
  }
}

function optionToInt(option) {
  if (option !== undefined) {
    return option;
  } else {
    return 0;
  }
}

exports.optionToString = optionToString;
exports.optionToInt = optionToInt;
/* No side effect */
