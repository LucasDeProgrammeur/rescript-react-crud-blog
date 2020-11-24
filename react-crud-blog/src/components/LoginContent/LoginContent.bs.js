'use strict';

var React = require("react");

function LoginContent(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h1", {
                  className: "centerText"
                }, "Log into your account or sign up"), React.createElement("div", {
                  className: "loginBox"
                }, React.createElement("form", {
                      method: "post"
                    }, React.createElement("label", undefined, "Username"), React.createElement("input", {
                          name: "username",
                          type: "text"
                        }), React.createElement("label", undefined, "Password"), React.createElement("input", {
                          name: "password",
                          type: "text"
                        }), React.createElement("input", {
                          type: "submit",
                          value: "Login"
                        }))));
}

var make = LoginContent;

exports.make = make;
/* react Not a pure module */
