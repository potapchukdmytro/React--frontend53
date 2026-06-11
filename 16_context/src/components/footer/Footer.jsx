import { Link } from "react-router";

function Footer() {
    return (
        <div style={{ borderTop: "1px solid #585858", padding: "32px 16px" }}>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <Link to="/">Головна</Link>
                <Link to="/weather">Погода</Link>
                <Link to="/news">Новини</Link>
                <Link to="/cats">Фото котиків</Link>
            </div>
            <div style={{ marginTop: "64px" }}>
                <span>© 2021 - {new Date().getFullYear()}</span>
            </div>
        </div>
    );
}

export default Footer;
