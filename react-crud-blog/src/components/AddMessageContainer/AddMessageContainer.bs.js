'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");
var ProcessUserCookie = require("../../helpers/ProcessUserCookie.bs.js");

function AddMessageContainer(Props) {
  var newState = Props.newState;
  var currentState = Props.currentState;
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
                      return DatabaseFunctions.sendMessage(message, Caml_format.caml_int_of_string(ProcessUserCookie.getLoggedInUserId(undefined)), newState, currentState);
                    })
                }, "Send"));
}

var make = AddMessageContainer;

exports.make = make;
/* react Not a pure module */
