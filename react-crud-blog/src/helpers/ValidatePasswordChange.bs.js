'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Snackbar = require("snackbar");
var DatabaseFunctions = require("../backend/DatabaseFunctions.bs.js");

function validate(userId, currentPassword, newPassword, newPasswordRepeat) {
  var match = React.useState(function () {
        return /* LoadingUsername */0;
      });
  var setUser = match[1];
  var user = match[0];
  React.useEffect(function () {
        if (typeof user === "number") {
          if (user !== 0) {
            throw {
                  RE_EXN_ID: "Match_failure",
                  _1: [
                    "ValidatePasswordChange.res",
                    6,
                    4
                  ],
                  Error: new Error()
                };
          }
          return DatabaseFunctions.getUserById(userId, (function (newState) {
                        return Curry._1(setUser, (function (param) {
                                      return newState;
                                    }));
                      }));
        }
        var details = user._0;
        if (currentPassword === details.password) {
          if (Caml_obj.caml_notequal(newPassword, newPasswordRepeat)) {
            Snackbar.show("Your new password and the password you repeated didn't match");
          } else {
            DatabaseFunctions.updateUser(String(userId), details.username, newPassword);
          }
        } else {
          Snackbar.show("The password you typed in was incorrect.");
        }
        
      });
  
}

exports.validate = validate;
/* react Not a pure module */
