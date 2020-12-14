'use strict';

var React = require("react");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var DatabaseFunctions = require("../../../backend/DatabaseFunctions.bs.js");
var ProcessUserCookie = require("../../../helpers/ProcessUserCookie.bs.js");

function DeactivateAccount(Props) {
  var userId = ProcessUserCookie.getLoggedInUserId(undefined);
  return React.createElement(React.Fragment, undefined, React.createElement("h1", undefined, "We're sorry to see you go"), React.createElement("h2", {
                  className: "centerText"
                }, "By pressing this button below, all your content and your account will be deleted"), React.createElement("button", {
                  className: "autoMargin",
                  onClick: (function (param) {
                      DatabaseFunctions.deleteMessagesFromUser(userId);
                      DatabaseFunctions.deleteUser(Caml_format.caml_int_of_string(userId));
                      return DatabaseFunctions.deleteUserDetails(userId);
                    })
                }, "Delete account"));
}

var make = DeactivateAccount;

exports.make = make;
/* react Not a pure module */
