'use strict';


var reasonReactBlue = "#48a9dc";

var style = "\n/*Main styles for website */\n header {\n     background-color: rgb(42, 64, 85);\n     margin: 0;\n     padding: 10px;\n     height: 30px;\n     display: flex;\n     justify-content: space-between;\n }\n\n .searchBox {\n     width: 300px;\n     font-size: 20px;\n }\n\n \nh1 {\n    color: white;\n}\n\n header h1 {\n    margin: 0;\n    float: left;\n    font-size: 20px;\n }\n\n body {\n     margin: 0;\n     font-family: \'Open Sans\', sans-serif;\n     background-color: rgb(32, 54, 75);\n     color: white;\n }\n\n main {\n     width: 50%;\n     min-height: 300px;\n     margin: 30px auto;\n     background-color: rgb(52, 74, 95);\n     border-radius: 5px;\n     padding: 20px;\n }\n article {\n     background-color: white;\n     border-radius: 5px;\n     width: 70%;\n     margin: 20px auto;\n     height: 300px;\n     color: black;\n }\nbutton {\n    color: white;\n    background-color: rgb(52, 74, 95);\n    border: 2px solid rgb(22, 44, 65);\n    box-shadow: 0px 2px 4px 1px rgba(0,0,0,0.10);\n    border-radius: 3px;\n    font-family: \'Open Sans\', sans-serif;\n}\n\ntextarea {\n    background-color: rgb(247, 254, 255);\n    font-family: \'Open Sans\', sans-serif;\n    padding: 5px;\n    border: 3px solid rgb(207, 214, 215);\n}\n\nselect {\n    padding: 7px;\n    border-radius: 3px;\n    margin: 10px;\n}\n\n/*Blogpost styling*/\n .userIcon {\n     width: 48px;\n     margin: 20px;\n     border-radius: 50%;\n     background-color: rgb(120, 120, 120);\n     display: inline-block;\n     float: left;\n }\n\n .editIcon {\n     width: 32px;\n     float: right;\n     cursor: hand;\n     border-radius: 5px;\n }\n\n .usernamePost {\n     margin: 20px;\n     padding-top: 10px;\n     display: inline-block\n }\n\n .postContent {\n     margin: 20px 70px;\n }\n\n .accountButton {\n     font-family: \'Open Sans\', sans-serif;\n     float: right;\n     height: 100%;\n }\n\n/*Login box styling*/\n .loginBox form input,  .loginBox form label {\n     display: block;\n     width: 80%;\n     margin: 10px auto; \n     padding: 5px;\n }\n\n.loginBox {\n    color: black;\n    background-color: white;\n    border-radius: 5px;\n    width: 400px;\n    height: 600px;\n    margin: 20px auto;\n    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.60);\n}\n\ntextarea {\n    width: 80%;\n}\n\n .centerText {\n     text-align: center;\n }\n\n .noDisplay {\n     display: none;\n }\n\n .backgroundFade {\n     left: 0;\n     top: 0;\n     opacity: 0.6;\n     position: absolute;\n     width: 100%;\n     height: 100%;\n     background-color: rgb(0, 0, 0);\n     z-index: 0;\n }\n\n .closeButton {\n    width: 25px;\n    float: right;\n    padding: 10px;\n    display: inline-block;\n }\n\n .modal {\n    position: absolute;\n    left: calc(50% - 250px);\n    top: calc(50vh - 150px);\n    width: 500px;\n    height: 300px;\n    background-color: white;\n    border-radius: 5px;\n    box-shadow: 0px 2px 8px 1px rgba(0,0,0,0.60);\n    text-align: center;\n }\n\n .modal button {\n     display: block;\n     margin: 0 auto;\n     width: 80%;\n }\n\n.addMessageContainer {\n    height: 150px;\n    width: 100%;\n    background-color: rgb(32, 54, 75);\'\n    margin: 0 auto;\n}\n\n.messageContainer {\n    width: 80%;\n    height: 100px;\n    resize: none;\n    margin: 20px;\n}\n\n.sendMessageButton {\n    float: right;\n    height: calc(100% - 20px);\n    margin: 10px 10px;\n    width: 10%;\n}\n\n .editIcon:hover {\n     background-color: rgb(230, 230, 230);\n }\n";

exports.reasonReactBlue = reasonReactBlue;
exports.style = style;
/* No side effect */
