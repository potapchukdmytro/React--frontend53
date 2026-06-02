import "./App.css";
import { useState, useEffect } from "react";
import Books from "./pages/books/Books";
import LocalStorageTemplate from "./components/localStorage/LocalStorageTemplate";
import CatsPage from "./pages/catsPage/CatsPage";
import Weather from "./pages/weather/Weather";
import News from "./pages/news/News";

function App() {
    // const [counter, setCounter] = useState(0);

    // console.log("Render component");

    // useEffect - хук який виконує код в середині тільки один раз при першому рендері
    // useEffect(func, dependencyList);

    // useEffect(() => {
    //   setCounter((prev) => prev + 1)
    // }, []);

    return (
        <>
            {/* <Books/> */}
            {/* <LocalStorageTemplate/> */}
            {/* <CatsPage /> */}
            {/* <Weather/> */}
            {/* <News /> */}
        </>
    );
}

export default App;
