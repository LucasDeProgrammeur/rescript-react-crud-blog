'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Cookies = require("../../../storageFunctions/Cookies.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Validators = require("../../../validators/Validators.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var DataConverters = require("../../../helpers/DataConverters.bs.js");
var DatabaseFunctions = require("../../../backend/DatabaseFunctions.bs.js");

function ChangePassword(Props) {
  var cookie = Caml_format.caml_int_of_string(Caml_array.get(Cookies.getCookie("userId"), 0));
  var match = React.useState(function () {
        return "";
      });
  var setCurrentPassword = match[1];
  var currentPassword = match[0];
  var match$1 = React.useState(function () {
        
      });
  var setActualCurrentPassword = match$1[1];
  var actualCurrentPassword = match$1[0];
  var match$2 = React.useState(function () {
        return "";
      });
  var setNewPassword = match$2[1];
  var newPassword = match$2[0];
  var match$3 = React.useState(function () {
        return "";
      });
  var setNewPasswordConfirmation = match$3[1];
  var newPasswordConfirmation = match$3[0];
  var match$4 = React.useState(function () {
        
      });
  var setUsername = match$4[1];
  var username = match$4[0];
  var match$5 = React.useState(function () {
        return /* LoadingUsername */0;
      });
  var setUser = match$5[1];
  var user = match$5[0];
  React.useEffect(function () {
        if (typeof user === "number") {
          if (user !== 0) {
            return ;
          } else {
            return DatabaseFunctions.getUserById(cookie, (function (newState) {
                          return Curry._1(setUser, (function (param) {
                                        return newState;
                                      }));
                        }));
          }
        }
        var details = user._0;
        if (username !== undefined) {
          
        } else {
          Curry._1(setUsername, (function (param) {
                  return details.username;
                }));
        }
        if (actualCurrentPassword !== undefined) {
          
        } else {
          Curry._1(setActualCurrentPassword, (function (param) {
                  return details.password;
                }));
        }
        
      });
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Change user password"), React.createElement("h4", undefined, "Current password"), React.createElement("input", {
                  type: "password",
                  value: currentPassword,
                  onChange: (function (e) {
                      var value = e.target.value;
                      return Curry._1(setCurrentPassword, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("h4", undefined, "New password"), React.createElement("input", {
                  type: "password",
                  onChange: (function (e) {
                      var value = e.target.value;
                      return Curry._1(setNewPassword, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("h4", undefined, "Repeat new password"), React.createElement("input", {
                  type: "password",
                  onChange: (function (e) {
                      var value = e.target.value;
                      return Curry._1(setNewPasswordConfirmation, (function (param) {
                                    return value;
                                  }));
                    })
                }), React.createElement("button", {
                  onClick: (function (param) {
                      return Validators.validatePasswordChange(cookie, DataConverters.optionToString(username), currentPassword, DataConverters.optionToString(actualCurrentPassword), newPassword, newPasswordConfirmation);
                    })
                }, "Change password"));
}

var make = ChangePassword;

exports.make = make;
/* react Not a pure module */
