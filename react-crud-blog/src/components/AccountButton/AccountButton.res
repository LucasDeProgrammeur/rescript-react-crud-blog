    let value = switch LoginStates.authenticated.contents {
        | LoginStates.LoggedIn(_) => "Logged on"
        | LoginStates.LoggedOut => "Login"
    }

@react.component
let make = () => {
    //let url = ReasonReactRouter.useUrl()

    <button onClick={(_) => ReasonReactRouter.push("/login")} className="accountButton">{React.string(value)}</button>
}