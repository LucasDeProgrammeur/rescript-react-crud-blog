@react.component
let make = () => {
  @JSX
  list{
    <h1 className="centerText"> {React.string("Log into your account or sign up")} </h1>,
    <div className="loginBox">
      <form method="post">
        <label> {React.string("Username")} </label>
        <input type_="text" name="username" />
        <label> {React.string("Password")} </label>
        <input type_="text" name="password" />
        <input type_="submit" value="Login" />
      </form>
    </div>,
  }
}
