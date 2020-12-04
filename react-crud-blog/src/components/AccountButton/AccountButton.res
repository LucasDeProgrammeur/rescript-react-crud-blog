let cookie = ProcessUserCookie.getLoggedInUserId()

@react.component
let make = () => {
  let (profileName, setProfileName) = React.useState(_ =>
    LoadingStates.LoadingUserDetails
  )
  React.useEffect(() => {
    switch profileName {
    | LoadingStates.LoadingUserDetails =>
      cookie == "Login"
        ? None
        : DatabaseFunctions.getUserDetailsById(cookie, newState =>
            setProfileName(_ => newState)
          )
    | LoadingStates.LoadedUserDetails(_)
    | LoadingStates.ErrorLoadingUserDetails =>
      None
    }
  })
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
}
