@bs.val external window: 'a = "window"

@react.component
let make = () => {
  let (userProfiles, setUserProfiles) = React.useState(() => LoadingStates.LoadingProfiles)

  <div className="searchSuggestions">
    <input
      type_="text"
      className="searchBox"
      onChange={e =>
        DatabaseFunctions.getUsersByName(ReactEvent.Form.target(e)["value"], setUserProfiles)}
    />
    <div className="searchResults">
      {switch userProfiles {
      | LoadingStates.LoadedProfiles(profiles) => profiles->Belt.Array.mapWithIndex((i, x) => {
          <div
            onClick={_ => window["location"]["replace"]("/profile/" ++ string_of_int(x["userId"]))}
            className="searchItem">
            <img
              className="userIcon smallerIcon"
              src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
              alt="User icon"
            />
            {React.string(x["profileName"])}
          </div>
        })->React.array
      | LoadingStates.LoadingProfiles => React.null
      }}
    </div>
  </div>
}
