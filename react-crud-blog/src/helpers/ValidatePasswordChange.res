@bs.module("snackbar") external showSnackbar: string => unit = "show"

let validate = (userId, currentPassword, newPassword, newPasswordRepeat) => {
  let (user, setUser) = React.useState(_ => LoadingStates.LoadingUsername)
  React.useEffect(() => {
    switch user {
    | LoadingStates.LoadingUsername =>
      DatabaseFunctions.getUserById(userId, newState => setUser(_ => newState))
    | LoadingStates.LoadedUsername(details) => {
        if (currentPassword == details["password"]) {
            if (newPassword != newPasswordRepeat) {
                showSnackbar("Your new password and the password you repeated didn't match")
                None
            } else {
                DatabaseFunctions.updateUser(string_of_int(userId), details["username"], newPassword )
                None
            }
        } else {
            showSnackbar("The password you typed in was incorrect.")
            None
        }
    }
    }
  })
}
