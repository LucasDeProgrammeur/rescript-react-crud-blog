'use strict';

var React = require("react");
var AccountButton = require("../AccountButton/AccountButton.bs.js");

function Header(Props) {
  return React.createElement("header", undefined, React.createElement("h1", undefined, "Rescript+React blog"), React.createElement(AccountButton.make, {}));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
