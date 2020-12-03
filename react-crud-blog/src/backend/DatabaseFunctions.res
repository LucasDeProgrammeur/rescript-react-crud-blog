@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"
@bs.val external fetch2: (
  string,
  {"method": string, "redirect": string, "body": option<string>, "headers": { "mode": string, "Access-Control-Allow-Credentials": string, "credentials": string, "Content-Type": string}},
) => Js.Promise.t<'a> = "fetch"

@bs.val @bs.scope("localStorage") external getItem: string => string = "getItem"
@bs.val @bs.scope("localStorage") external setItem: (string, string) => unit = "setItem"

@bs.module("snackbar") external showSnackbar: string => unit = "show"



let username = ref("username")
let password = ref("password")

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
    Js.Promise.resolve()
  })
  |> catch(_err => {
    LoginStates.authenticated.contents = LoginStates.LoggedOut
    Js.Promise.resolve()
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

let sendMessage = (message, authorId) => {
  open Js.Promise
  fetch2("https://localhost:44304/api/Messages", {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include"
      },
      "body": Js.Json.stringifyAny({"message1": message, "authorId": authorId}),
      "redirect": "follow"
    },
  )
  |> then_(response => response["json"]())
      |> then_(jsonResponse => {
        showSnackbar("Your new message has been posted!")
        Js.Promise.resolve(jsonResponse)
      })
      |> catch(_err => {
        Js.Promise.resolve(_err)
      })
      |> ignore
}

let deleteMessage = (id) => {
  open Js.Promise
  fetch2("https://localhost:44304/api/Messages/" ++ id, {
      "method": "DELETE",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include"
      },
      "body": Js.Json.stringifyAny({"id": id}),
      "redirect": "follow"
    },
  )
  |> then_(response => response["json"]())
      |> then_(jsonResponse => {
        showSnackbar("Your message has been deleted")
        Js.Promise.resolve(jsonResponse)
      })
      |> catch(_err => {
        Js.Promise.resolve(_err)
      })
      |> ignore
}

let getUserDetailsById = (profileId, setUserDetails: () => LoadingStates.userDetailsState) => {
        open Js.Promise
      fetch("https://localhost:44304/api/UserDetails/" ++ profileId)
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
        Js.Promise.resolve(jsonResponse)
      })
      |> catch(_err => {
        Js.Promise.resolve(_err)
      })
      |> ignore
}

let updateMessage = (id, authorId, oldMessage, newMessage, setPostStates: 'a => unit) => {
  open Js.Promise
  fetch2(
    "https://localhost:44304/api/Messages/" ++ id,
    {
      "method": "PUT",
      "headers": {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Credentials": "true",
        "mode": "no-cors",
        "credentials": "include"
      },
      "body": Js.Json.stringifyAny({"id": id, "message1": newMessage, "authorId": oldMessage["authorId"]}),
      "redirect": "follow"
    },
  )
  |> then_(response => response["json"]())
  |> then_(response => {
    showSnackbar("This message has been updated! Refresh to see changes")
    // _ => setPostStates(LoadingStates.LoadingMessage)
    Js.Promise.resolve(response)
  })
  |> catch(_err => {
    showSnackbar("Whoops, something went wrong")
    Js.Promise.resolve(oldMessage)
  })
  |> ignore
}


