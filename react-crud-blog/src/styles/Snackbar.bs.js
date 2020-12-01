'use strict';


var style = "\n.snackbar {\n  display: inline-block;\n  position: fixed;\n  background: #323232;\n  color: #f1f1f1;\n  min-height: 50px;\n  min-width: 290px;\n  padding: 16px 24px 12px;\n  box-sizing: border-box;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  border-radius: 2px;\n  bottom: 1rem;\n  left: 1rem;\n  font-size: 90%;\n  transition: visibility 0.3s, transform 0.3s;\n  transform: translateY(100px);\n  visibility: hidden;\n  will-change: transform;\n  z-index: 1;\n}\n\n.snackbar--visible {\n  visibility: visible;\n  transform: none;\n}\n";

exports.style = style;
/* No side effect */
