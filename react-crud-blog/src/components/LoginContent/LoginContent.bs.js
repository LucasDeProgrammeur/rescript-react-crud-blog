'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function LoginContent(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setUsername = match[1];
  var username = match[0];
  var match$1 = React.useState(function () {
        return "";
      });
  var setPassword = match$1[1];
  var password = match$1[0];
  return React.createElement(React.Fragment, undefined, React.createElement("h1", {
                  className: "centerText"
                }, "Log into your account or sign up"), React.createElement("div", {
                  className: "loginBox"
                }, React.createElement("form", {
                      method: "post"
                    }, React.createElement("label", undefined, "Username"), React.createElement("input", {
                          name: "username",
                          type: "text",
                          onChange: (function ($$event) {
                              return Curry._1(setUsername, $$event.target.value);
                            })
                        }), React.createElement("label", undefined, "Password"), React.createElement("input", {
                          name: "password",
                          type: "password",
                          onChange: (function ($$event) {
                              return Curry._1(setPassword, $$event.target.value);
                            })
                        }), React.createElement("input", {
                          type: "submit",
                          value: "Login",
                          onClick: (function (param) {
                              return ReasonReactRouter.push("/authentication?username=" + username + "&password=" + password);
                            })
                        }))));
}

var make = LoginContent;

exports.make = make;
/* react Not a pure module */
