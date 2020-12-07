'use strict';

var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime + Math.imul(Math.imul(Math.imul(Math.imul(exdays, 24), 60), 60), 1000) | 0);
  var expires = "expires=" + d.toUTCString;
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
}

function getCookie(cname) {
  var cookieValues = document.cookie.split(";");
  console.log(cookieValues);
  return Belt_Array.keepMap(cookieValues, (function (x) {
                if (x.toLowerCase().includes(cname.toLowerCase())) {
                  return Caml_array.get(x.split("="), 1);
                }
                
              }));
}

function clearCookie(cname) {
  document.cookie = cname + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
  
}

exports.setCookie = setCookie;
exports.getCookie = getCookie;
exports.clearCookie = clearCookie;
/* No side effect */
