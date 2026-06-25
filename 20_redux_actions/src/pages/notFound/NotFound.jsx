import robotImg from "./994cbc4e-928b-4e6b-83ac-e0d52babf92e.png";
import { Link } from "react-router";

function NotFound() {
    return (
        <div style={{ padding: "32px" }}>
            <h1>404 page not found</h1>
            <img height="300px" src={robotImg} alt="404 Not Found" />
            <div style={{ padding: "16px" }}>
                <Link to="/">
                    <button
                        style={{
                            fontSize: "1.5em",
                            padding: "16px 32px",
                            fontWeight: "bold",
                            border: "none",
                            cursor: "pointer",
                            backgroundColor: "#aa3bff1a",
                            borderRadius: "10px",
                            boxShadow: "1px 1px 10px grey",
                            color: "#c5c5c5",
                        }}
                    >
                        На головну
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;
