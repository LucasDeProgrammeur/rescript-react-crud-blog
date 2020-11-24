     @bs.val external fetch: string => Js.Promise.t<'a> = "fetch"
     


      let getSpecificUser = (id) => {
          open Js.Promise
                fetch("https://localhost:44304/api/Users/" ++ Js.String2.make(id))
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
          Js.log(jsonResponse)
        Js.Promise.resolve(jsonResponse)
      })
      |> catch(_err => {
        Js.Promise.resolve(_err)
      })
      |> ignore
      }