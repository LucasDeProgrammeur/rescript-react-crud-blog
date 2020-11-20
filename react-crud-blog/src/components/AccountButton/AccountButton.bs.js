'use strict';

var React = require("react");

function AccountButton(Props) {
  return React.createElement("button", {
              className: "accountButton"
            }, "Login");
}

var make = AccountButton;

exports.make = make;
/* react Not a pure module */
