type setState = unit
@react.component
let make = (~message, _) => {
    
    let (state, setState) = React.useState(() => LoadingStates.LoadingUsername)
    let (isOpen, setIsOpen) = React.useState(() => false)
    
    React.useEffect0(() => {
        DatabaseFunctions.getUserById(message["authorId"], (newState) => setState(_ => newState))

    })

    <article>
        <img className="editIcon" src="https://simpleicon.com/wp-content/uploads/pencil-256x256.png" onClick={(_) => setIsOpen((_previousState) => true)} />
        <img className="userIcon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="User icon"/>
        <EditPostModal isOpen={isOpen} message={message["message1"]} setIsOpen={(newState) => setIsOpen(_ => newState)} />
        <h4 className="usernamePost">       {switch state {
    | LoadingStates.ErrorFetchingUsername => React.string("An error occurred")
    | LoadingStates.LoadingUsername => React.string("Loading")
    | LoadingStates.LoadedUsername(user) => React.string(user["username"])

    }}</h4>
        <p className="postContent">{React.string(message["message1"])}</p>
    </article>

  
}