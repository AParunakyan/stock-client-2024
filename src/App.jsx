import Header from "./components/Header/Header"
import Ticker from "./components/Table/constants/Ticker/Ticker"
import JsonFetcher from "./components/Table/constants/check"
import Button from "./components/Button/Button"

function App() {

  return (
    <div>
      <Header />
      <main>
        <Button onClick={Ticker}>+</Button>
        
        <JsonFetcher url={'https://bff8169f-cc02-4e03-9ac6-7636f7981f07.mock.pstmn.io/mo'} />
      </main>
    </div>
  )
}

export default App
