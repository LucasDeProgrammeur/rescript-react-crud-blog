@react.component
let make = () => {
  <a href="/">
  <header>
    <h1>{React.string("Rescript+React blog")}</h1>
    <SearchBox />
    <AccountButton />
  </header>
  </a>
}