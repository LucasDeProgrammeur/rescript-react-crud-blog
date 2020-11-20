'use strict';

var React = require("react");
var Header$ReactCrudBlog = require("../Header/Header.bs.js");
var MainContent$ReactCrudBlog = require("../MainContent/MainContent.bs.js");

function App(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement(Header$ReactCrudBlog.make, {}), React.createElement(MainContent$ReactCrudBlog.make, {}));
}

var make = App;

exports.make = make;
/* react Not a pure module */
