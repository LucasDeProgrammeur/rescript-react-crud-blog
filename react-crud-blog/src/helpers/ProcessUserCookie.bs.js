'use strict';

var Cookies = require("../storageFunctions/Cookies.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function getLoggedInUserId(param) {
  var cookie = Cookies.getCookie("userId");
  if (cookie.length === 1) {
    return Caml_array.get(cookie, 0);
  } else {
    return "Login";
  }
}

exports.getLoggedInUserId = getLoggedInUserId;
/* No side effect */
