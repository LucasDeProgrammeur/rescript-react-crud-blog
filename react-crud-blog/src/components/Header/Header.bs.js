'use strict';

var React = require("react");
var AccountButton$ReactCrudBlog = require("../AccountButton/AccountButton.bs.js");

function Header(Props) {
  return React.createElement("header", undefined, React.createElement("h1", undefined, "Rescript+React+MaterialUI blog"), React.createElement(AccountButton$ReactCrudBlog.make, {}));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
