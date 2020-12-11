@react.component
let make = () => {
  let (username, setUsername) = React.useState(_ => "")
  let (password, setPassword) = React.useState(_ => "")


  <>
    <h1 className="centerText"> {React.string("Log into your account or sign up")} </h1>
    <div className="loginBox">
      <label> {React.string("Username")} </label>
      <input
        type_="text"
        name="username"
        onChange={event => {
          let value = ReactEvent.Form.target(event)["value"]
          setUsername(value)
        }}
      />
      <label> {React.string("Password")} </label>
      <input
        type_="password"
        name="password"
        onChange={event => {
          let value = ReactEvent.Form.target(event)["value"]
          setPassword(value)
        }}
      />
      <button onClick={_ => DatabaseFunctions.handleLogin(username, password)}>
        {React.string("Login")}
      </button>
    </div>
    <h4 className="centerText pointerCursor" onClick={_ => ReasonReactRouter.push("/signUp")}>{React.string("Want to sign up? Click here")}</h4>
  </>
}
