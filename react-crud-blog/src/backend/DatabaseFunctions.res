@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"
     
let username = ref("username");
let password = ref("password")

      let getSpecificUser = (id) => {
          open Js.Promise
                fetch("https://localhost:44304/api/Users/" ++ string_of_int(id))
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
          Js.log(jsonResponse)
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

      let handleLogin = (~username, ~password, ()) => {
          fetch("https://localhost:44304/api/Users/authenticate?username=" ++ username ++ "&password=" ++ password)
        |> Js.Promise.then_(response => response["json"]())
        |> Js.Promise.then_(jsonResponse => {
            Js.log(jsonResponse)
            if (jsonResponse["id"] !== "2") {
              LoginStates.authenticated.contents = LoginStates.LoggedIn({ userId: jsonResponse["id"] })
              ReasonReactRouter.push("home")
            } else {
              LoginStates.authenticated.contents = LoginStates.LoggedOut
            }
            Js.Promise.resolve(() => ReasonReactRouter.push("home"))
        })
        }


      
