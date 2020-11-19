'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Header$ReactCrudBlog = require("./components/Header/Header.bs.js");
var ExampleStyles$ReactCrudBlog = require("./styles/ExampleStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReactCrudBlog.style;

function makeContainer(param) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  var content = document.createElement("div");
  content.className = "containerContent";
  content.id = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

makeContainer(undefined);

ReactDom.render(React.createElement(Header$ReactCrudBlog.make, {}), document.getElementById("containerContent"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
