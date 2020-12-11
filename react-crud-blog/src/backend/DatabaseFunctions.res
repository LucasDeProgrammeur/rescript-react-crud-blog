@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"
type md5
@bs.module("crypto-js") external md5: string => md5 = "MD5"
@bs.send external toString: md5 => string = "toString"

@bs.val
external fetch2: (
  string,
  {
    "method": string,
    "redirect": string,
    "body": option<string>,
    "headers": {
      "mode": string,
      "Access-Control-Allow-Credentials": string,
      "credentials": string,
      "Content-Type": string,
    },
  },
) => Js.Promise.t<'a> = "fetch"

@bs.module("snackbar") external showSnackbar: string => unit = "show"

type updateMessage = unit
type handleLogin = unit

let getSpecificUser = id => {
  open Js.Promise
  fetch("https://localhost:44304/api/Users/" ++ string_of_int(id))
  |> then_(response => response["json"]())
  |> then_(jsonResponse => {
    Js.Promise.resolve(jsonResponse)
  })
  |> then_(response => {
    response
  })
  |> catch(_err => {
    Js.Promise.resolve(_err)
  })
  |> ignore
}

let getUsersByName = (username, newState) => {
  open Js.Promise
  fetch("https://localhost:44304/api/UserDetails/namesWith?profileName=" ++ username)
  |> then_(response => response["json"]())
  |> then_(jsonResponse => {
    newState(_previousState => LoadingStates.LoadedProfiles(jsonResponse))
    Js.Promise.resolve()
  })
  |> catch(_err => {
    newState(_previousState => LoadingStates.ErrorLoadingProfiles)
    Js.Promise.resolve()
  })
  |> ignore
}

let showMessages = newState => {
  open Js.Promise
  fetch("https://localhost:44304/api/Messages/")
  |> then_(response => response["json"]())
  |> then_(jsonResponse => {
    newState(LoadingStates.LoadedMessages(jsonResponse))
    Js.Promise.resolve()
  })
  |> catch(_err => {
    newState(LoadingStates.ErrorLoadingMessages)
    Js.Promise.resolve()
  })
  |> ignore

  None
}

let handleLogin = (username: string, password: string) => {
  let passwordHash = md5(password)
  open Js.Promise
  fetch(
    "https://localhost:44304/api/Users/authenticate?username=" ++
    username ++
    "&password=" ++
    toString(passwordHash),
  )
  |> Js.Promise.then_(response => response["json"]())
  |> Js.Promise.then_(jsonResponse => {
    if Js.String2.length(jsonResponse["username"]) == 0 {
      showSnackbar(StatusMessages.incorrectCredentials)
      Js.Promise.resolve("incorrect")
    } else {
      LoginStates.authenticated.contents = LoginStates.LoggedIn({
        userId: jsonResponse["id"],
      })
      Cookies.setCookie("userId", jsonResponse["id"], 2)
      showSnackbar(StatusMessages.loggedIn)
      Js.Promise.resolve(jsonResponse["id"])
    }
  })
  |> catch(_err => {
    LoginStates.authenticated.contents = LoginStates.LoggedOut
    showSnackbar(StatusMessages.incorrectCredentials)
    Js.log2("Failure!!", _err)
    Js.Promise.resolve("error")
  })
  |> ignore
}

let getUserById = (id, setState: 'a => unit) => {
  open Js.Promise
  fetch("https://localhost:44304/api/Users/" ++ string_of_int(id))
  |> then_(response => response["json"]())
  |> then_(response => {
    setState(LoadingStates.LoadedUsername(response))
    Js.Promise.resolve()
  })
  |> catch(_err => {
    setState(LoadingStates.ErrorFetchingUsername)
    Js.Promise.resolve()
  })
  |> ignore
  None
}

let sendMessage = (message, authorId, newState, currentState) => {
  Js.log(authorId)
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/Messages",
    {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({"message1": message, "authorId": authorId}),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(jsonResponse => {
    showSnackbar(StatusMessages.postedMessage)

    switch currentState {
    | LoadingStates.LoadedMessages(data) =>
      newState(_ => LoadingStates.AppendingNewMessage(jsonResponse, data))
    | _ => newState(_ => LoadingStates.LoadingMessages)
    }
    Js.Promise.resolve()
  })
  |> catch(_err => {
    Js.Promise.resolve()
  })
  |> ignore
}

let deleteMessage = (id, currentState, newState) => {
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/Messages/" ++ id,
    {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({"id": id}),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(jsonResponse => {
    showSnackbar(StatusMessages.deletedMessage)
    switch currentState {
    | LoadingStates.LoadedMessages(data) =>
      newState(_ => LoadingStates.ProcessingMessageRemoval(jsonResponse["id"], data))
    | _ => newState(_ => LoadingStates.LoadingMessages)
    }
    Js.Promise.resolve()
  })
  |> catch(_err => {
    Js.Promise.resolve()
  })
  |> ignore
}

let getUserDetailsById = (profileId, setUsername) => {
  open Js.Promise
  fetch("https://localhost:44304/api/UserDetails/" ++ string_of_int(profileId))
  |> then_(response => response["json"]())
  |> then_(jsonResponse => {
    setUsername(LoadingStates.LoadedUserDetails(jsonResponse))
    Js.Promise.resolve()
  })
  |> catch(_err => {
    Js.Promise.resolve()
  })
  |> ignore

  None
}

let updateUserDetails = (userId, newDetails, newState) => {
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/UserDetails/" ++ userId,
    {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({
        "userId": int_of_string(userId),
        "followers": newDetails["followers"],
        "profileName": newDetails["profileName"],
        "bio": newDetails["bio"],
      }),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(_ => {
    showSnackbar(StatusMessages.userDetailsUpdated)
    newState(LoadingStates.LoadingUserDetails)
    Js.Promise.resolve()
  })
  |> catch(_err => {
    showSnackbar(StatusMessages.error)
    Js.Promise.resolve()
  })
  |> ignore
}

let updateUser = (userId, username, password) => {
  let passwordHash = md5(password)
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/Users/" ++ string_of_int(userId),
    {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({
        "id": userId,
        "username": username,
        "password": toString(passwordHash),
      }),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(_ => {
    showSnackbar(StatusMessages.passwordUpdated)
    Js.Promise.resolve()
  })
  |> catch(_err => {
    showSnackbar(StatusMessages.error)
    Js.Promise.resolve()
  })
  |> ignore
}

let createProfile = (profileName, userId) => {
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/UserDetails/",
    {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({
        "profileName": profileName,
        "followers": 0,
        "bio": "",
        "userId": userId,
      }),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(_ => {
    showSnackbar(StatusMessages.accountCreated)
    Js.Promise.resolve() |> catch(_err => {
      showSnackbar(StatusMessages.error)
      Js.Promise.resolve()
    })
  })
}

let createUser = (username, password, profileName) => {
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/Users/",
    {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({
        "username": username,
        "password": password,
      }),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(response => {
    showSnackbar(StatusMessages.accountCreated)
    createProfile(profileName, response["id"])
  })
  |> ignore
}

let updateMessage = (id, oldMessage, newMessage, currentState, newState) => {
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/Messages/" ++ id,
    {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include",
      },
      "body": Js.Json.stringifyAny({
        "id": id,
        "message1": newMessage,
        "authorId": oldMessage["authorId"],
      }),
      "redirect": "follow",
    },
  )
  |> then_(response => response["json"]())
  |> then_(response => {
    showSnackbar("This message has been updated!")
    switch currentState {
    | LoadingStates.LoadedMessages(data) =>
      newState(_ => LoadingStates.ProcessingMessageUpdate(response["id"], newMessage, data))
    | _ => newState(_ => LoadingStates.LoadingMessages)
    }
    Js.Promise.resolve(response)
  })
  |> catch(_err => {
    showSnackbar(StatusMessages.error)
    Js.Promise.resolve(oldMessage)
  })
  |> ignore
}
