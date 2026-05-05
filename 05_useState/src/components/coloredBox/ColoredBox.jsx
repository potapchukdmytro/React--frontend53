import { useState } from "react";
import { Button } from "@mui/material";

function ColoredBox() {
    // useState - повертає масив в якому 2 елементи
    // Перший це константа із значенням
    // Другий це функція для зміни значення константи
    const [boxColor, setBoxColor] = useState("lightCoral");
    console.log("Box render");

    function handleChangeColor() {
        const r = Math.floor(Math.random() * 256)
        const g = Math.floor(Math.random() * 256)
        const b = Math.floor(Math.random() * 256)

        setBoxColor(`rgb(${r}, ${g}, ${b})`);
    }

    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                margin: "20px 0px",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    display: "inline-block",
                    width: "200px",
                    height: "200px",
                    backgroundColor: boxColor,
                }}
            ></div>
            <div style={{ margin: "20px 0px" }}>
                <Button
                    onClick={handleChangeColor}
                    variant="contained"
                    color="secondary"
                >
                    Change color
                </Button>
            </div>
        </div>
    );
}

export default ColoredBox;
