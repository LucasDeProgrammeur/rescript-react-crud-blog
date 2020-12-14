'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Cookies = require("../../storageFunctions/Cookies.bs.js");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var BlogPostCard = require("../BlogPostCard/BlogPostCard.bs.js");
var LoadAnimation = require("../LoadAnimation/LoadAnimation.bs.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");
var ProcessUserCookie = require("../../helpers/ProcessUserCookie.bs.js");
var AddMessageContainer = require("../AddMessageContainer/AddMessageContainer.bs.js");

function MainContent(Props) {
  var cookie = Cookies.getCookie("userId");
  var loginCheck = cookie.length > 0;
  var match = React.useState(function () {
        return /* LoadingMessages */0;
      });
  var setState = match[1];
  var state = match[0];
  var match$1 = React.useState(function () {
        return /* ByNewest */0;
      });
  var setSorting = match$1[1];
  var match$2 = React.useState(function () {
        return /* LoadingFollowData */0;
      });
  var setFollowedPeople = match$2[1];
  var match$3 = React.useState(function () {
        return false;
      });
  var setFollowedPeopleCheck = match$3[1];
  var followedPeopleCheck = match$3[0];
  var match$4 = React.useState(function () {
        return "";
      });
  var setSearchQuery = match$4[1];
  var searchQuery = match$4[0];
  React.useEffect((function () {
          return DatabaseFunctions.showMessages(function (newState) {
                      return Curry._1(setState, (function (param) {
                                    return newState;
                                  }));
                    });
        }), []);
  React.useEffect((function () {
          if (loginCheck) {
            return DatabaseFunctions.getAllFollowing(ProcessUserCookie.getLoggedInUserId(undefined), (function (newState) {
                          return Curry._1(setFollowedPeople, (function (param) {
                                        return newState;
                                      }));
                        }));
          }
          
        }), []);
  var tmp;
  if (typeof state === "number") {
    tmp = state === /* LoadingMessages */0 ? React.createElement(LoadAnimation.make, {}) : React.createElement("p", undefined, "An error occurred! The server may be down.");
  } else {
    switch (state.TAG | 0) {
      case /* AppendingNewMessage */0 :
          var messageList = state._1;
          messageList.push(state._0);
          Curry._1(setState, (function (param) {
                  return {
                          TAG: /* LoadedMessages */3,
                          _0: messageList
                        };
                }));
          tmp = React.createElement(LoadAnimation.make, {});
          break;
      case /* ProcessingMessageRemoval */1 :
          var messages = state._1;
          var messageId = state._0;
          Curry._1(setState, (function (param) {
                  return {
                          TAG: /* LoadedMessages */3,
                          _0: Belt_Array.keepMap(messages, (function (x) {
                                  if (x.id === messageId) {
                                    return ;
                                  } else {
                                    return Caml_option.some(x);
                                  }
                                }))
                        };
                }));
          tmp = React.createElement(LoadAnimation.make, {});
          break;
      case /* ProcessingMessageUpdate */2 :
          var messages$1 = state._2;
          var newMessage = state._1;
          var messageId$1 = state._0;
          Curry._1(setState, (function (param) {
                  return {
                          TAG: /* LoadedMessages */3,
                          _0: Belt_Array.keepMap(messages$1, (function (x) {
                                  if (x.id === messageId$1) {
                                    return {
                                            authorId: x.authorId,
                                            id: x.id,
                                            message1: newMessage
                                          };
                                  } else {
                                    return Caml_option.some(x);
                                  }
                                }))
                        };
                }));
          tmp = React.createElement(LoadAnimation.make, {});
          break;
      case /* LoadedMessages */3 :
          var filteredMessages = Belt_Array.keepMap(state._0, (function (x) {
                  if (x.message1.toLowerCase().includes(searchQuery.toLowerCase())) {
                    return Caml_option.some(x);
                  }
                  
                }));
          var sortedMessages = match$1[0] !== 0 ? filteredMessages : Belt_Array.reverse(filteredMessages);
          tmp = Belt_Array.mapWithIndex(sortedMessages, (function (i, x) {
                  return React.createElement(BlogPostCard.make, {
                              message: x,
                              currentState: state,
                              newState: setState,
                              isCreator: ProcessUserCookie.getLoggedInUserId(undefined) === String(x.authorId),
                              key: String(i)
                            });
                }));
          break;
      
    }
  }
  return React.createElement("main", undefined, loginCheck ? React.createElement(AddMessageContainer.make, {
                    newState: setState,
                    currentState: state
                  }) : null, loginCheck ? React.createElement(React.Fragment, undefined, React.createElement("input", {
                        checked: followedPeopleCheck,
                        type: "checkbox",
                        onChange: (function (param) {
                            return Curry._1(setFollowedPeopleCheck, (function (param) {
                                          return !followedPeopleCheck;
                                        }));
                          })
                      }), React.createElement("label", undefined, "Following only")) : null, React.createElement("select", {
                  onChange: (function (e) {
                      var selectValue = e.target.value;
                      switch (selectValue) {
                        case "1" :
                            return Curry._1(setSorting, (function (param) {
                                          return /* ByNewest */0;
                                        }));
                        case "2" :
                            return Curry._1(setSorting, (function (param) {
                                          return /* ByOldest */1;
                                        }));
                        case "3" :
                            return Curry._1(setSorting, (function (param) {
                                          return /* ByUsername */2;
                                        }));
                        default:
                          return Curry._1(setSorting, (function (param) {
                                        return /* ByNewest */0;
                                      }));
                      }
                    })
                }, React.createElement("option", {
                      value: "1"
                    }, "Sort by newest"), React.createElement("option", {
                      value: "2"
                    }, "Sort by oldest")), React.createElement("input", {
                  type: "text",
                  value: searchQuery,
                  onChange: (function (e) {
                      var textValue = e.target.value;
                      return Curry._1(setSearchQuery, (function (param) {
                                    return textValue;
                                  }));
                    })
                }), tmp);
}

var make = MainContent;

exports.make = make;
/* react Not a pure module */
