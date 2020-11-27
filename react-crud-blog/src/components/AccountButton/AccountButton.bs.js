'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function AccountButton(Props) {
  return React.createElement("button", {
              className: "accountButton",
              onClick: (function (param) {
                  return ReasonReactRouter.push("/login");
                })
            }, "Login");
}

var make = AccountButton;

exports.make = make;
/* react Not a pure module */
