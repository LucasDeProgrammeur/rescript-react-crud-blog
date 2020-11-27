'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var BlogPostCard = require("../BlogPostCard/BlogPostCard.bs.js");
var LoadAnimation = require("../LoadAnimation/LoadAnimation.bs.js");

function MainContent(Props) {
  var match = React.useState(function () {
        return /* LoadingMessages */0;
      });
  var setState = match[1];
  var state = match[0];
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
  return React.createElement("main", undefined, typeof state === "number" ? (
                state !== 0 ? "An error occurred!" : React.createElement(LoadAnimation.make, {})
              ) : Belt_Array.mapWithIndex(state._0, (function (i, x) {
                      return React.createElement(BlogPostCard.make, {
                                  message: x,
                                  key: String(i)
                                });
                    })));
}

var make = MainContent;

exports.make = make;
/* react Not a pure module */
