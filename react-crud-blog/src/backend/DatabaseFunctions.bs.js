'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Cookies = require("../storageFunctions/Cookies.bs.js");
var Snackbar = require("snackbar");
var CryptoJs = require("crypto-js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var LoginStates = require("../constants/LoginStates.bs.js");
var StatusMessages = require("../constants/StatusMessages.bs.js");

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

function getUsersByName(username, newState) {
  fetch("https://localhost:44304/api/UserDetails/namesWith?profileName=" + username).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          Curry._1(newState, (function (_previousState) {
                  return /* LoadedProfiles */{
                          _0: jsonResponse
                        };
                }));
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        Curry._1(newState, (function (_previousState) {
                return /* ErrorLoadingProfiles */1;
              }));
        return Promise.resolve(undefined);
      });
  
}

function showMessages(newState) {
  fetch("https://localhost:44304/api/Messages/").then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          Curry._1(newState, {
                TAG: /* LoadedMessages */3,
                _0: jsonResponse
              });
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        Curry._1(newState, /* ErrorLoadingMessages */1);
        return Promise.resolve(undefined);
      });
  
}

function handleLogin(username, password) {
  var passwordHash = CryptoJs.MD5(password);
  fetch("https://localhost:44304/api/Users/authenticate?username=" + username + "&password=" + passwordHash.toString()).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          if (jsonResponse.username.length === 0) {
            Snackbar.show(StatusMessages.incorrectCredentials);
            return Promise.resolve("incorrect");
          } else {
            LoginStates.authenticated.contents = /* LoggedIn */{
              userId: jsonResponse.id
            };
            Cookies.setCookie("userId", jsonResponse.id, 2);
            Snackbar.show(StatusMessages.loggedIn);
            return Promise.resolve(jsonResponse.id);
          }
        }).catch(function (_err) {
        LoginStates.authenticated.contents = /* LoggedOut */0;
        Snackbar.show(StatusMessages.incorrectCredentials);
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
  console.log(authorId);
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
          Snackbar.show(StatusMessages.postedMessage);
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
          Snackbar.show(StatusMessages.deletedMessage);
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

function getUserDetailsById(profileId, setUsername) {
  fetch("https://localhost:44304/api/UserDetails/" + String(profileId)).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          Curry._1(setUsername, /* LoadedUserDetails */{
                _0: jsonResponse
              });
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        return Promise.resolve(undefined);
      });
  
}

function updateUserDetails(userId, newDetails, newState) {
  fetch("https://localhost:44304/api/UserDetails/" + userId, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Credentials": "true",
                mode: "no-cors",
                credentials: "include"
              },
              body: JSON.stringify({
                    userId: Caml_format.caml_int_of_string(userId),
                    followers: newDetails.followers,
                    profileName: newDetails.profileName,
                    bio: newDetails.bio
                  }),
              redirect: "follow"
            }).then(function (response) {
            return response.json();
          }).then(function (param) {
          Snackbar.show(StatusMessages.userDetailsUpdated);
          Curry._1(newState, /* LoadingUserDetails */0);
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        Snackbar.show(StatusMessages.error);
        return Promise.resolve(undefined);
      });
  
}

function updateUser(userId, username, password) {
  var passwordHash = CryptoJs.MD5(password);
  fetch("https://localhost:44304/api/Users/" + String(userId), {
              method: "PUT",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Credentials": "true",
                mode: "no-cors",
                credentials: "include"
              },
              body: JSON.stringify({
                    id: userId,
                    username: username,
                    password: passwordHash.toString()
                  }),
              redirect: "follow"
            }).then(function (response) {
            return response.json();
          }).then(function (param) {
          Snackbar.show(StatusMessages.passwordUpdated);
          return Promise.resolve(undefined);
        }).catch(function (_err) {
        Snackbar.show(StatusMessages.error);
        return Promise.resolve(undefined);
      });
  
}

function createProfile(profileName, userId) {
  return fetch("https://localhost:44304/api/UserDetails/", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Access-Control-Allow-Credentials": "true",
                    mode: "no-cors",
                    credentials: "include"
                  },
                  body: JSON.stringify({
                        profileName: profileName,
                        followers: 0,
                        bio: "",
                        userId: userId
                      }),
                  redirect: "follow"
                }).then(function (response) {
                return response.json();
              }).then(function (param) {
              Snackbar.show(StatusMessages.accountCreated);
              return Promise.resolve(undefined).catch(function (_err) {
                          Snackbar.show(StatusMessages.error);
                          return Promise.resolve(undefined);
                        });
            });
}

function createUser(username, password, profileName) {
  fetch("https://localhost:44304/api/Users/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              "Access-Control-Allow-Credentials": "true",
              mode: "no-cors",
              credentials: "include"
            },
            body: JSON.stringify({
                  username: username,
                  password: password
                }),
            redirect: "follow"
          }).then(function (response) {
          return response.json();
        }).then(function (response) {
        Snackbar.show(StatusMessages.accountCreated);
        return createProfile(profileName, response.id);
      });
  
}

function updateMessage(id, oldMessage, newMessage, currentState, newState) {
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
        Snackbar.show(StatusMessages.error);
        return Promise.resolve(oldMessage);
      });
  
}

exports.getSpecificUser = getSpecificUser;
exports.getUsersByName = getUsersByName;
exports.showMessages = showMessages;
exports.handleLogin = handleLogin;
exports.getUserById = getUserById;
exports.sendMessage = sendMessage;
exports.deleteMessage = deleteMessage;
exports.getUserDetailsById = getUserDetailsById;
exports.updateUserDetails = updateUserDetails;
exports.updateUser = updateUser;
exports.createProfile = createProfile;
exports.createUser = createUser;
exports.updateMessage = updateMessage;
/* snackbar Not a pure module */
