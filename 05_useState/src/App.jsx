import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import ColoredBox from "./components/coloredBox/ColoredBox";
import { Button, createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const lightTheme = createTheme();
const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    const [isDark, setIsDark] = useState(false);
    console.log("App render");

    const btnThemeText = `Включити ${isDark ? "світлу" : "темну"} тему`;

    function changeTheme() {
        setIsDark((prev) => !prev);
    }

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navbar />
            <ColoredBox />
            <div style={{ textAlign: "center" }}>
                <Button color={isDark ? "success" : "info"} onClick={changeTheme} variant="contained">
                    {btnThemeText}
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default App;
