@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"

@react.component
let make = (~profileId) => {
  let urlPath = ReasonReactRouter.useUrl().path

  let (userDetails, setUserDetails) = React.useState(() =>
    LoadingStates.LoadingUserDetails
  )

  let (userId, setUserId) = React.useState(() => 0)
  React.useEffect0(() => {
    {
      open Js.Promise
      fetch("https://localhost:44304/api/UserDetails/" ++ profileId)
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
        setUserDetails(_previousState => LoadingStates.LoadedUserDetails(
          jsonResponse,
        ))
        Js.Promise.resolve()
      })
      |> catch(_err => {
        setUserDetails(_previousState => LoadingStates.ErrorLoadingUserDetails)
        Js.Promise.resolve()
      })
      |> ignore
    }

    None
})
  <>
    {switch userDetails {
    | LoadingStates.ErrorLoadingUserDetails =>
      <p> {React.string("An error has occured loading this user profile")} </p>
    | LoadingStates.LoadingUserDetails => <LoadAnimation />
    | LoadingStates.LoadedUserDetails(userDetails) => <>
        <h1>
          {React.string("User details of: " ++ userDetails["profileName"] ++ ", " ++ string_of_int(userDetails["followers"]) ++ " followers.")}
        </h1>
        <article className="bio">{React.string(userDetails["bio"])}</article>
        
      </>
    }}
  </>
}
