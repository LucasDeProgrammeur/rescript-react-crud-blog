// Entry point



@bs.val external document: 'a = "document"



// We're using raw DOM manipulations here, to avoid making you read
// ReasonReact when you might precisely be trying to learn it for the first
// time through the examples later.
let style = document["createElement"]("style")
document["head"]["appendChild"](style)
style["innerHTML"] = ExampleStyles.style

let makeContainer = () => {
  let container = document["createElement"]("div")
  container["className"] = "container"

  let title = document["createElement"]("div")
  title["className"] = "containerTitle"

  let content = document["createElement"]("div")
  content["className"] = "containerContent"
  content["id"] = "containerContent"

  let () = container["appendChild"](title)
  let () = container["appendChild"](content)
  let () = document["body"]["appendChild"](container)

  content
};

Js.log(DatabaseFunctions.getSpecificUser(1))

let getUsers = Js.Promise.make((~resolve, ~reject) => resolve(., Js.log(Js.Json.stringifyAny(DatabaseFunctions.getSpecificUser(1)))))

makeContainer()
ReactDOM.render(<App />, document["getElementById"]("containerContent"))
