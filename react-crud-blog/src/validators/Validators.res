@bs.module("snackbar") external showSnackbar: string => unit = "show"
type md5
@bs.module("crypto-js") external md5: string => md5 = "MD5"
@bs.send external toString: md5 => string = "toString"


let validateSignUp = (username, password, passwordRepeat, profileName) => {
  if (
    Js.String2.length(username) == 0 ||
    Js.String2.length(password) == 0 ||
    Js.String2.length(passwordRepeat) == 0 ||
    Js.String2.length(profileName) == 0
  ) {
    showSnackbar("You forgot to insert one or more fields")
  } else if (password != passwordRepeat) {
      showSnackbar("Your password and repeated password field are not the same")
  }
}

let validatePasswordChange = (userId, username, currentPassword, actualCurrentPassword, newPassword, newPasswordRepeat) => {
  let hashedPassword = md5(currentPassword)
  if (toString(hashedPassword) != actualCurrentPassword) {
    showSnackbar("Your current password field does not match with your actual current password")
  } else {
    if (newPassword != newPasswordRepeat) {
      showSnackbar("Your new password and password repeat field don't match")
    } else {
      DatabaseFunctions.updateUser(userId, username, newPassword)
    }
  }
}
