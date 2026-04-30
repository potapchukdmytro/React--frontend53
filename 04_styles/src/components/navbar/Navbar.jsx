import { navbarStyle, linkStyle } from "./style";
import "./Navbar.css";

function Navbar() {
    return (
        <div style={navbarStyle}>
            <div style={{ display: "flex", width: "75%" }}>
                <a className="nav-link" style={linkStyle}>Головна</a>
                <a className="nav-link" style={linkStyle}>Каталог</a>
                <a className="nav-link" style={linkStyle}>Про нас</a>
                <a className="nav-link" style={linkStyle}>Контакти</a>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "25%",
                }}
            >
                <a className="nav-link">Увійти</a>
                <a className="nav-link">Зареєструватися</a>
            </div>
        </div>
    );
}

export default Navbar;
