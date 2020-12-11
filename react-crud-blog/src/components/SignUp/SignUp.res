@react.component
let make = () => {
  let (username, setUsername) = React.useState(_ => "")
  let (profileName, setProfileName) = React.useState(_ => "")
  let (password, setPassword) = React.useState(_ => "")
  let (passwordRepeat, setPasswordRepeat) = React.useState(_ => "")
  <>
    <h1> {React.string("Sign up today")} </h1>
    <h4> {React.string("Username")} </h4>
    <input
      value={username}
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setUsername(value)
      }}
      type_="text"
    />
    <h4> {React.string("Profile name")} </h4>
    <input
      value={profileName}
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setProfileName(value)
      }}
      type_="text"
    />
    <h4> {React.string("Password")} </h4>
    <input
      type_="password"
      value={password}
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setPassword(value)
      }}
    />
    <h4> {React.string("Repeat password")} </h4>
    <input
      type_="password"
      value={passwordRepeat}
      onChange={e => {
        let value = ReactEvent.Form.target(e)["value"]
        setPasswordRepeat(value)
      }}
    />
    <button onClick={_  => Validators.validateSignUp(username, password, passwordRepeat, profileName)}>
      {React.string("Sign up")}
    </button>
  </>
}

//  DatabaseFunctions.createUser(username, password, profileName)