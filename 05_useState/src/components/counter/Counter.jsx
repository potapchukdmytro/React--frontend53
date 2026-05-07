import { Button } from "@mui/material";
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    console.log("Render counter");

    function incrementCounter() {
        setCount((prev) => prev + 1);
    }
    
    return (
        <div style={{textAlign: "center"}}>
            <h1>{count}</h1>
            <Button onClick={incrementCounter} variant="contained">+1</Button>
        </div>
    );
}

export default Counter;
