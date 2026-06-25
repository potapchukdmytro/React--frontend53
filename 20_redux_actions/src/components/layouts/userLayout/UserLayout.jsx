import Footer from "../../footer/Footer";
import Navbar from "../../navbar/Navbar";
import { Outlet } from "react-router";

function UserLayout() {
    return (
        <>
            <Navbar />
            <div style={{minHeight: "100vh"}}>
                {/* Динамічний компонент який рендерить один із компонентів з routes що відповідає вказаному маршруту */}
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default UserLayout;
