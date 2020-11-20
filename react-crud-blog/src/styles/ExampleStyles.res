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
     height: 45px;
 }

h1 {
    color: white;
    margin-left: 20px;
}
 header h1 {
     margin: 0;
     margin-left: 20px;
    float: left;
 }

 body {
     margin: 0;
     font-family: 'Open Sans', sans-serif;
     background-color: rgb(32, 54, 75);
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

 .centerText {
     text-align: center;
 }
`;