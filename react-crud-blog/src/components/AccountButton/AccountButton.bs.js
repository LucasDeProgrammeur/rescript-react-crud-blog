'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function AccountButton(Props) {
  ReasonReactRouter.useUrl(undefined, undefined);
  return React.createElement("button", {
              className: "accountButton",
              onClick: (function (e) {
                  return ReasonReactRouter.push("/login");
                })
            }, "Login");
}

var make = AccountButton;

exports.make = make;
/* react Not a pure module */
