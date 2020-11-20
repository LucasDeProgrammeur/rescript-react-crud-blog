'use strict';

var Sqlite3 = require("sqlite3");

function CreateDB($star) {
  var db = new Sqlite3.Database(":memory:");
  console.log("Console.log vanuit databasecreate");
  db.serialize(function (param) {
        db.run("CREATE TABLE lorem (info TEXT)");
        var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
        for(var i = 1; i <= 10; ++i){
          stmt.run("Ipsum ");
        }
        stmt.finalize();
        return db.each("SELECT rowid AS id, info FROM lorem", (function (err, row) {
                      console.log(row.id + ": " + row.info);
                      
                    }));
      });
  db.close();
  return {
          db: db
        };
}

exports.CreateDB = CreateDB;
/* sqlite3 Not a pure module */
