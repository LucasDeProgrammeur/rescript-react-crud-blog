@bs.val external fetch: string => Js.Promise.t<'a> = "fetch"

type id = int

@react.component
let make = () => {
  let cookie = Cookies.getCookie("userId")
  let loginCheck = if Js.Array.length(cookie) > 0 {
    true
  } else {
    false
  }
  let (state, setState) = React.useState(() => LoadingStates.LoadingMessages)
  let (sorting, setSorting) = React.useState(() => SortStates.ByNewest)
  let (searchQuery, setSearchQuery) = React.useState(() => "")
  React.useEffect0(() => {
    DatabaseFunctions.showMessages(newState => setState(_ => newState))
  })

  <main>
    {loginCheck ? <AddMessageContainer newState={setState} currentState={state} /> : React.null}
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
    | LoadingStates.ErrorLoadingMessages =>
      <p> {React.string("An error occurred! The server may be down.")} </p>
    | LoadingStates.LoadingMessages => <LoadAnimation />
    | LoadingStates.AppendingNewMessage(newMessage, messageList) => {
        Js.Array.push(newMessage, messageList) |> ignore
        setState(_ => LoadingStates.LoadedMessages(messageList))
        <LoadAnimation />
      }
    | LoadingStates.ProcessingMessageRemoval(messageId, messages) => {
        setState(_ => LoadingStates.LoadedMessages(Belt.Array.keepMap(messages, x => {
            if x["id"] == messageId {
              None
            } else {
              Some(x)
            }
          })))
        <LoadAnimation />
      }
    | LoadingStates.ProcessingMessageUpdate(messageId, newMessage, messages) => {
        setState(_ => LoadingStates.LoadedMessages(Belt.Array.keepMap(messages, x => {
            if x["id"] == messageId {
              let newMessage = {"authorId": x["authorId"], "id": x["id"], "message1": newMessage}
              Some(newMessage)
            } else {
              Some(x)
            }
          })))
        <LoadAnimation />
      }
    | LoadingStates.LoadedMessages(messages) => {
        let filteredMessages = Belt.Array.keepMap(messages, x =>
          if (
            Js.String2.includes(
              Js.String2.toLowerCase(x["message1"]),
              Js.String2.toLowerCase(searchQuery),
            )
          ) {
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
        sortedMessages->Belt.Array.mapWithIndex((i, x) => {
          <BlogPostCard
            key={string_of_int(i)}
            message={x}
            currentState={state}
            newState={setState}
            isCreator={ProcessUserCookie.getLoggedInUserId() == string_of_int(x["authorId"])}
          />
        })->React.array
      }
    }}
  </main>
}
