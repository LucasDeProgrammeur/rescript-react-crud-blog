@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"

@react.component
let make = (~profileId) => {
  let (userDetails, setUserDetails) = React.useState(() => LoadingStates.LoadingUserDetails)
  React.useEffect0(() => {
    switch userDetails {
    | LoadingStates.LoadingUserDetails =>
      DatabaseFunctions.getUserDetailsById(profileId, newState => setUserDetails(_ => newState))
    }
  })


  <>
    {switch userDetails {
    | LoadingStates.ErrorLoadingUserDetails =>
      <p> {React.string("An error has occured loading this user profile")} </p>
    | LoadingStates.LoadingUserDetails => <LoadAnimation />
    | LoadingStates.LoadedUserDetails(userDetails) => <>
        <h1>
          {React.string(
            "User details of: " ++
            userDetails["profileName"] ++
            ", " ++
            string_of_int(userDetails["followers"]) ++ " followers.",
          )}
        </h1>
        <article className="bio">
          {React.string(userDetails["bio"])}
        <FollowButton profileId={profileId} />
        </article>
      </>
    }}
  </>
}
