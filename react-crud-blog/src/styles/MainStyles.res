let reasonReactBlue = "#48a9dc";
// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = j`
 header {
     background-color: rgb(42, 64, 85);
     margin: 0;
     padding: 10px;
     height: 30px;
 }

h1 {
    color: white;
    margin-left: 20px;
}

 header h1 {
    margin: 0;
    margin-left: 20px;
    float: left;
    font-size: 20px;
 }

 body {
     margin: 0;
     font-family: 'Open Sans', sans-serif;
     background-color: rgb(32, 54, 75);
     color: white;
 }

 main {
     width: 50%;
     min-height: 300px;
     margin: 30px auto;
     background-color: rgb(52, 74, 95);
     border-radius: 5px;
     padding: 20px;
 }
 article {
     background-color: white;
     border-radius: 5px;
     width: 70%;
     margin: 20px auto;
     height: 300px;
     color: black;
 }

 .userIcon {
     width: 48px;
     margin: 20px;
     border-radius: 50%;
     background-color: rgb(120, 120, 120);
     display: inline-block;
     float: left;
 }
 .usernamePost {
     margin: 20px;
     padding-top: 10px;
     display: inline-block
 }

 .postContent {
     margin: 20px 70px;
 }

 .accountButton {
     font-family: 'Open Sans', sans-serif;
     float: right;
     height: 100%;
 }

 .loginBox form input,  .loginBox form label {
     display: block;
     width: 80%;
     margin: 10px auto; 
     padding: 5px;
 }

.loginBox {
    color: black;
    background-color: white;
    border-radius: 5px;
    width: 400px;
    height: 600px;
    margin: 20px auto;
    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.60);
}

textarea {
    width: 80%;
}

 .centerText {
     text-align: center;
 }

 .noDisplay {
     display: none;
 }

 .backgroundFade {
     left: 0;
     top: 0;
     opacity: 0.6;
     position: absolute;
     width: 100%;
     height: 100%;
     background-color: rgb(0, 0, 0);
     z-index: 0;
 }

 .editIcon {
     width: 32px;
     float: right;
     cursor: hand;
     border-radius: 5px;
 }

 .closeButton {
    width: 25px;
    float: right;
    padding: 10px;
    display: inline-block;
 }

 .modal {
    position: absolute;
    left: calc(50% - 250px);
    top: calc(50vh - 150px);
    width: 500px;
    height: 300px;
    background-color: white;
    border-radius: 5px;
    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.60);
    text-align: center;
 }

 .modal button {
     display: block;
     margin: 0 auto;
     width: 80%;
 }

.addMessageContainer {
    height: 150px;
    width: 100%;
    background-color: rgb(32, 54, 75);'
    margin: 0 auto;
}

.messageContainer {
    width: 80%;
    height: 100px;
    resize: none;
    margin: 20px;
}

.sendMessageButton {
    float: right;
}

 .editIcon:hover {
     background-color: rgb(230, 230, 230);
 }
`;