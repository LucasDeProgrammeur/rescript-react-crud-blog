     @bs.val external fetch: string => Js.Promise.t<'a> = "fetch"
     


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

      let getUserByName = (username) => {
              open Js.Promise
        fetch("https://localhost:44304/api/Users/name/" ++ username)
        |> then_(response => response["json"]())
        |> then_(jsonResponse => {
            Js.Promise.resolve(jsonResponse)
        })
      }
