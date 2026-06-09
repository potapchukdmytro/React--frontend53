import { Link } from "react-router";
import "./Navbar.css";

function Navbar() {
    return (
        <div
            style={{
                backgroundColor: "#aa3bff1a",
                padding: "10px 50px",
                height: "60px",
                borderBottom: "1px solid #585858",
                display: "flex",
                alignItems: "center",
                marginBottom: "12px"
            }}>
                <div style={{ display: "flex", gap: "20px", flexGrow: 1 }}>
                    <Link to="/" className="nav-link">Книги</Link>
                    <Link to="/weather" className="nav-link">Погода</Link>
                    <Link to="/news" className="nav-link">Новини</Link>
                    <Link to="/cats" className="nav-link">Фото котиків</Link>
                    <Link to="/movies" className="nav-link">Фільми</Link>
                </div>
                <div>
                    <Link to="/login" className="nav-link">Увійти</Link>
                </div>
        </div>
    );
}

export default Navbar;
