'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Cookies = require("../../storageFunctions/Cookies.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");
var ProcessUserCookie = require("../../helpers/ProcessUserCookie.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

var cookie = ProcessUserCookie.getLoggedInUserId(undefined);

function AccountButton(Props) {
  var match = React.useState(function () {
        return /* LoadingUserDetails */0;
      });
  var setProfileName = match[1];
  var profileName = match[0];
  React.useEffect(function () {
        if (typeof profileName === "number" && !(profileName !== 0 || cookie === "Login")) {
          return DatabaseFunctions.getUserDetailsById(Caml_format.caml_int_of_string(cookie), (function (newState) {
                        return Curry._1(setProfileName, (function (param) {
                                      return newState;
                                    }));
                      }));
        }
        
      });
  return React.createElement("div", {
              className: "accountSettings"
            }, React.createElement("button", {
                  className: "accountButton",
                  onClick: (function (param) {
                      return ReasonReactRouter.push(typeof profileName === "number" ? "/login" : "/profile/" + cookie);
                    })
                }, typeof profileName === "number" ? "Login" : profileName._0.profileName), typeof profileName === "number" ? null : React.createElement("div", {
                    className: "accountMenu"
                  }, React.createElement("div", {
                        className: "accountItem",
                        onClick: (function (param) {
                            return ReasonReactRouter.push("/profile/" + cookie);
                          })
                      }, "Profile"), React.createElement("div", {
                        className: "accountItem",
                        onClick: (function (param) {
                            return ReasonReactRouter.push("/accountSettings");
                          })
                      }, "Settings"), React.createElement("div", {
                        className: "accountItem",
                        onClick: (function (param) {
                            Cookies.clearCookie("userId");
                            ReasonReactRouter.push("/login");
                            return Curry._1(setProfileName, (function (param) {
                                          return /* ErrorLoadingUserDetails */1;
                                        }));
                          })
                      }, "Logout")));
}

var make = AccountButton;

exports.cookie = cookie;
exports.make = make;
/* cookie Not a pure module */
