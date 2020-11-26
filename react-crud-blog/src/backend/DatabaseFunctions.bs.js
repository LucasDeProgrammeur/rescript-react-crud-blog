'use strict';

var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var LoginStates$ReactCrudBlog = require("../constants/LoginStates.bs.js");

var username = {
  contents: "username"
};

var password = {
  contents: "password"
};

function getSpecificUser(id) {
  fetch("https://localhost:44304/api/Users/" + String(id)).then(function (response) {
              return response.json();
            }).then(function (jsonResponse) {
            console.log(jsonResponse);
            return Promise.resolve(jsonResponse);
          }).then(function (response) {
          return response;
        }).catch(function (_err) {
        return Promise.resolve(_err);
      });
  
}

function handleLogin(username, password, param) {
  return fetch("https://localhost:44304/api/Users/authenticate?username=" + username + "&password=" + password).then(function (response) {
                return response.json();
              }).then(function (jsonResponse) {
              console.log(jsonResponse);
              if (jsonResponse.id !== "2") {
                LoginStates$ReactCrudBlog.authenticated.contents = /* LoggedIn */{
                  userId: jsonResponse.id
                };
                ReasonReactRouter.push("home");
              } else {
                LoginStates$ReactCrudBlog.authenticated.contents = /* LoggedOut */0;
              }
              return Promise.resolve(function (param) {
                          return ReasonReactRouter.push("home");
                        });
            });
}

exports.username = username;
exports.password = password;
exports.getSpecificUser = getSpecificUser;
exports.handleLogin = handleLogin;
/* ReasonReactRouter Not a pure module */
