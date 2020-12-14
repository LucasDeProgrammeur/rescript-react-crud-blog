@react.component
let make = (~profileId) => {
  let (followData, setFollowData) = React.useState(() => LoadingStates.LoadingFollowData)

  React.useEffect1(() => {
    switch followData {
    | LoadingStates.LoadingFollowData =>
      DatabaseFunctions.checkIfPersonFollowsAnother(
        ProcessUserCookie.getLoggedInUserId(),
        Belt.Int.toString(profileId),
        newState => setFollowData(_ => newState),
      )
    | _ => ()
    }
    None
  }, [followData])

  switch followData {
  | LoadingStates.LoadingFollowData => <LoadAnimation />
  | LoadingStates.LoadedFollowData(data) =>
    <button
    className="followButton"
      onClick={_ =>
        DatabaseFunctions.unfollowPerson(
          ProcessUserCookie.getLoggedInUserId(),
          string_of_int(profileId),
          newState => setFollowData(_ => newState),
        )}>
      {React.string("Unfollow")}
    </button>
  | LoadingStates.ErrorLoadingFollowData =>
    <button
    className="followButton"
      onClick={_ =>
        DatabaseFunctions.followPerson(ProcessUserCookie.getLoggedInUserId(), profileId, newState =>
          setFollowData(_ => newState)
        )}>
      {React.string("Follow")}
    </button>
  }
}
