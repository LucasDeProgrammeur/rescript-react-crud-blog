let cookie = ProcessUserCookie.getLoggedInUserId()

@react.component
let make = () => {
  let (profileName, setProfileName) = React.useState(_ => LoadingStates.LoadingUserDetails)
  React.useEffect(() => {
    switch profileName {
    | LoadingStates.LoadingUserDetails =>
      cookie == "Login"
        ? None
        : DatabaseFunctions.getUserDetailsById(int_of_string(cookie), newState =>
            setProfileName(_ => newState)
          )
    | LoadingStates.LoadedUserDetails(_)
    | LoadingStates.ErrorLoadingUserDetails =>
      None
    }
  })
  <div className="accountSettings">
    <button
      className="accountButton"
      onClick={_ =>
        ReasonReactRouter.push({
          switch profileName {
          | LoadingStates.LoadedUserDetails(_) => "/profile/" ++ cookie
          | LoadingStates.LoadingUserDetails
          | LoadingStates.ErrorLoadingUserDetails => "/login"
          }
        })}>
      {React.string({
        switch profileName {
        | LoadingStates.LoadedUserDetails(details) => details["profileName"]
        | LoadingStates.LoadingUserDetails => "Login"
        | LoadingStates.ErrorLoadingUserDetails => "Login"
        }
      })}
    </button>
    {switch profileName {
    | LoadingStates.LoadedUserDetails(_) =>
      <div className="accountMenu">
        <div className="accountItem" onClick={_ => ReasonReactRouter.push("/profile/" ++ cookie)}>
          {React.string("Profile")}
        </div>
        <div className="accountItem" onClick={_ => ReasonReactRouter.push("/accountSettings")}>
          {React.string("Settings")}
        </div>
        <div
          className="accountItem"
          onClick={_ => {
            Cookies.clearCookie("userId")
            ReasonReactRouter.push("/login")
            setProfileName(_ => LoadingStates.ErrorLoadingUserDetails)
          }}>
          {React.string("Logout")}
        </div>
      </div>
    | LoadingStates.LoadingUserDetails
    | LoadingStates.ErrorLoadingUserDetails => React.null
    }}
  </div>
}
