type divClassName = string

@react.component
let make = (~message, ~isOpen, ~setPostStates, ~setIsOpen) => {
  Js.log(message)
  let (newMessage, setNewMessage) = React.useState(_ => message)
  isOpen
    ? <>
        <div className={"backgroundFade"} />
        <div className="modal">
          <img
            className="closeButton"
            onClick={_ => setIsOpen(false)}
            src="https://image.flaticon.com/icons/png/128/1828/1828774.png"
          />
          <h2> {React.string("Edit message")} </h2>
          <textarea 
          value={newMessage["message1"]}
          onChange={(e) => {
            let newValue = ReactEvent.Form.target(e)["value"]
         
            setNewMessage(_ => {"id": newMessage["id"], "message1": newValue, "authorId": newMessage["authorId"]})
          }}></textarea>
          <button 
          onClick={(_) => { 

            DatabaseFunctions.updateMessage(message["id"], message["authorId"], message, newMessage["message1"], setPostStates)
            
            }}
            >{React.string("Update")}</button>
        </div>
      </>
    : <div className={"noDisplay"} />
}