module CreateDB = {
  @bs.new @bs.module("sqlite3") external database: string => 't = "Database"
  let initDb = () => {
    let db = database(":memory:")

    Js.log("Console.log vanuit databasecreate")

    db["serialize"](() => {
      db["run"]("CREATE TABLE lorem (info TEXT)")

      let stmt = db["prepare"]("INSERT INTO lorem VALUES (?)")
      for i in 1 to 10 {
        stmt["run"]("Ipsum ")
      }
      stmt["finalize"]()

      db["each"]("SELECT rowid AS id, info FROM lorem", (err, row) => {
        Js.log(row["id"] ++ ": " ++ row["info"])
      })
    })

    db["close"]()
  }
}
