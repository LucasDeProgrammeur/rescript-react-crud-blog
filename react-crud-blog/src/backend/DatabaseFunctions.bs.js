'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Cookies = require("../storageFunctions/Cookies.bs.js");
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
          LoginStates.authenticated.contents = /* LoggedIn */{
            userId: jsonResponse.id
          };
          Cookies.setCookie("userId", jsonResponse.id, 2);
          Snackbar.show("You have logged in!");
          return Promise.resolve(jsonResponse.id);
        }).catch(function (_err) {
        LoginStates.authenticated.contents = /* LoggedOut */0;
        Snackbar.show("Whoops, something went wrong");
        console.log("Failure!!", _err);
        return Promise.resolve("error");
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

function sendMessage(message, authorId, newState, currentState) {
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
          Snackbar.show("Your new message has been posted!");
          var exit = 0;
          if (typeof currentState === "number" || currentState.TAG !== /* LoadedMessages */3) {
            exit = 1;
          } else {
            var data = currentState._0;
            Curry._1(newState, (function (param) {
                    return {
                            TAG: /* AppendingNewMessage */0,
                            _0: jsonResponse,
                            _1: data
                          };
                  }));
          }
          if (exit === 1) {
            Curry._1(newState, (function (param) {
                    return /* LoadingMessages */0;
                  }));
          }
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        return Promise.resolve(undefined);
      });
  
}

function deleteMessage(id, currentState, newState) {
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
          Snackbar.show("Your message has been deleted");
          var exit = 0;
          if (typeof currentState === "number" || currentState.TAG !== /* LoadedMessages */3) {
            exit = 1;
          } else {
            var data = currentState._0;
            Curry._1(newState, (function (param) {
                    return {
                            TAG: /* ProcessingMessageRemoval */1,
                            _0: jsonResponse.id,
                            _1: data
                          };
                  }));
          }
          if (exit === 1) {
            Curry._1(newState, (function (param) {
                    return /* LoadingMessages */0;
                  }));
          }
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        return Promise.resolve(undefined);
      });
  
}

function getUserDetailsById(profileId, setUserDetails) {
  fetch("https://localhost:44304/api/UserDetails/" + profileId).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          return Promise.resolve(jsonResponse);
        }).catch(function (_err) {
        return Promise.resolve(_err);
      });
  
}

function updateMessage(id, authorId, oldMessage, newMessage, currentState, newState) {
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
          Snackbar.show("This message has been updated!");
          var exit = 0;
          if (typeof currentState === "number" || currentState.TAG !== /* LoadedMessages */3) {
            exit = 1;
          } else {
            var data = currentState._0;
            Curry._1(newState, (function (param) {
                    return {
                            TAG: /* ProcessingMessageUpdate */2,
                            _0: response.id,
                            _1: newMessage,
                            _2: data
                          };
                  }));
          }
          if (exit === 1) {
            Curry._1(newState, (function (param) {
                    return /* LoadingMessages */0;
                  }));
          }
          return Promise.resolve(response);
        }).catch(function (_err) {
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
