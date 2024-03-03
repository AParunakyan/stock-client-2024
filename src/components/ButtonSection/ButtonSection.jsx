import { useState } from 'react'
import Button from '../Button/Button'

export default function ButtonSection({active, onChange}) {
    const [category, setCategory] = useState(null)

    return (
        <section>
            <Button isActive={active == 'buyers'} onClick={() => onChange('buyers')}>Buy</Button>
            <Button isActive={active == 'sellers'} onClick={() => onChange('sellers')}>Sell</Button>
        </section>
    )
}