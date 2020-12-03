@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"

type id = int

type state =
  | LoadingMessages
  | ErrorLoadingMessages
  | LoadedMessages(array<DatabaseContexts.message>)

@react.component
let make = () => {
  let (state, setState) = React.useState(() => LoadingMessages)
  let (sorting, setSorting) = React.useState(() => SortStates.ByNewest)
  let (searchQuery, setSearchQuery) = React.useState(() => "")
  React.useEffect0(() => {
    {
      open Js.Promise
      fetch("https://localhost:44304/api/Messages/")
      |> then_(response => response["json"]())
      |> then_(jsonResponse => {
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
    <AddMessageContainer />
    <select
      onChange={e => {
        let selectValue = ReactEvent.Form.target(e)["value"]
        switch selectValue {
        | "1" => setSorting(_ => SortStates.ByNewest)
        | "2" => setSorting(_ => SortStates.ByOldest)
        }
      }}>
      <option value="1"> {React.string("Sort by newest")} </option>
      <option value="2"> {React.string("Sort by oldest")} </option>
    </select>
    <input
      type_="text"
      value={searchQuery}
      onChange={e => {
        let textValue = ReactEvent.Form.target(e)["value"]
        setSearchQuery(_ => textValue)
      }}
    />
    {switch state {
    | ErrorLoadingMessages =>
      <p> {React.string("An error occurred! The server may be down.")} </p>
    | LoadingMessages => <LoadAnimation />
    | LoadedMessages(messages) => {
        let filteredMessages = Belt.Array.keepMap(messages, x => 
          if (Js.String2.includes(Js.String2.toLowerCase(x["message1"]), Js.String2.toLowerCase(searchQuery))) {
            Some(x)
          } else {
            None
          }
        )
        let sortedMessages = {
          switch sorting {
          | SortStates.ByNewest => Belt.Array.reverse(filteredMessages)
          | SortStates.ByOldest => filteredMessages
          }
        }
        sortedMessages
        ->Belt.Array.mapWithIndex((i, x) => {
          <BlogPostCard
            key={string_of_int(i)}
            message={x}
            setBlogPostStates={newState => setState(_ => newState)}
          />
        })
        ->React.array
      }
    }}
  </main>
}
