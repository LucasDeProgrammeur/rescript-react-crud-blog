'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function EditPostModal(Props) {
  var message = Props.message;
  var isOpen = Props.isOpen;
  var setIsOpen = Props.setIsOpen;
  if (isOpen) {
    return React.createElement(React.Fragment, undefined, React.createElement("div", {
                    className: "backgroundFade"
                  }), React.createElement("div", {
                    className: "modal"
                  }, React.createElement("img", {
                        className: "closeButton",
                        src: "https://image.flaticon.com/icons/png/128/1828/1828774.png",
                        onClick: (function (param) {
                            return Curry._1(setIsOpen, false);
                          })
                      }), React.createElement("h2", undefined, "Edit message"), React.createElement("textarea", undefined, message), React.createElement("button", undefined, "Update")));
  } else {
    return React.createElement("div", {
                className: "noDisplay"
              });
  }
}

var make = EditPostModal;

exports.make = make;
/* react Not a pure module */
