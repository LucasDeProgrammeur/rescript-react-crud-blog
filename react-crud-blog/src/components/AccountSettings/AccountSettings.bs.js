'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Cookies = require("../../storageFunctions/Cookies.bs.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var LoadAnimation = require("../LoadAnimation/LoadAnimation.bs.js");
var DataConverters = require("../../helpers/DataConverters.bs.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function AccountSettings(Props) {
  var cookie = Caml_array.get(Cookies.getCookie("userId"), 0);
  var match = React.useState(function () {
        return /* LoadingUserDetails */0;
      });
  var setUserDetails = match[1];
  var userDetails = match[0];
  var match$1 = React.useState(function () {
        
      });
  var setProfileName = match$1[1];
  var profileName = match$1[0];
  var match$2 = React.useState(function () {
        
      });
  var setFollowers = match$2[1];
  var followers = match$2[0];
  var match$3 = React.useState(function () {
        
      });
  var setBio = match$3[1];
  var bio = match$3[0];
  React.useEffect(function () {
        if (typeof userDetails === "number") {
          if (userDetails !== 0) {
            throw {
                  RE_EXN_ID: "Match_failure",
                  _1: [
                    "AccountSettings.res",
                    10,
                    4
                  ],
                  Error: new Error()
                };
          }
          return DatabaseFunctions.getUserDetailsById(Caml_format.caml_int_of_string(cookie), (function (newState) {
                        return Curry._1(setUserDetails, (function (param) {
                                      return newState;
                                    }));
                      }));
        }
        var details = userDetails._0;
        if (profileName !== undefined) {
          
        } else {
          Curry._1(setProfileName, (function (param) {
                  return details.profileName;
                }));
          console.log("profile name change called");
        }
        if (followers !== undefined) {
          
        } else {
          Curry._1(setFollowers, (function (param) {
                  return details.followers;
                }));
        }
        if (bio !== undefined) {
          
        } else {
          Curry._1(setBio, (function (param) {
                  return details.bio;
                }));
        }
        
      });
  var tmp;
  if (typeof userDetails === "number") {
    if (userDetails !== 0) {
      throw {
            RE_EXN_ID: "Match_failure",
            _1: [
              "AccountSettings.res",
              34,
              5
            ],
            Error: new Error()
          };
    }
    tmp = React.createElement(LoadAnimation.make, {});
  } else {
    tmp = React.createElement(React.Fragment, undefined, React.createElement("h4", undefined, "Profile details"), React.createElement("p", {
              className: "urgent"
            }, "Please note that your handle/username cannot be changed! (Display name only)"), React.createElement("input", {
              className: "lineSpacing",
              type: "text",
              value: profileName !== undefined ? profileName : "",
              onChange: (function (e) {
                  var value = e.target.value;
                  console.log(value);
                  return Curry._1(setProfileName, (function (param) {
                                return value;
                              }));
                })
            }), React.createElement("textarea", {
              className: "lineSpacing",
              value: DataConverters.optionToString(bio),
              onChange: (function (e) {
                  var value = e.target.value;
                  return Curry._1(setBio, (function (param) {
                                return value;
                              }));
                })
            }), React.createElement("button", {
              onClick: (function (param) {
                  console.log(userDetails);
                  if (typeof userDetails !== "number") {
                    return DatabaseFunctions.updateUserDetails(cookie, {
                                bio: bio,
                                profileName: profileName,
                                followers: followers
                              }, (function (newState) {
                                  return Curry._1(setUserDetails, (function (param) {
                                                return newState;
                                              }));
                                }));
                  }
                  if (userDetails !== 0) {
                    throw {
                          RE_EXN_ID: "Match_failure",
                          _1: [
                            "AccountSettings.res",
                            63,
                            12
                          ],
                          Error: new Error()
                        };
                  }
                  console.log("Error");
                  
                })
            }, "Update"), React.createElement("h4", undefined, "Password"), React.createElement("button", {
              onClick: (function (param) {
                  return ReasonReactRouter.push("/accountSettings/changePassword");
                })
            }, "Change your password"));
  }
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "Account settings"), tmp);
}

var make = AccountSettings;

exports.make = make;
/* react Not a pure module */
