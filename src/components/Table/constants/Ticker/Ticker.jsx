import Button from "../../../Button/Button"
import ModalTicker from "./ModalTicker"
import './Ticker.css'

export default function Ticker({show, onHide}) {

    return (
        <section>
            <ModalTicker open={show} onHide={onHide}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, ducimus a quidem fugit suscipit praesentium explicabo consequuntur. Placeat architecto obcaecati quaerat quas, dolore soluta, qui sunt libero, voluptate tempora optio?</p>
                <Button onClick={onHide}>Х</Button>
            </ModalTicker>
        </section>
    )
}