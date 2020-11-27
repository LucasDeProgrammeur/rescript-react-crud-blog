

@react.component
let make = () => {
  let url = ReasonReactRouter.useUrl()

  <>
    <Header />
    {switch url.path {
    | list{"login"} => <LoginContent />
    | list{"home"} => <MainContent />
    | list{"authentication"} => <Authentication />
    | list{"fetchDogPictures"} => <FetchedDogPictures />
    | _ => <MainContent />
    }}
  </>
}
