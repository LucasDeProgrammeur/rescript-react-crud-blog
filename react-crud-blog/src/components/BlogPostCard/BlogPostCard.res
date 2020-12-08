type setState = unit
@react.component
let make = (~message, ~currentState, ~newState, ~isCreator, _) => {
  let (state, setState) = React.useState(() => LoadingStates.LoadingUserDetails)
  let (isOpen, setIsOpen) = React.useState(() => false)
  React.useEffect0(() => {
    DatabaseFunctions.getUserDetailsById(message["authorId"], newState => setState(_ => newState))
  })

  <article>
    {isCreator
      ? <img
          className="editIcon"
          src="https://image.flaticon.com/icons/png/512/61/61848.png"
          onClick={_ => DatabaseFunctions.deleteMessage(message["id"], currentState, newState)}
        />
      : React.null}
    {isCreator
      ? <img
          className="editIcon"
          src="https://simpleicon.com/wp-content/uploads/pencil-256x256.png"
          onClick={_ => setIsOpen(_previousState => true)}
        />
      : React.null}
    <img
      className="userIcon biggerIcon"
      src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png"
      alt="User icon"
    />
    <EditPostModal
      isOpen={isOpen}
      message={message}
      currentState={currentState}
      newState={newState}
      setIsOpen={newState => setIsOpen(_ => newState)}
    />
    <h4
      className="usernamePost"
      onClick={_ => ReasonReactRouter.push("/profile/" ++ string_of_int(message["authorId"]))}>
      {switch state {
      | LoadingStates.ErrorLoadingUserDetails => React.string("An error occurred")
      | LoadingStates.LoadingUserDetails => React.string("Loading")
      | LoadingStates.LoadedUserDetails(details) => React.string(details["profileName"])
      }}
    </h4>
    <p className="postContent"> {React.string(message["message1"])} </p>
  </article>
}
