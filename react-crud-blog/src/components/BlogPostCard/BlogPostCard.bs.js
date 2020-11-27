'use strict';

var React = require("react");

function BlogPostCard(Props) {
  var message = Props.message;
  return React.createElement("article", undefined, React.createElement("img", {
                  className: "userIcon",
                  alt: "User icon",
                  src: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                }), React.createElement("h4", {
                  className: "usernamePost"
                }, "Author ID: " + String(message.authorId)), React.createElement("p", {
                  className: "postContent"
                }, message.message1));
}

var make = BlogPostCard;

exports.make = make;
/* react Not a pure module */
