import { IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./BookCard.css";
import { Link } from "react-router";

function BookCard({ book, setBooks }) {
    function removeBook() {
        const booksJson = localStorage.getItem("books");
        if (booksJson) {
            let books = JSON.parse(booksJson);
            books = books.filter((b) => b.id !== book.id);
            localStorage.setItem("books", JSON.stringify(books));
            setBooks(books);
        }
    }

    function switchIsFavorite() {
        const booksJson = localStorage.getItem("books");
        if (booksJson) {
            let books = JSON.parse(booksJson);
            const index = books.findIndex((b) => b.id === book.id);
            if (index !== -1) {
                books[index].isFavorite = !books[index].isFavorite;
                localStorage.setItem("books", JSON.stringify(books));
                setBooks(books);
            }
        }
    }

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
            <IconButton
                onClick={removeBook}
                style={{
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    zIndex: "10",
                }}
            >
                <ClearIcon color="error" />
            </IconButton>
            <div>
                <img
                    height="300px"
                    width="100%"
                    src={book.cover}
                    alt={book.title}
                    style={{ objectFit: "contain" }}
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
            <Link to={`book/${book.id}`} style={{textDecoration: "none"}}>
                <div
                    style={{
                        overflow: "hidden",
                        textAlign: "start",
                        fontWeight: "bold",
                        color: "white",
                        fontSize: "1.05em",
                        width: "100%",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    }}
                >
                    {book.title}
                </div>
            </Link>
            <div style={{ textAlign: "start", fontSize: "0.7em" }}>
                {book.author}
            </div>
            <div style={{ display: "flex" }}>
                <div>
                    <IconButton onClick={switchIsFavorite}>
                        {book.isFavorite ? (
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
                    ${book.price}
                </div>
            </div>
        </div>
    );
}

export default BookCard;
