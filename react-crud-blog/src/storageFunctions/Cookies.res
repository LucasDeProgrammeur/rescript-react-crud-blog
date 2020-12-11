@bs.val external document: 'a = "document"
type t
@bs.new external createDate: unit => Js.t<'a> = "Date"

let setCookie = (cname, cvalue, exdays) => {
  let d = createDate()
  let timeSet = d["setTime"](d["getTime"] + exdays * 24 * 60 * 60 * 1000)
  let expires = "expires=" ++ d["toUTCString"]
  document["cookie"] = cname ++ "=" ++ cvalue ++ ";" ++ expires ++ ";path=/"
}

let getCookie = cname => {
  let cookieValues = Js.String2.split(document["cookie"], ";")
  Js.log(cookieValues)
  Belt.Array.keepMap(cookieValues, x =>
    if Js.String2.includes(Js.String2.toLowerCase(x), Js.String2.toLowerCase(cname)) {
      let foundValue = Js.String2.split(x, "=")[1]
      Some(foundValue)
    } else {
      None
    }
  )
}

let clearCookie = cname => {
  document["cookie"] = cname ++ "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}
