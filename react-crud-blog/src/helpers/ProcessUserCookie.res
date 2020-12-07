let getLoggedInUserId = () => {
  let cookie = Cookies.getCookie("userId")

  if Js.Array.length(cookie) > 0 {
    cookie[0]
  } else {
    "Login"
  }
}
