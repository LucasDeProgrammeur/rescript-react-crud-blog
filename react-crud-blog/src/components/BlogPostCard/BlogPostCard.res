@react.component
let make = () => {
    <article>
        <img className="userIcon" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="User icon"/>
        <h4 className="usernamePost">{React.string("User")}</h4>
        <p className="postContent">{React.string("Post content")}</p>
    </article>
}