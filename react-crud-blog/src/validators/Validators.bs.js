'use strict';

var Snackbar = require("snackbar");
var CryptoJs = require("crypto-js");
var DatabaseFunctions = require("../backend/DatabaseFunctions.bs.js");

function validateSignUp(username, password, passwordRepeat, profileName) {
  if (username.length === 0 || password.length === 0 || passwordRepeat.length === 0 || profileName.length === 0) {
    Snackbar.show("You forgot to insert one or more fields");
    return ;
  } else if (password !== passwordRepeat) {
    Snackbar.show("Your password and repeated password field are not the same");
    return ;
  } else {
    return ;
  }
}

function validatePasswordChange(userId, username, currentPassword, actualCurrentPassword, newPassword, newPasswordRepeat) {
  var hashedPassword = CryptoJs.MD5(currentPassword);
  if (hashedPassword.toString() !== actualCurrentPassword) {
    Snackbar.show("Your current password field does not match with your actual current password");
    return ;
  } else if (newPassword !== newPasswordRepeat) {
    Snackbar.show("Your new password and password repeat field don't match");
    return ;
  } else {
    return DatabaseFunctions.updateUser(userId, username, newPassword);
  }
}

exports.validateSignUp = validateSignUp;
exports.validatePasswordChange = validatePasswordChange;
/* snackbar Not a pure module */
