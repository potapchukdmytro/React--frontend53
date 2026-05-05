import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ColoredBox from "./components/coloredBox/ColoredBox";

function App() {
    console.log("App render");

    return (
        <>
            <Navbar />
            <ColoredBox/>
        </>
    );
}

export default App;
