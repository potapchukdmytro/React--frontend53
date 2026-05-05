import { Button } from "@mui/material";

function ColoredBox() {
    let boxColor = "lightCoral";

    function handleChangeColor() {
        boxColor = "red";
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
                <Button onClick={handleChangeColor} variant="contained" color="secondary">
                    Change color
                </Button>
            </div>
        </div>
    );
}

export default ColoredBox;
