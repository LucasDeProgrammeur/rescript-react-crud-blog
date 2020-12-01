'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var BlogPostCard = require("../BlogPostCard/BlogPostCard.bs.js");
var LoadAnimation = require("../LoadAnimation/LoadAnimation.bs.js");
var AddMessageContainer = require("../AddMessageContainer/AddMessageContainer.bs.js");

function MainContent(Props) {
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
        return "";
      });
  var setSearchQuery = match$2[1];
  var searchQuery = match$2[0];
  React.useEffect((function () {
          fetch("https://localhost:44304/api/Messages/").then(function (response) {
                    return response.json();
                  }).then(function (jsonResponse) {
                  console.log(jsonResponse);
                  Curry._1(setState, (function (_previousState) {
                          return /* LoadedMessages */{
                                  _0: jsonResponse
                                };
                        }));
                  return Promise.resolve(undefined);
                }).catch(function (_err) {
                Curry._1(setState, (function (_previousState) {
                        return /* ErrorLoadingMessages */1;
                      }));
                return Promise.resolve(undefined);
              });
          
        }), []);
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? React.createElement("p", undefined, "An error occurred! The server may be down.") : React.createElement(LoadAnimation.make, {});
  } else {
    var filteredMessages = Belt_Array.keepMap(state._0, (function (x) {
            if (x.message1.toLowerCase().includes(searchQuery.toLowerCase())) {
              return Caml_option.some(x);
            }
            
          }));
    var sortedMessages;
    switch (match$1[0]) {
      case /* ByNewest */0 :
          sortedMessages = Belt_Array.reverse(filteredMessages);
          break;
      case /* ByOldest */1 :
          sortedMessages = filteredMessages;
          break;
      case /* ByUsername */2 :
          throw {
                RE_EXN_ID: "Match_failure",
                _1: [
                  "MainContent.res",
                  69,
                  10
                ],
                Error: new Error()
              };
      
    }
    tmp = Belt_Array.mapWithIndex(sortedMessages, (function (i, x) {
            return React.createElement(BlogPostCard.make, {
                        message: x,
                        setBlogPostStates: (function (newState) {
                            return Curry._1(setState, (function (param) {
                                          return newState;
                                        }));
                          }),
                        key: String(i)
                      });
          }));
  }
  return React.createElement("main", undefined, React.createElement(AddMessageContainer.make, {}), React.createElement("select", {
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
                        default:
                          throw {
                                RE_EXN_ID: "Match_failure",
                                _1: [
                                  "MainContent.res",
                                  40,
                                  8
                                ],
                                Error: new Error()
                              };
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
