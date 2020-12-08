let optionToString = (option) => {
    switch option {
        | None => ""
        | Some(value) => value
    }
}

let optionToInt = (option) => {
    switch option {
        | None => 0
        | Some(value) => value
    }
}