'use strict';

var React = require("react");

function SearchBox(Props) {
  React.useState(function () {
        return "";
      });
  return React.createElement("div", {
              id: "searchSuggestions"
            }, React.createElement("input", {
                  className: "searchBox",
                  type: "text"
                }));
}

var make = SearchBox;

exports.make = make;
/* react Not a pure module */
