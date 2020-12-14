@react.component
let make = () => {
    let userId = ProcessUserCookie.getLoggedInUserId()
    <>
    <h1>{React.string("We're sorry to see you go")}</h1>
    <h2 className="centerText">{React.string("By pressing this button below, all your content and your account will be deleted")}</h2>

    <button onClick={_ => {
    DatabaseFunctions.deleteMessagesFromUser(userId)
    DatabaseFunctions.deleteUser(int_of_string(userId))
    DatabaseFunctions.deleteUserDetails(userId)
    }} className="autoMargin">{React.string("Delete account")}</button>
    </>
}