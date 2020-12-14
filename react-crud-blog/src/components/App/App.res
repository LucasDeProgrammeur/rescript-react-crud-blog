@react.component
let make = () => {
  let url = ReasonReactRouter.useUrl()
  <>
    <Header />
    <div className="pageMargin">
      {switch url.path {
      | list{"login"} => <LoginContent />
      | list{"home"} => <MainContent />
      | list{"signUp"} => <SignUp />
      | list{"accountSettings", "changePassword"} => <ChangePassword />
      | list{"profile", id} => <UserProfile profileId={int_of_string(id)} />
      | list{"authentication"} => <Authentication />
      | list{"accountSettings"} => <AccountSettings />
      | list{"accountSettings", "deactivateAccount"} => <DeactivateAccount />
      | _ => <MainContent />
      }}
    </div>
  </>
}
