'use strict';

var React = require("react");
var Header = require("../Header/Header.bs.js");
var MainContent = require("../MainContent/MainContent.bs.js");
var LoginContent = require("../LoginContent/LoginContent.bs.js");
var Authentication = require("../Authentication/Authentication.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var FetchedDogPictures = require("../FetchedDogPictures/FetchedDogPictures.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var tmp;
  var exit = 0;
  if (match) {
    switch (match.hd) {
      case "authentication" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(Authentication.make, {});
          }
          break;
      case "fetchDogPictures" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(FetchedDogPictures.make, {});
          }
          break;
      case "home" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(MainContent.make, {});
          }
          break;
      case "login" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(LoginContent.make, {});
          }
          break;
      default:
        exit = 1;
    }
  } else {
    exit = 1;
  }
  if (exit === 1) {
    tmp = React.createElement(MainContent.make, {});
  }
  return React.createElement(React.Fragment, undefined, React.createElement(Header.make, {}), tmp);
}

var make = App;

exports.make = make;
/* react Not a pure module */
