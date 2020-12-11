@react.component
let make = () => {
  let cookie = int_of_string(Cookies.getCookie("userId")[0])

  let (currentPassword, setCurrentPassword) = React.useState(_ => "")
  let (actualCurrentPassword, setActualCurrentPassword) = React.useState(_ => None)
  let (newPassword, setNewPassword) = React.useState(_ => "")
  let (newPasswordConfirmation, setNewPasswordConfirmation) = React.useState(_ => "")
  let (username, setUsername) = React.useState(_ => None)
  let (user, setUser) = React.useState(_ => LoadingStates.LoadingUsername)

  React.useEffect(() => {
    switch user {
    | LoadingStates.LoadedUsername(details) =>
      switch username {
      | None => setUsername(_ => Some(details["username"]))
      | _ => ()
      }
      switch actualCurrentPassword {
      | None => setActualCurrentPassword(_ => Some(details["password"]))
      | _ => ()
      }
      None
    | LoadingStates.LoadingUsername =>
      DatabaseFunctions.getUserById(cookie, newState => setUser(_ => newState))
    | LoadingStates.ErrorFetchingUsername => None
    }
  })
  <>
    <h1> {React.string("Change user password")} </h1>
    <h4> {React.string("Current password")} </h4>
    <input
      type_="password"
      value={currentPassword}
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setCurrentPassword(_ => value)
      }}
    />
    <h4> {React.string("New password")} </h4>
    <input
      type_="password"
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setNewPassword(_ => value)
      }}
    />
    <h4> {React.string("Repeat new password")} </h4>
    <input
      type_="password"
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setNewPasswordConfirmation  (_ => value)
      }}
    />
    <button
      onClick={_ =>
        Validators.validatePasswordChange(
          cookie,
          DataConverters.optionToString(username),
          currentPassword,
          DataConverters.optionToString(actualCurrentPassword),
          newPassword,
          newPasswordConfirmation,
        )}>
      {React.string("Change password")}
    </button>
  </>
}
