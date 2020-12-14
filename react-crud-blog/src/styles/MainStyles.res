let reasonReactBlue = "#48a9dc"
// The {j|...|j} feature is just string interpolation, from
// bucklescript.github.io/docs/en/interop-cheatsheet#string-unicode-interpolation
// This allows us to conveniently write CSS, together with variables, by
// constructing a string
let style = j`
/*Main styles for website */
 header {
     background-color: rgb(42, 64, 85);
     margin: 0;
     padding: 10px;
     height: 30px;
     display: flex;
     justify-content: space-between;
 }

 .searchBox {
     width: 300px;
     font-size: 20px;
 }

.pageMargin {
    margin: 20px;
} 

.autoMargin {
    margin: 0 auto;
}

h1 {
    color: white;
}

 header h1 {
    margin: 0;
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
     background-color: rgb(241, 245, 248);
     border-radius: 5px;
     width: 70%;
     margin: 20px auto;
     height: 300px;
     color: black;
 }
button {
    color: white;
    background-color: rgb(52, 74, 95);
    border: 2px solid rgb(22, 44, 65);
    box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.10);
    border-radius: 3px;
    font-family: 'Open Sans', sans-serif;
}

textarea {
    background-color: rgb(247, 254, 255);
    font-family: 'Open Sans', sans-serif;
    padding: 5px;
    border: 3px solid rgb(207, 214, 215);
}

select {
    padding: 7px;
    border-radius: 3px;
    margin: 10px;
}

/*Blogpost styling*/
 .userIcon {
     border-radius: 50%;
     background-color: rgb(120, 120, 120);
     display: inline-block;
     float: left;
 }

 .biggerIcon {
    margin: 20px;
    width: 48px;
 }

 .bio {
     padding: 20px;  
 }

 .followButton {
     float: right;
     padding: 10px;
 }
 
 .smallerIcon {
     width: 24px;   
 }

 .editIcon {
     width: 32px;
     float: right;
     cursor: hand;
     border-radius: 5px;
 }

 .usernamePost {
     margin: 20px;
     padding-top: 10px;
     display: inline-block;
     cursor: pointer;
     
 }

 .postContent {
     margin: 20px 70px;
 }

/* Account button styling */
 .accountButton {
     font-family: 'Open Sans', sans-serif;
     float: right;
     height: 100%;
     min-width: 100px;
 }

.accountMenu {
    display: none;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin-top: 30px;
}

.accountItem {
    width: 100%;
    padding: 10px 0;
    overflow: none;
    text-align: center;
    cursor: pointer
}

.accountItem:hover {
    background-color: rgb(52, 74, 95);
    color: white;
}

 .accountSettings:hover .accountMenu {display: block;}

 .dropdown:hover .dropdown-content {display: block;}

 /* Searchbox styling */
  .searchSuggestions:hover .searchResults {display: block;}

  .searchResults {
      background-color: white;
      color: black;
      z-index: 1;      
      position: fixed;
      width: 300px;
  }

  .searchItem {
      text-align: center;
      padding: 10px;
      cursor: pointer;
  }

  .searchItem:hover {
      background-color: rgb(52, 74, 95);
    color: white;
  }

/*Login box styling*/
 .loginBox input,  .loginBox label {
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

.lineSpacing {
    display: table;
    margin: 20px;
}

 .centerText {
     text-align: center;
 }

.pointerCursor {
    cursor: pointer;
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
    height: calc(100% - 20px);
    margin: 10px 10px;
    width: 10%;
}

 .editIcon:hover {
     background-color: rgb(230, 230, 230);
 }

 @media screen and (max-width: 800px) {
     .sendMessageButton {
         width: 15%;
     }
     h1 {
         margin-top: 1px;
         font-size: 14px !important;
     }
     .searchSuggestions, .searchBox, .searchResults {
         width: 100px;
     }

    main {
        width: 90%;
    }

    .pageMargin {
        margin: 0;
    }

    .messageContainer {
        width: 60%;
    }
 }

/* Color styles */
    .urgent {
        color: rgb(222, 22, 45);
    }
`
