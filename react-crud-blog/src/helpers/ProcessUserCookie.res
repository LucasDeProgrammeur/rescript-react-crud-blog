
let getLoggedInUserId = () => {
let cookie = Cookies.getCookie("userId")

if Js.Array.length(cookie) == 1 {
  cookie[0]
} else {
  "Login"
}

}
