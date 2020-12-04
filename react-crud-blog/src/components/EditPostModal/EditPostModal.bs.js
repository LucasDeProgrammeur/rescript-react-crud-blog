'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");

function EditPostModal(Props) {
  var message = Props.message;
  var isOpen = Props.isOpen;
  var setIsOpen = Props.setIsOpen;
  var currentState = Props.currentState;
  var newState = Props.newState;
  var match = React.useState(function () {
        return message;
      });
  var setNewMessage = match[1];
  var newMessage = match[0];
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
                      }), React.createElement("h2", undefined, "Edit message"), React.createElement("textarea", {
                        value: newMessage.message1,
                        onChange: (function (e) {
                            var newValue = e.target.value;
                            return Curry._1(setNewMessage, (function (param) {
                                          return {
                                                  id: newMessage.id,
                                                  message1: newValue,
                                                  authorId: newMessage.authorId
                                                };
                                        }));
                          })
                      }), React.createElement("button", {
                        onClick: (function (param) {
                            return DatabaseFunctions.updateMessage(message.id, message, newMessage.message1, currentState, newState);
                          })
                      }, "Update")));
  } else {
    return React.createElement("div", {
                className: "noDisplay"
              });
  }
}

var make = EditPostModal;

exports.make = make;
/* react Not a pure module */
