'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Snackbar = require("snackbar");
var LoginStates = require("../constants/LoginStates.bs.js");

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

function handleLogin(username, password) {
  fetch("https://localhost:44304/api/Users/authenticate?username=" + username + "&password=" + password).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          console.log(jsonResponse);
          LoginStates.authenticated.contents = /* LoggedIn */{
            userId: jsonResponse.id
          };
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        LoginStates.authenticated.contents = /* LoggedOut */0;
        return Promise.resolve(undefined);
      });
  
}

function getUserById(id, setState) {
  fetch("https://localhost:44304/api/Users/" + String(id)).then(function (response) {
            return response.json();
          }).then(function (response) {
          Curry._1(setState, /* LoadedUsername */{
                _0: response
              });
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        Curry._1(setState, /* ErrorFetchingUsername */1);
        return Promise.resolve(undefined);
      });
  
}

function sendMessage(message, authorId) {
  fetch("https://localhost:44304/api/Messages", {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Credentials": "true",
                mode: "no-cors",
                credentials: "include"
              },
              body: JSON.stringify({
                    message1: message,
                    authorId: authorId
                  }),
              redirect: "follow"
            }).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          console.log(jsonResponse);
          Snackbar.show("Your new message has been posted!");
          return Promise.resolve(jsonResponse);
        }).catch(function (_err) {
        return Promise.resolve(_err);
      });
  
}

function deleteMessage(id) {
  fetch("https://localhost:44304/api/Messages/" + id, {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Credentials": "true",
                mode: "no-cors",
                credentials: "include"
              },
              body: JSON.stringify({
                    id: id
                  }),
              redirect: "follow"
            }).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          console.log(jsonResponse);
          Snackbar.show("Your message has been deleted");
          return Promise.resolve(jsonResponse);
        }).catch(function (_err) {
        return Promise.resolve(_err);
      });
  
}

function getUserDetailsById(profileId, setUserDetails) {
  fetch("https://localhost:44304/api/UserDetails/" + profileId).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          console.log(jsonResponse);
          return Promise.resolve(jsonResponse);
        }).catch(function (_err) {
        return Promise.resolve(_err);
      });
  
}

function updateMessage(id, authorId, oldMessage, newMessage, setPostStates) {
  console.log(newMessage);
  fetch("https://localhost:44304/api/Messages/" + id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Credentials": "true",
                mode: "no-cors",
                credentials: "include"
              },
              body: JSON.stringify({
                    id: id,
                    message1: newMessage,
                    authorId: oldMessage.authorId
                  }),
              redirect: "follow"
            }).then(function (response) {
            return response.json();
          }).then(function (response) {
          Snackbar.show("This message has been updated! Refresh to see changes");
          return Promise.resolve(response);
        }).catch(function (_err) {
        console.log("There was an error ");
        Snackbar.show("Whoops, something went wrong");
        return Promise.resolve(oldMessage);
      });
  
}

exports.username = username;
exports.password = password;
exports.getSpecificUser = getSpecificUser;
exports.handleLogin = handleLogin;
exports.getUserById = getUserById;
exports.sendMessage = sendMessage;
exports.deleteMessage = deleteMessage;
exports.getUserDetailsById = getUserDetailsById;
exports.updateMessage = updateMessage;
/* snackbar Not a pure module */
