type usernameState = 
    | LoadingUsername
    | ErrorFetchingUsername
    | LoadedUsername(DatabaseContexts.user)
