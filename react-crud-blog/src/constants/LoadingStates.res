type usernameState = 
    | LoadingUsername
    | ErrorFetchingUsername
    | LoadedUsername(DatabaseContexts.user)

type messageState = 
    | LoadingMessage
    | ErrorLoadingMessage
    | LoadedMessage(DatabaseContexts.message)

type messagesState =
  | LoadingMessages
  | ErrorLoadingMessages
  | AppendingNewMessage(DatabaseContexts.message, array<DatabaseContexts.message>)
  | ProcessingMessageRemoval(string, array<DatabaseContexts.message>)
  | ProcessingMessageUpdate(string, string, array<DatabaseContexts.message>)
  | LoadedMessages(array<DatabaseContexts.message>)

type userDetailsState = 
    | LoadingUserDetails
    | ErrorLoadingUserDetails
    | LoadedUserDetails(DatabaseContexts.userDetails)