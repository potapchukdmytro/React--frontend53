import {useState, useRef} from "react";

function DynamicTitle() {
    const [text, setText] = useState("Поки немає тексту");
    const inputRef = useRef(null);

    function ok() {
        setText(inputRef.current.value);
    }

    return (
        <div style={{textAlign: "center"}}>
            <h1>{text}</h1>
            <input ref={inputRef} />
            <button onClick={ok}>ok</button>
        </div>
    );
}

export default DynamicTitle;
