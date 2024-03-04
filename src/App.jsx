import { useState } from "react"
import ButtonSection from "./components/ButtonSection/ButtonSection"
import Header from "./components/Header/Header"
import TableBuy from "./components/Table/components/TableBuy"
import TableSale from "./components/Table/components/TableSale"

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
            <TableBuy />
          </>
        )}
        {tab == 'sellers' && (
          <>
            <p>Здесь продают</p>
            <TableSale />
          </>
        )}
      </main>
    </div>
  )
}

export default App
