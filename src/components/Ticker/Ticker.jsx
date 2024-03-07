import { useState } from "react"
import Button from "../Button/Button"
import ModalTicker from "./ModalTicker"
import './Ticker.css'

export default function Ticker() {
    const [modal, setModal] = useState(false)
    const [inputText, setInputText] = useState('Объем заявки: ');

    const handleChange = (event) => {
        setInputText(event.target.value);
      };
    
    const handleFocus = () => {
        if (inputText === 'Объем заявки: ') {
          setInputText('');
        }
      };

    const handleBlur = () => {
        if (inputText === '') {
          setInputText('Объем заявки: ');
        }
      };

    function openModal() {
        setModal(true)
    }

    return (
        <section>
            <div style={{textAlign: "right",}}>
                <Button onClick={openModal}>+</Button>
            </div>

            <ModalTicker open={modal}>
                    <div style={{textAlign: "right",}}>
                        <button className="button close" onClick={() => setModal(false)}>x</button>
                    </div>
                <form>
                    <select id="instrument" className="control">
                        <option value="CNH/RUB">CNH/RUB</option>
                        <option value="EUR/RUB">EUR/RUB</option>
                        <option value="EUR/USD">EUR/USD</option>
                        <option value="USD/RUB">USD/RUB</option>
                        <option value="TRY/RUB">TRY/RUB</option>
                        <option value="BYN/RUB">BYN/RUB</option>
                    </select>
                    <input 
                        type="text" 
                        id="amount" 
                        value={inputText} 
                        onChange={handleChange} 
                        onFocus={handleFocus} 
                        onBlur={handleBlur}
                        style={inputText === 'Объем заявки: ' ? {color: 'gray'} : {color: 'black'}} 
                        className="control"
                    />
                    <section className="choice">
                        <section className="items">
                            <h3>8.977$</h3>
                            <Button>BUY</Button>
                        </section>
                        <section className="items">
                            <h3>8.975$</h3>
                            <Button>SELL</Button>
                        </section>
                    </section>
                </form>
            </ModalTicker>
        </section>
    )
}