import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import "./BookCard.css";

function BookCard() {
    return (
        <div
            className="book-card-hover"
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "12px",
                boxShadow: "0px 0px 1px white"
            }}
        >
            <div>
                <img
                    height="300px"
                    width="100%"
                    src="https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg"
                    alt="Atomic Habits"
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div>
                <Rating
                    defaultValue={2}
                    precision={0.5}
                    max={5}
                    readOnly
                    icon={
                        <StarIcon
                            style={{ color: "gold" }}
                            fontSize="inherit"
                        />
                    }
                    emptyIcon={
                        <StarIcon
                            style={{ color: "#505050" }}
                            fontSize="inherit"
                        />
                    }
                />
            </div>
            <div
                style={{
                    overflow: "hidden",
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "1.05em",
                    width: "100%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                Atomic Habits
            </div>
            <div style={{ textAlign: "start", fontSize: "0.7em" }}>
                James Clear
            </div>
            <div
                style={{
                    textAlign: "end",
                    fontWeight: "bold",
                    color: "orange",
                    fontSize: "1.4em",
                }}
            >
                $18.99
            </div>
        </div>
    );
}

export default BookCard;
