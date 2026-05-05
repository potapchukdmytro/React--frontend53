import "./App.css";
import Navbar from "./components/navbar/Navbar";
import ColoredBox from "./components/coloredBox/ColoredBox";

function App() {
    console.log("Component render");

    return (
        <>
            <Navbar />
            <ColoredBox/>
        </>
    );
}

export default App;
