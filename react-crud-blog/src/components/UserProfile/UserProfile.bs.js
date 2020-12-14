'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var FollowButton = require("./FollowButton/FollowButton.bs.js");
var LoadAnimation = require("../LoadAnimation/LoadAnimation.bs.js");
var DatabaseFunctions = require("../../backend/DatabaseFunctions.bs.js");

function UserProfile(Props) {
  var profileId = Props.profileId;
  var match = React.useState(function () {
        return /* LoadingUserDetails */0;
      });
  var setUserDetails = match[1];
  var userDetails = match[0];
  React.useEffect((function () {
          if (typeof userDetails === "number") {
            if (userDetails !== 0) {
              throw {
                    RE_EXN_ID: "Match_failure",
                    _1: [
                      "UserProfile.res",
                      7,
                      4
                    ],
                    Error: new Error()
                  };
            }
            return DatabaseFunctions.getUserDetailsById(profileId, (function (newState) {
                          return Curry._1(setUserDetails, (function (param) {
                                        return newState;
                                      }));
                        }));
          }
          throw {
                RE_EXN_ID: "Match_failure",
                _1: [
                  "UserProfile.res",
                  7,
                  4
                ],
                Error: new Error()
              };
        }), []);
  var tmp;
  if (typeof userDetails === "number") {
    tmp = userDetails !== 0 ? React.createElement("p", undefined, "An error has occured loading this user profile") : React.createElement(LoadAnimation.make, {});
  } else {
    var userDetails$1 = userDetails._0;
    tmp = React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "User details of: " + userDetails$1.profileName + ", " + String(userDetails$1.followers) + " followers."), React.createElement("article", {
              className: "bio"
            }, userDetails$1.bio, React.createElement(FollowButton.make, {
                  profileId: profileId
                })));
  }
  return React.createElement(React.Fragment, undefined, tmp);
}

var make = UserProfile;

exports.make = make;
/* react Not a pure module */
