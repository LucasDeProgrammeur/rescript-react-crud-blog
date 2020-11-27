@react.component
let make = (~message, _) => {
    <article>
        <img className="userIcon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="User icon"/>
        <h4 className="usernamePost">{React.string("Author ID: " ++ string_of_int(message["authorId"]))}</h4>
        <p className="postContent">{React.string(message["message1"])}</p>
    </article>
}