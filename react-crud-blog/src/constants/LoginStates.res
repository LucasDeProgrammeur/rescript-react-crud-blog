type loginStates =  LoggedIn({userId: string}) | LoggedOut
let authenticated = ref(LoggedOut)
Js.log(authenticated.contents)
type message = {id: int, message1: string, authorId: int }