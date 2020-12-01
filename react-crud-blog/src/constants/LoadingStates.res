type usernameState = 
    | LoadingUsername
    | ErrorFetchingUsername
    | LoadedUsername(DatabaseContexts.user)

type messageState = 
    | LoadingMessage
    | ErrorLoadingMessage
    | LoadedMessage(DatabaseContexts.message)

type userDetailsState = 
    | LoadingUserDetails
    | ErrorLoadingUserDetails
    | LoadedUserDetails(DatabaseContexts.userDetails)