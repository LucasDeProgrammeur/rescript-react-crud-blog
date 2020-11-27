@bs.val external event: string => Js.Promise.t<'a> = "event"
type event = {
  "target": {
    "value": string
  }
}


@react.component
let make = () => {
  let (username, setUsername) = React.useState(_ => "");
  let (password, setPassword) = React.useState(_ => "");

  @JSX
  list{
    <h1 className="centerText"> {React.string("Log into your account or sign up")} </h1>,
    <div className="loginBox">
      <form method="post">
        <label> {React.string("Username")} </label>
        <input type_="text" name="username" onChange={event => {
            let value = ReactEvent.Form.target(event)["value"];
            setUsername(value)
          }} />
        <label> {React.string("Password")} </label>
        <input type_="password" name="password" onChange={event => {
         let value = ReactEvent.Form.target(event)["value"];
         setPassword(value) 
        }}/>
        <input type_="submit" value="Login"
          />
      </form>
    </div>,
  }
}
