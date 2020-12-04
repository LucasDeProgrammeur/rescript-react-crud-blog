type setState = unit
@react.component
let make = (~message, ~currentState, ~newState, _) => {
    
    let (state, setState) = React.useState(() => LoadingStates.LoadingUsername)
    let (isOpen, setIsOpen) = React.useState(() => false)
    
    React.useEffect0(() => {
        DatabaseFunctions.getUserById(message["authorId"], (newState) => setState(_ => newState))

    })

    <article>
        <img className="editIcon" src="https://image.flaticon.com/icons/png/512/61/61848.png" onClick={_ => DatabaseFunctions.deleteMessage(message["id"], currentState, newState)} />
        <img className="editIcon" src="https://simpleicon.com/wp-content/uploads/pencil-256x256.png" onClick={(_) => setIsOpen((_previousState) => true)} />
        <img className="userIcon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="User icon"/>
        <EditPostModal isOpen={isOpen} message={message} currentState={currentState} newState={newState} setIsOpen={(newState) => setIsOpen(_ => newState)} />
        <h4 className="usernamePost" onClick={_ => ReasonReactRouter.push("/profile/" ++ string_of_int(message["authorId"]))}>       {switch state {
    | LoadingStates.ErrorFetchingUsername => React.string("An error occurred")
    | LoadingStates.LoadingUsername => React.string("Loading")
    | LoadingStates.LoadedUsername(user) => React.string(user["username"])

    }}</h4>
        <p className="postContent">{React.string(message["message1"])}</p>
    </article>

  
}