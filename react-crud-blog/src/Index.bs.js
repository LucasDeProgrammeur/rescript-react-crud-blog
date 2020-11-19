'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var ExampleStyles$ReactCrudBlog = require("./styles/ExampleStyles.bs.js");
var FetchedDogPictures$ReactCrudBlog = require("./components/FetchedDogPictures/FetchedDogPictures.bs.js");
var ReducerFromReactJSDocs$ReactCrudBlog = require("./components/ReducerFromReactJSDocs/ReducerFromReactJSDocs.bs.js");
var ReasonUsingJSUsingReason$ReactCrudBlog = require("./components/ReasonUsingJSUsingReason/ReasonUsingJSUsingReason.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = ExampleStyles$ReactCrudBlog.style;

function makeContainer(text) {
  var container = document.createElement("div");
  container.className = "container";
  var title = document.createElement("div");
  title.className = "containerTitle";
  title.innerText = text;
  var content = document.createElement("div");
  content.className = "containerContent";
  container.appendChild(title);
  container.appendChild(content);
  document.body.appendChild(container);
  return content;
}

ReactDom.render(React.createElement(ReducerFromReactJSDocs$ReactCrudBlog.make, {}), makeContainer("Reducer From ReactJS Docs"));

ReactDom.render(React.createElement(FetchedDogPictures$ReactCrudBlog.make, {}), makeContainer("Fetched Dog Pictures"));

ReactDom.render(React.createElement(ReasonUsingJSUsingReason$ReactCrudBlog.make, {}), makeContainer("Reason Using JS Using Reason"));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
