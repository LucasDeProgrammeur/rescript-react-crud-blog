'use strict';

var React = require("react");
var BlogPostCard$ReactCrudBlog = require("../BlogPostCard/BlogPostCard.bs.js");

function MainContent(Props) {
  return React.createElement("main", undefined, React.createElement(BlogPostCard$ReactCrudBlog.make, {}));
}

var make = MainContent;

exports.make = make;
/* react Not a pure module */
