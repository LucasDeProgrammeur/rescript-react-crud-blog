'use strict';

var App = require("./components/App/App.bs.js");
var React = require("react");
var Snackbar = require("./styles/Snackbar.bs.js");
var ReactDom = require("react-dom");
var MainStyles = require("./styles/MainStyles.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = MainStyles.style + Snackbar.style;

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

ReactDom.render(React.createElement(App.make, {}), document.getElementById("containerContent"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
