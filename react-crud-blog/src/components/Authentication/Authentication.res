

@react.component
let make = () => {

        //DatabaseFunctions.handleLogin(~username="Lucas", ~password="1234567", ())
        let url = ReasonReactRouter.useUrl()
        let query = QStringFinder.parseQueryString(url.search)
        let username = QStringFinder.showItem(query, "username")
        let password = QStringFinder.showItem(query, "password")
        <h1>{React.string("no content here yet")}</h1>
  
  }

