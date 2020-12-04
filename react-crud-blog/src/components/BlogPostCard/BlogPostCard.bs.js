'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var EditPostModal = require("../EditPostModal/EditPostModal.bs.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function BlogPostCard(Props) {
  var message = Props.message;
  var currentState = Props.currentState;
  var newState = Props.newState;
  var match = React.useState(function () {
        return /* LoadingUsername */0;
      });
  var setState = match[1];
  var state = match[0];
  var match$1 = React.useState(function () {
        return false;
      });
  var setIsOpen = match$1[1];
  React.useEffect((function () {
          return DatabaseFunctions.getUserById(message.authorId, (function (newState) {
                        return Curry._1(setState, (function (param) {
                                      return newState;
                                    }));
                      }));
        }), []);
  return React.createElement("article", undefined, React.createElement("img", {
                  className: "editIcon",
                  src: "https://image.flaticon.com/icons/png/512/61/61848.png",
                  onClick: (function (param) {
                      return DatabaseFunctions.deleteMessage(message.id, currentState, newState);
                    })
                }), React.createElement("img", {
                  className: "editIcon",
                  src: "https://simpleicon.com/wp-content/uploads/pencil-256x256.png",
                  onClick: (function (param) {
                      return Curry._1(setIsOpen, (function (_previousState) {
                                    return true;
                                  }));
                    })
                }), React.createElement("img", {
                  className: "userIcon",
                  alt: "User icon",
                  src: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                }), React.createElement(EditPostModal.make, {
                  message: message,
                  isOpen: match$1[0],
                  setIsOpen: (function (newState) {
                      return Curry._1(setIsOpen, (function (param) {
                                    return newState;
                                  }));
                    }),
                  currentState: currentState,
                  newState: newState
                }), React.createElement("h4", {
                  className: "usernamePost",
                  onClick: (function (param) {
                      return ReasonReactRouter.push("/profile/" + String(message.authorId));
                    })
                }, typeof state === "number" ? (
                    state !== 0 ? "An error occurred" : "Loading"
                  ) : state._0.username), React.createElement("p", {
                  className: "postContent"
                }, message.message1));
}

var make = BlogPostCard;

exports.make = make;
/* react Not a pure module */
