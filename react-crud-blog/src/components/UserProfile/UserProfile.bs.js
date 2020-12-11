'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var LoadAnimation = require("../LoadAnimation/LoadAnimation.bs.js");

function UserProfile(Props) {
  var profileId = Props.profileId;
  var match = React.useState(function () {
        return /* LoadingUserDetails */0;
      });
  var setUserDetails = match[1];
  var userDetails = match[0];
  React.useEffect((function () {
          fetch("https://localhost:44304/api/UserDetails/" + profileId).then(function (response) {
                    return response.json();
                  }).then(function (jsonResponse) {
                  Curry._1(setUserDetails, (function (_previousState) {
                          return /* LoadedUserDetails */{
                                  _0: jsonResponse
                                };
                        }));
                  return Promise.resolve(undefined);
                }).catch(function (_err) {
                Curry._1(setUserDetails, (function (_previousState) {
                        return /* ErrorLoadingUserDetails */1;
                      }));
                return Promise.resolve(undefined);
              });
          
        }), []);
  var tmp;
  if (typeof userDetails === "number") {
    tmp = userDetails !== 0 ? React.createElement("p", undefined, "An error has occured loading this user profile") : React.createElement(LoadAnimation.make, {});
  } else {
    var userDetails$1 = userDetails._0;
    tmp = React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "User details of: " + userDetails$1.profileName + ", " + String(userDetails$1.followers) + " followers."), React.createElement("article", {
              className: "bio"
            }, userDetails$1.bio));
  }
  return React.createElement(React.Fragment, undefined, tmp);
}

var make = UserProfile;

exports.make = make;
/* react Not a pure module */
