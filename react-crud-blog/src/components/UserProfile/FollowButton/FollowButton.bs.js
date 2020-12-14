'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var LoadAnimation = require("../../LoadAnimation/LoadAnimation.bs.js");
var DatabaseFunctions = require("../../../backend/DatabaseFunctions.bs.js");
var ProcessUserCookie = require("../../../helpers/ProcessUserCookie.bs.js");

function FollowButton(Props) {
  var profileId = Props.profileId;
  var match = React.useState(function () {
        return /* LoadingFollowData */0;
      });
  var setFollowData = match[1];
  var followData = match[0];
  React.useEffect((function () {
          if (typeof followData === "number" && followData === 0) {
            DatabaseFunctions.checkIfPersonFollowsAnother(ProcessUserCookie.getLoggedInUserId(undefined), String(profileId), (function (newState) {
                    return Curry._1(setFollowData, (function (param) {
                                  return newState;
                                }));
                  }));
          }
          
        }), [followData]);
  if (typeof followData === "number") {
    if (followData !== 0) {
      return React.createElement("button", {
                  className: "followButton",
                  onClick: (function (param) {
                      return DatabaseFunctions.followPerson(ProcessUserCookie.getLoggedInUserId(undefined), profileId, (function (newState) {
                                    return Curry._1(setFollowData, (function (param) {
                                                  return newState;
                                                }));
                                  }));
                    })
                }, "Follow");
    } else {
      return React.createElement(LoadAnimation.make, {});
    }
  } else {
    return React.createElement("button", {
                className: "followButton",
                onClick: (function (param) {
                    return DatabaseFunctions.unfollowPerson(ProcessUserCookie.getLoggedInUserId(undefined), String(profileId), (function (newState) {
                                  return Curry._1(setFollowData, (function (param) {
                                                return newState;
                                              }));
                                }));
                  })
              }, "Unfollow");
  }
}

var make = FollowButton;

exports.make = make;
/* react Not a pure module */
