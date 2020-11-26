@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"


type state =
  | LoadingMessages
  | ErrorLoadingMessages
  | LoadedMessages


@react.component
let make = () => {

  let (state, setState) = React.useState(() => LoadingMessages)
    React.useEffect0(() => {
    {
      open Js.Promise
      fetch("https://localhost:44304/api/Messages/")
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
        setState(_previousState => LoadedDogs(jsonResponse["message"]))
        Js.Promise.resolve()
      })
      |> catch(_err => {
        setState(_previousState => ErrorFetchingDogs)
        Js.Promise.resolve()
      })
      |> ignore
    }
    None
  })

  <main>
      {switch state {
    | ErrorLoadingMessages => React.string("An error occurred!")
    | LoadingMessages => React.string("Loading...")
    | LoadedMessages(messages) => messages->Belt.Array.mapWithIndex((i, message) => {

        <BlogPostCard message={message["message"]} />
      })->React.array
    }}
    <BlogPostCard />
  </main>
}