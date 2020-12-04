@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"
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

let showMessages = (newState) => {
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
  open Js.Promise
  fetch(
    "https://localhost:44304/api/Users/authenticate?username=" ++
    username ++
    "&password=" ++
    password,
  )
  |> Js.Promise.then_(response => response["json"]())
  |> Js.Promise.then_(jsonResponse => {
    LoginStates.authenticated.contents = LoginStates.LoggedIn({
      userId: jsonResponse["id"],
    })
    Cookies.setCookie("userId", jsonResponse["id"], 2)
    showSnackbar("You have logged in!")
    Js.Promise.resolve(jsonResponse["id"])
  })
  |> catch(_err => {
    LoginStates.authenticated.contents = LoginStates.LoggedOut
    showSnackbar("Whoops, something went wrong")
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
    showSnackbar("Your new message has been posted!")


    switch currentState {
      | LoadingStates.LoadedMessages(data) => newState(_ => LoadingStates.AppendingNewMessage(jsonResponse, data))
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
    showSnackbar("Your message has been deleted")
    switch currentState {
      | LoadingStates.LoadedMessages(data) => newState(_ => LoadingStates.ProcessingMessageRemoval(jsonResponse["id"], data))
      | _ => newState(_ => LoadingStates.LoadingMessages)
    }
    Js.Promise.resolve()
  })
  |> catch(_err => {
    Js.Promise.resolve()
  })
  |> ignore
}

let getUserDetailsById = (
  profileId,
  setUsername
) => {
  open Js.Promise
  fetch("https://localhost:44304/api/UserDetails/" ++ profileId)
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

let updateMessage = (
  id,
  oldMessage,
  newMessage,
  currentState, 
  newState
) => {
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
      | LoadingStates.LoadedMessages(data) => newState(_ => LoadingStates.ProcessingMessageUpdate(response["id"], newMessage, data))
      | _ => newState(_ => LoadingStates.LoadingMessages)
    }
    Js.Promise.resolve(response)
  })
  |> catch(_err => {
    showSnackbar("Whoops, something went wrong")
    Js.Promise.resolve(oldMessage)
  })
  |> ignore
}
