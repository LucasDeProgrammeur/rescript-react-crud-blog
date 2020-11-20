'use strict';

var React = require("react");

function BlogPostCard(Props) {
  return React.createElement("article", undefined, React.createElement("img", {
                  className: "userIcon",
                  alt: "User icon",
                  src: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                }), React.createElement("h4", {
                  className: "usernamePost"
                }, "User"), React.createElement("p", {
                  className: "postContent"
                }, "Post content"));
}

var make = BlogPostCard;

exports.make = make;
/* react Not a pure module */
