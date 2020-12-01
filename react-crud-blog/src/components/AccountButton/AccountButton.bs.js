'use strict';

var React = require("react");
var LoginStates = require("../../constants/LoginStates.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

var match = LoginStates.authenticated.contents;

var value = match ? "Logged on" : "Login";

function AccountButton(Props) {
  return React.createElement("button", {
              className: "accountButton",
              onClick: (function (param) {
                  return ReasonReactRouter.push("/login");
                })
            }, value);
}

var make = AccountButton;

exports.value = value;
exports.make = make;
/* react Not a pure module */
