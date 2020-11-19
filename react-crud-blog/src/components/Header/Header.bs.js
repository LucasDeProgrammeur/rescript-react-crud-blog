'use strict';

var React = require("react");

function Header(Props) {
  return React.createElement("header", undefined, React.createElement("h1", undefined, "Rescript+React+MaterialUI blog"));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
