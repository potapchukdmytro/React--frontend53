import "./App.css";
import ClassComponent from "./components/classComponent/ClassComponent";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Products from "./components/products/Products";
import Sidebar from "./components/sidebar/Sidebar";
import About from "./components/about/About";

function App() {
    return (
        <>
            {/* <ClassComponent /> */}
            <Navbar />
            <div className="container">
                <div className="layout-sidebar">
                    <Sidebar />
                </div>
                <div className="content-sidebar">
                    <Products />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default App;
