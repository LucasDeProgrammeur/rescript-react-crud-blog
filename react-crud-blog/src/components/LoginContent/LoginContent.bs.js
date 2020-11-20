'use strict';

var React = require("react");

function LoginContent(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h1", {
                  className: "centerText"
                }, "Log into your account or sign up"), React.createElement("div", {
                  className: "loginBox"
                }));
}

var make = LoginContent;

exports.make = make;
/* react Not a pure module */
