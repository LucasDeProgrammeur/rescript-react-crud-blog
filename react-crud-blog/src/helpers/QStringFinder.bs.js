'use strict';

var $$Array = require("bs-platform/lib/js/array.js");
var Js_dict = require("bs-platform/lib/js/js_dict.js");

function makeSafe(s) {
  return decodeURI(s.replace(/\+/g, " ")).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function addKeyValue(accumulator, kvPair) {
  var match = kvPair.split("=");
  if (match.length !== 2) {
    return accumulator;
  }
  var key = match[0];
  if (key === "") {
    var match$1 = match[1];
    if (match$1 === "") {
      return accumulator;
    }
    
  }
  var codedValue = match[1];
  var value = makeSafe(codedValue);
  var v = Js_dict.get(accumulator, key);
  if (v !== undefined) {
    if (v.TAG) {
      accumulator[key] = {
        TAG: /* Multiple */1,
        _0: {
          hd: value,
          tl: v._0
        }
      };
    } else {
      accumulator[key] = {
        TAG: /* Multiple */1,
        _0: {
          hd: value,
          tl: {
            hd: v._0,
            tl: /* [] */0
          }
        }
      };
    }
  } else {
    accumulator[key] = {
      TAG: /* Single */0,
      _0: value
    };
  }
  return accumulator;
}

function parseQueryString(qString) {
  var result = Js_dict.fromList(/* [] */0);
  var kvPairs = qString.split("&");
  return $$Array.fold_left(addKeyValue, result, kvPairs);
}

function showItem(query, key) {
  var item = Js_dict.get(query, key);
  if (item !== undefined) {
    console.log(item._0);
  } else {
    console.log("no key");
  }
  
}

var query = parseQueryString("age=35&name=Ram%c3%b3n&multi=first&multi=second&occupation=baker");

showItem(query, "multi");

showItem(query, "age");

showItem(query, "name");

exports.makeSafe = makeSafe;
exports.addKeyValue = addKeyValue;
exports.parseQueryString = parseQueryString;
exports.showItem = showItem;
exports.query = query;
/* query Not a pure module */
