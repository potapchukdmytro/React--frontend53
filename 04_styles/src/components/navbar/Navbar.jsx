import { navbarStyle, linkStyle } from "./style";
import "./Navbar.css";

function Navbar() {
    return (
        <div style={navbarStyle}>
            <div style={{ display: "flex", width: "75%" }}>
                <a href="/" className="nav-link" style={linkStyle}>Головна</a>
                <a href="/catalog" className="nav-link" style={linkStyle}>Каталог</a>
                <a href="/about" className="nav-link" style={linkStyle}>Про нас</a>
                <a href="/contacts" className="nav-link" style={linkStyle}>Контакти</a>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    width: "25%",
                }}
            >
                <a href="/login" style={linkStyle} className="nav-link">Увійти</a>
                <a href="/register" style={linkStyle} className="nav-link">Зареєструватися</a>
            </div>
        </div>
    );
}

export default Navbar;
