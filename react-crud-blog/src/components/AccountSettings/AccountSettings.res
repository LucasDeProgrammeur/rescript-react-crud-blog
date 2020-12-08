@react.component
let make = () => {
  let cookie = Cookies.getCookie("userId")[0]
  let (userDetails, setUserDetails) = React.useState(_ => LoadingStates.LoadingUserDetails)
  let (profileName, setProfileName) = React.useState(_ => None)
  let (followers, setFollowers) = React.useState(_ => None)
  let (bio, setBio) = React.useState(_ => None)

  React.useEffect(() => {
    switch userDetails {
    | LoadingStates.LoadedUserDetails(details) =>
      switch profileName {
      | None =>
        setProfileName(_ => Some(details["profileName"]))
        Js.log("profile name change called")
      | _ => ()
      }
      switch followers {
      | None => setFollowers(_ => Some(details["followers"]))
      | _ => ()
      }
      switch bio {
      | None => setBio(_ => Some(details["bio"]))
      | _ => ()
      }
      None
    | LoadingStates.LoadingUserDetails =>
      DatabaseFunctions.getUserDetailsById(int_of_string(cookie), newState => setUserDetails(_ => newState))
    }
  })

  <>
    <h1> {React.string("Account settings")} </h1>
    {switch userDetails {
    | LoadingStates.LoadingUserDetails => <LoadAnimation />
    | LoadingStates.LoadedUserDetails(details) => <>
        <h4> {React.string("Profile details")} </h4>
        <p className={"urgent"}>{React.string("Please note that your handle/username cannot be changed! (Display name only)")}</p>
        <input
          className={"lineSpacing"}
          type_="text"
          value={switch profileName {
          | None => ""
          | Some(value) => value
          }}
          onChange={e => {
            let value = ReactEvent.Form.target(e)["value"]
            Js.log(value)
            setProfileName(_ => value)
          }}
        />
        <textarea
          className={"lineSpacing"}
          value={DataConverters.optionToString(bio)}
          onChange={e => {
            let value = ReactEvent.Form.target(e)["value"]
            setBio(_ => value)
          }}
        />
        <button
          onClick={_ => {
            Js.log(userDetails)
            switch userDetails {
            | LoadingStates.LoadingUserDetails => Js.log("Error")
            | LoadingStates.LoadedUserDetails(details) =>
              DatabaseFunctions.updateUserDetails(
                cookie,
                {"bio": bio, "profileName": profileName, "followers": followers},
                newState => setUserDetails(_ => newState),
              )
            }
          }}>
          {React.string("Update")}
        </button>
        <h4> {React.string("Password")} </h4>
        <button onClick={_ => ReasonReactRouter.push("/accountSettings/changePassword")}>{React.string("Change your password")}</button>
      </>
    }}
  </>
}
