'use strict';

var React = require("react");

function BlogPostCard(Props) {
  var postContent = Props.postContent;
  var postUser = Props.postUser;
  return React.createElement("article", undefined, React.createElement("img", {
                  className: "userIcon",
                  alt: "User icon",
                  src: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                }), React.createElement("h4", {
                  className: "usernamePost"
                }, postContent), React.createElement("p", {
                  className: "postContent"
                }, postUser));
}

var make = BlogPostCard;

exports.make = make;
/* react Not a pure module */
