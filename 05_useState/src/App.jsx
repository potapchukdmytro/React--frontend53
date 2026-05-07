import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import ColoredBox from "./components/coloredBox/ColoredBox";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./theming/themes";
import Counter from "./components/counter/Counter";
import CounterRef from "./components/counter/CounterRef";
import DynamicTitle from "./components/dynamicTitle/DynamicTitle";
import PersonInfo from "./components/personInfo/PersonInfo";

function App() {
    const [isDark, setIsDark] = useState(false);

    function changeTheme() {
        setIsDark((prev) => !prev);
    }

    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            <CssBaseline />
            <Navbar switchTheme={changeTheme} isDark={isDark} />
            {/* <ColoredBox /> */}
            {/* <Counter/> */}
            {/* <CounterRef /> */}
            {/* <DynamicTitle/> */}
            <PersonInfo/>
        </ThemeProvider>
    );
}

export default App;
