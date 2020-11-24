'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$ReactCrudBlog = require("./components/App/App.bs.js");
var ExampleStyles$ReactCrudBlog = require("./styles/ExampleStyles.bs.js");
var DatabaseFunctions$ReactCrudBlog = require("./backend/DatabaseFunctions.bs.js");

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

console.log(DatabaseFunctions$ReactCrudBlog.getSpecificUser(1));

var getUsers = new Promise((function (resolve, reject) {
        return resolve((console.log(JSON.stringify(DatabaseFunctions$ReactCrudBlog.getSpecificUser(1))), undefined));
      }));

makeContainer(undefined);

ReactDom.render(React.createElement(App$ReactCrudBlog.make, {}), document.getElementById("containerContent"));

exports.style = style;
exports.makeContainer = makeContainer;
exports.getUsers = getUsers;
/* style Not a pure module */
