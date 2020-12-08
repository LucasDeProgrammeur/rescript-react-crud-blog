'use strict';

var React = require("react");
var Cookies = require("../../../storageFunctions/Cookies.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ValidatePasswordChange = require("../../../helpers/ValidatePasswordChange.bs.js");

function ChangePassword(Props) {
  var cookie = Caml_array.get(Cookies.getCookie("userId"), 0);
  var match = React.useState(function () {
        return "";
      });
  var currentPassword = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var newPassword = match$1[0];
  var match$2 = React.useState(function () {
        return "";
      });
  var newPasswordConfirmation = match$2[0];
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Change user password"), React.createElement("h4", undefined, "Current password"), React.createElement("input", {
                  type: "password"
                }), React.createElement("h4", undefined, "New password"), React.createElement("input", {
                  type: "password"
                }), React.createElement("h4", undefined, "Repeat new password"), React.createElement("input", {
                  type: "password"
                }), React.createElement("button", {
                  onClick: (function (param) {
                      return ValidatePasswordChange.validate(Caml_format.caml_int_of_string(cookie), currentPassword, newPassword, newPasswordConfirmation);
                    })
                }, "Change password"));
}

var make = ChangePassword;

exports.make = make;
/* react Not a pure module */
