@react.component
let make = (~newState, ~currentState) => {
  let (message, setMessage) = React.useState(_ => "")
  <div className="addMessageContainer">
    <textarea
      className="messageContainer"
      value={message}
      onChange={e => { 
          let event = ReactEvent.Form.target(e)["value"]
          setMessage(_ => event)
          
          }}
      placeholder="What's on your mind right now?"
    />
    <button className="sendMessageButton" onClick={_ => DatabaseFunctions.sendMessage(message, int_of_string(ProcessUserCookie.getLoggedInUserId()), newState, currentState)}> {React.string("Send")} </button>
  </div>
}
