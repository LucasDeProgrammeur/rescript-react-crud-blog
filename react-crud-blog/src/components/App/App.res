

@react.component
let make = () => {
  let url = ReasonReactRouter.useUrl()
  <>
    <Header />
    {switch url.path {
    | list{"login"} => <LoginContent />
    | list{"home"} => <MainContent />
    | list{"profile", id} => <UserProfile profileId={id} />
    | list{"authentication"} => <Authentication />
    | _ => <MainContent />
    }}
  </>
}
