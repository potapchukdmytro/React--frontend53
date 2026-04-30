import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { CustomButton } from "./components/buttons/Buttons";

function App() {
    return (
        <>
            <Navbar />

            <div>
                <CustomButton text="Преміум" />
                <CustomButton text="Залишити відгук" backgroundColor="lightGreen" />
                <CustomButton text="Оплатити" fontSize="24px" backgroundColor="red" color="white" borderRadius="15px" />
            </div>
        </>
    );
}

export default App;
