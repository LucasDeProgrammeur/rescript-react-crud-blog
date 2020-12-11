'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Validators = require("../../validators/Validators.bs.js");

function SignUp(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setUsername = match[1];
  var username = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setProfileName = match$1[1];
  var profileName = match$1[0];
  var match$2 = React.useState(function () {
        return "";
      });
  var setPassword = match$2[1];
  var password = match$2[0];
  var match$3 = React.useState(function () {
        return "";
      });
  var setPasswordRepeat = match$3[1];
  var passwordRepeat = match$3[0];
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Sign up today"), React.createElement("h4", undefined, "Username"), React.createElement("input", {
                  type: "text",
                  value: username,
                  onChange: (function (e) {
                      return Curry._1(setUsername, e.target.value);
                    })
                }), React.createElement("h4", undefined, "Profile name"), React.createElement("input", {
                  type: "text",
                  value: profileName,
                  onChange: (function (e) {
                      return Curry._1(setProfileName, e.target.value);
                    })
                }), React.createElement("h4", undefined, "Password"), React.createElement("input", {
                  type: "password",
                  value: password,
                  onChange: (function (e) {
                      return Curry._1(setPassword, e.target.value);
                    })
                }), React.createElement("h4", undefined, "Repeat password"), React.createElement("input", {
                  type: "password",
                  value: passwordRepeat,
                  onChange: (function (e) {
                      return Curry._1(setPasswordRepeat, e.target.value);
                    })
                }), React.createElement("button", {
                  onClick: (function (param) {
                      return Validators.validateSignUp(username, password, passwordRepeat, profileName);
                    })
                }, "Sign up"));
}

var make = SignUp;

exports.make = make;
/* react Not a pure module */
