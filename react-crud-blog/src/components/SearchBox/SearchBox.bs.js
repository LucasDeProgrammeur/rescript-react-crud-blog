'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");

function SearchBox(Props) {
  var match = React.useState(function () {
        return /* LoadingProfiles */0;
      });
  var setUserProfiles = match[1];
  var userProfiles = match[0];
  var tmp;
  if (typeof userProfiles === "number") {
    if (userProfiles !== 0) {
      throw {
            RE_EXN_ID: "Match_failure",
            _1: [
              "SearchBox.res",
              15,
              7
            ],
            Error: new Error()
          };
    }
    tmp = null;
  } else {
    tmp = Belt_Array.mapWithIndex(userProfiles._0, (function (i, x) {
            return React.createElement("div", {
                        className: "searchItem",
                        onClick: (function (param) {
                            return window.location.replace("/profile/" + String(x.userId));
                          })
                      }, React.createElement("img", {
                            className: "userIcon smallerIcon",
                            alt: "User icon",
                            src: "https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
                          }), x.profileName);
          }));
  }
  return React.createElement("div", {
              className: "searchSuggestions"
            }, React.createElement("input", {
                  className: "searchBox",
                  type: "text",
                  onChange: (function (e) {
                      return DatabaseFunctions.getUsersByName(e.target.value, setUserProfiles);
                    })
                }), React.createElement("div", {
                  className: "searchResults"
                }, tmp));
}

var make = SearchBox;

exports.make = make;
/* react Not a pure module */
