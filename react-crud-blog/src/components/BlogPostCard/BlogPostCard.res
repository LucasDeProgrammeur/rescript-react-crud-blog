@react.component
let make = (~postContent, ~postUser) => {
    <article>
        <img className="userIcon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="User icon"/>
        <h4 className="usernamePost">{React.string(postContent)}</h4>
        <p className="postContent">{React.string(postUser)}</p>
    </article>
}