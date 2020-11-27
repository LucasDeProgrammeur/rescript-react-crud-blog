type loginStates =  LoggedIn({userId: string}) | LoggedOut
let authenticated = ref(LoggedOut)
type message = {id: int, message1: string, authorId: int }