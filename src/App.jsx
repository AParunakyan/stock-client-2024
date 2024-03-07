import Header from "./components/Header/Header"
import Ticker from "./components/Ticker/Ticker"
import JsonFetcher from "./components/Table/check"

function App() {

  return (
    <div>
      <Header />
      <main>
        <Ticker />
        <JsonFetcher url={'https://bff8169f-cc02-4e03-9ac6-7636f7981f07.mock.pstmn.io/mo'} />
      </main>
    </div>
  )
}

export default App
