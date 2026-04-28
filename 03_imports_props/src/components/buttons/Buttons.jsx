import "./Buttons.css";

// children - зарезервоване слово. Приймає елементи які знаходяться між тегами

export function ButtonCircle({children}) {
    return (
        <button className="btn-circle">{children}</button>
    )
}

export function ButtonRectangle({children}) {
    return (
        <button className="btn-rectangle">{children}</button>
    )
}

export function ButtonPremium({text}) {
    return (
        <button className="btn-premium">{text}</button>
    )
}