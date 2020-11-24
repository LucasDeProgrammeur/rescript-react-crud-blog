'use strict';


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

function getUserByName(username) {
  return fetch("https://localhost:44304/api/Users/name/" + username).then(function (response) {
                return response.json();
              }).then(function (jsonResponse) {
              return Promise.resolve(jsonResponse);
            });
}

exports.getSpecificUser = getSpecificUser;
exports.getUserByName = getUserByName;
/* No side effect */
