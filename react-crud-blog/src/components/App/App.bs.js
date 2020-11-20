'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var Header$ReactCrudBlog = require("../Header/Header.bs.js");
var MainContent$ReactCrudBlog = require("../MainContent/MainContent.bs.js");
var LoginContent$ReactCrudBlog = require("../LoginContent/LoginContent.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var tmp;
  var exit = 0;
  if (match) {
    switch (match.hd) {
      case "home" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(MainContent$ReactCrudBlog.make, {});
          }
          break;
      case "login" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(LoginContent$ReactCrudBlog.make, {});
          }
          break;
      default:
        exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = React.createElement(MainContent$ReactCrudBlog.make, {});
  }
  return React.createElement(React.Fragment, undefined, React.createElement(Header$ReactCrudBlog.make, {}), tmp);
}

var make = App;

exports.make = make;
/* react Not a pure module */
