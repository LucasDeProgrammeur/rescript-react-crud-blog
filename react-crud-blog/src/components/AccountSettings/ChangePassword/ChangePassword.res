@react.component
let make = () => {
  let cookie = Cookies.getCookie("userId")[0]

  let (currentPassword, setCurrentPassword) = React.useState(_ => "")
  let (newPassword, setNewPassword) = React.useState(_ => "")
  let (newPasswordConfirmation, setNewPasswordConfirmation) = React.useState(_ => "")
  let (username, setUsername) = React.useState(_ => "")
  let (user, setUser) = React.useState(_ => LoadingStates.LoadingUsername) 

  React.useEffect(() => {
    switch user {
    | LoadingStates.LoadingUsername =>
      DatabaseFunctions.getUserById(userId, newState => setUser(_ => newState))
    | LoadingStates.LoadedUsername(details) => setUsername(_ => details["username"])
    }
  })
  <>
    <h1> {React.string("Change user password")} </h1>
    <h4> {React.string("Current password")} </h4>
    <input type_="password" />
    <h4> {React.string("New password")} </h4>
    <input type_="password" />
    <h4> {React.string("Repeat new password")} </h4>
    <input type_="password" />
    <button
      onClick={_ =>
        ValidatePasswordChange.validate(
          int_of_string(cookie),
          currentPassword,
          newPassword,
          newPasswordConfirmation,
        )}>
      {React.string("Change password")}
    </button>
  </>
}
