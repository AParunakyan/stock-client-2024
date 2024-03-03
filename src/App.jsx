import { useState } from "react"
import ButtonSection from "./components/ButtonSection/ButtonSection"
import Header from "./components/Header/Header"

function App() {
  const [tab, setTab] = useState('sellers')

  return (
    <div>
      <Header />
      <main>
        <ButtonSection active={tab} onChange={(current) => setTab(current)}/>

        {tab == 'buyers' && (
          <>
            <p>Здесь покупают</p>
            {/* <TableBuy /> */}
          </>
        )}
        {tab == 'sellers' && (
          <>
            <p>Здесь продают</p>
            {/* <TableSell /> */}
          </>
        )}
      </main>
    </div>
  )
}

export default App
