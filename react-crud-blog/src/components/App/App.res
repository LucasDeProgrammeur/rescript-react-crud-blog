

@react.component
let make = () => {
  let url = ReasonReactRouter.useUrl()

  <>
    <Header />
    {switch url.path {
    | list{"login"} => <LoginContent />
    | list{"home"} => <MainContent />
    | _ => <MainContent />
    }}
  </>
}
