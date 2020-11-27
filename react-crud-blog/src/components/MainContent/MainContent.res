@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"

type id = int

type state =
  | LoadingMessages
  | ErrorLoadingMessages
  | LoadedMessages(DatabaseContexts.message)



@react.component
let make = () => {

  let (state, setState) = React.useState(() => LoadingMessages)
    React.useEffect0(() => {
    {
      open Js.Promise
      fetch("https://localhost:44304/api/Messages/")
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
        Js.log(jsonResponse)
        setState(_previousState => LoadedMessages(jsonResponse))
        Js.Promise.resolve()
      })
      |> catch(_err => {
        setState(_previousState => ErrorLoadingMessages)
        Js.Promise.resolve()
      })
      |> ignore
    }
    None
  })

  <main>
      {switch state {
    | ErrorLoadingMessages => React.string("An error occurred!")
    | LoadingMessages => <LoadAnimation />
    | LoadedMessages(messages) => messages->Belt.Array.mapWithIndex((i, x) => <BlogPostCard key={string_of_int(i)} message={x} />)->React.array
    }}
  </main>
}