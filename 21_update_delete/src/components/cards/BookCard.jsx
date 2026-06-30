import { IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./BookCard.css";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function BookCard({ book }) {
    const [isFavorite, setIsFavorite] = useState(false);

    function imageError(event) {
        const img = event.target;
        img.src =
            "https://apuedge.com/wp-content/uploads/READ-book-club-Smithsonian-Kannady.jpg";
    }

    function switchFavorite() {
        const value = !isFavorite;
        setIsFavorite(value);
        if (value) {
            const localFavorite = localStorage.getItem("favorite");
            let items = [];
            if (localFavorite) {
                items = JSON.parse(localFavorite);
            }
            items.push(book.id);
            localStorage.setItem("favorite", JSON.stringify(items));
        } else {
            const localFavorite = localStorage.getItem("favorite");
            if (localFavorite) {
                const items = JSON.parse(localFavorite);
                const newItems = items.filter((i) => i != book.id);
                localStorage.setItem("favorite", JSON.stringify(newItems));
            }
        }
    }

    useEffect(() => {
        const localData = localStorage.getItem("favorite");
        if (localData) {
            const items = JSON.parse(localData);
            if (items.some((i) => i == book.id)) {
                setIsFavorite(true);
            }
        }
    }, []);

    return (
        <div
            className="book-card-hover"
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "12px",
                boxShadow: "0px 0px 1px white",
                position: "relative",
            }}
        >
            <div>
                <img
                    height="300px"
                    width="100%"
                    src={book.image}
                    alt={book.title}
                    style={{ objectFit: "contain" }}
                    onError={imageError}
                />
            </div>
            <div>
                <Rating
                    value={book.rating}
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
            <Link to={`book/${book.id}`} style={{ textDecoration: "none" }}>
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
                    {book.title}
                </div>
            </Link>
            <div style={{ textAlign: "start", fontSize: "0.7em" }}>
                {book.author ? book.author.name : "Невідомий"}
            </div>
            <div style={{ display: "flex" }}>
                <div>
                    <IconButton onClick={switchFavorite}>
                        {isFavorite ? (
                            <FavoriteIcon style={{ color: "pink" }} />
                        ) : (
                            <FavoriteBorderIcon style={{ color: "pink" }} />
                        )}
                    </IconButton>
                </div>
                <div
                    style={{
                        flexGrow: 1,
                        textAlign: "end",
                        fontWeight: "bold",
                        color: "orange",
                        fontSize: "1.4em",
                    }}
                >
                    {book.price} грн.
                </div>
            </div>
        </div>
    );
}

export default BookCard;
