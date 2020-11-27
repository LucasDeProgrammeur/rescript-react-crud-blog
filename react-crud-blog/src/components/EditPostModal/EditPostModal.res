type divClassName = string

@react.component
let make = (~message, ~isOpen, ~setIsOpen) => {
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
          <textarea>{React.string(message)}</textarea>
          <button>{React.string("Update")}</button>
        </div>
      </>
    : <div className={"noDisplay"} />
}
