type loginStates =  LoggedIn({userId: string}) | LoggedOut
let authenticated = ref(LoggedOut)