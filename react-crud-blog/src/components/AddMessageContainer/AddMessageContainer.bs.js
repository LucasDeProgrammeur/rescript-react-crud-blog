'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");

function AddMessageContainer(Props) {
  var match = React.useState(function () {
        return "";
      });
  var setMessage = match[1];
  var message = match[0];
  return React.createElement("div", {
              className: "addMessageContainer"
            }, React.createElement("textarea", {
                  className: "messageContainer",
                  placeholder: "What's on your mind right now?",
                  value: message,
                  onChange: (function (e) {
                      var $$event = e.target.value;
                      return Curry._1(setMessage, (function (param) {
                                    return $$event;
                                  }));
                    })
                }), React.createElement("button", {
                  className: "sendMessageButton",
                  onClick: (function (param) {
                      return DatabaseFunctions.sendMessage(message, 1);
                    })
                }, "Send"));
}

var make = AddMessageContainer;

exports.make = make;
/* react Not a pure module */
