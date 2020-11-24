'use strict';


function getSpecificUser(id) {
  fetch("https://localhost:44304/api/Users/" + String(id)).then(function (response) {
            return response.json();
          }).then(function (jsonResponse) {
          console.log(jsonResponse);
          return Promise.resolve(jsonResponse);
        }).catch(function (_err) {
        return Promise.resolve(_err);
      });
  
}

exports.getSpecificUser = getSpecificUser;
/* No side effect */
