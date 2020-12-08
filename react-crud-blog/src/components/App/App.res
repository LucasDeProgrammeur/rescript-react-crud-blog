@react.component
let make = () => {
  let url = ReasonReactRouter.useUrl()
  <>
    <Header />
    <div className="pageMargin">
      {switch url.path {
      | list{"login"} => <LoginContent />
      | list{"home"} => <MainContent />
      | list{"accountSettings", "changePassword"} => <ChangePassword />
      | list{"profile", id} => <UserProfile profileId={id} />
      | list{"authentication"} => <Authentication />
      | list{"accountSettings"} => <AccountSettings />
      | _ => <MainContent />
      }}
    </div>
  </>
}
