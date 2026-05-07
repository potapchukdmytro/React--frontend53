import { Button } from "@mui/material";
import { useRef } from "react";

function CounterRef() {
    // useRef - зберігає значення поза компонентом. Але на відміну від useState при зміні значення не викликає ренденр компоненту

    const countRef = useRef(0);

    console.log("Render counter");

    function incrementCounter() {
        countRef.current++;
        console.log(countRef.current);
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>{countRef.current}</h1>
            <Button onClick={incrementCounter} variant="contained">
                +1
            </Button>
        </div>
    );
}

export default CounterRef;
