'use strict';

var React = require("react");
var Header = require("../Header/Header.bs.js");
var MainContent = require("../MainContent/MainContent.bs.js");
var UserProfile = require("../UserProfile/UserProfile.bs.js");
var LoginContent = require("../LoginContent/LoginContent.bs.js");
var Authentication = require("../Authentication/Authentication.bs.js");
var ChangePassword = require("../AccountSettings/ChangePassword/ChangePassword.bs.js");
var AccountSettings = require("../AccountSettings/AccountSettings.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var match = url.path;
  var tmp;
  var exit = 0;
  if (match) {
    switch (match.hd) {
      case "accountSettings" :
          var match$1 = match.tl;
          if (match$1) {
            if (match$1.hd === "changePassword" && !match$1.tl) {
              tmp = React.createElement(ChangePassword.make, {});
            } else {
              exit = 1;
            }
          } else {
            tmp = React.createElement(AccountSettings.make, {});
          }
          break;
      case "authentication" :
          if (match.tl) {
            exit = 1;
          } else {
            tmp = React.createElement(Authentication.make, {});
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
      case "profile" :
          var match$2 = match.tl;
          if (match$2 && !match$2.tl) {
            tmp = React.createElement(UserProfile.make, {
                  profileId: match$2.hd
                });
          } else {
            exit = 1;
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
  return React.createElement(React.Fragment, undefined, React.createElement(Header.make, {}), React.createElement("div", {
                  className: "pageMargin"
                }, tmp));
}

var make = App;

exports.make = make;
/* react Not a pure module */
