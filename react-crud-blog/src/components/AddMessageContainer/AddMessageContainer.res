@react.component
let make = () => {
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
    <button className="sendMessageButton" onClick={_ => DatabaseFunctions.sendMessage(message, 1)}> {React.string("Send")} </button>
  </div>
}
