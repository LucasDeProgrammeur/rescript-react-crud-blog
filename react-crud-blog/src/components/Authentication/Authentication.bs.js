'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var QStringFinder$ReactCrudBlog = require("../../helpers/QStringFinder.bs.js");

function Authentication(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var query = QStringFinder$ReactCrudBlog.parseQueryString(url.search);
  QStringFinder$ReactCrudBlog.showItem(query, "username");
  QStringFinder$ReactCrudBlog.showItem(query, "password");
  return React.createElement("h1", undefined, "no content here yet");
}

var make = Authentication;

exports.make = make;
/* react Not a pure module */
