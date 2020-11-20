@react.component
let make = () => {
    let url = ReasonReactRouter.useUrl()

    <button onClick={(e) => ReasonReactRouter.push("/login")} className="accountButton">{React.string("Login")}</button>
}