import { useState } from "react"

export default function Header () {
    const [time, setTime] = useState(new Date())

    setInterval(() => setTime(new Date()), 1000)

    return (
        <header>
            <h3>Buy&Sell</h3>

            <span>{time.toLocaleTimeString()}</span>
        </header>
    )
}