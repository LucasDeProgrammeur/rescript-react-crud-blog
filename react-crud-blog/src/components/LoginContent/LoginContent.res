@react.component
let make = () => {
  @JSX
  list{
    <h1 className="centerText"> {React.string("Log into your account or sign up")} </h1>,
    <div className="loginBox" />,
  }
}
