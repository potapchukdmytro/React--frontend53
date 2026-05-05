import { useState } from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function ColoredBox() {
    // useState - повертає масив в якому 2 елементи
    // Перший це константа із значенням
    // Другий це функція для зміни значення константи
    const [boxColor, setBoxColor] = useState("lightCoral");
    const [boxWidth, setBoxWidth] = useState(200);
    console.log("Box render");

    function addWidth() {
        setBoxWidth((prev) => prev + 10);
    }

    function reduceWidth() {
        setBoxWidth((prev) => prev <= 10 ? prev : prev - 10);
    }

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
                    width: `${boxWidth}px`,
                    height: "200px",
                    backgroundColor: boxColor,
                }}
            ></div>
            <div style={{ margin: "20px 0px" }}>
                <IconButton onClick={reduceWidth}>
                    <RemoveCircleIcon/>
                </IconButton>
                <Button
                    onClick={handleChangeColor}
                    variant="contained"
                    color="secondary"
                >
                    Change color
                </Button>
                <IconButton onClick={addWidth}>
                    <AddCircleIcon/>
                </IconButton>
            </div>
        </div>
    );
}

export default ColoredBox;
