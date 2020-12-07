@react.component
let make = () => {
  <header>
    <a href="/"> <h1> {React.string("Rescript+React blog")} </h1> </a>
    <SearchBox />
    <AccountButton />
  </header>
}
