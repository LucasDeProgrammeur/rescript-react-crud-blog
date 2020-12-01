'use strict';

var React = require("react");

function LoadAnimation(Props) {
  return React.createElement("img", {
              className: "loadAnimation",
              src: "https://i.imgur.com/llF5iyg.gif",
              width: "32"
            });
}

var make = LoadAnimation;

exports.make = make;
/* react Not a pure module */
