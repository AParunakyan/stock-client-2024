import { createPortal } from "react-dom"

export default function ModalTicker({children, open}) {
    return createPortal(
        <dialog open={open}>{children}</dialog>,
        document.getElementById('modal')
    )
}