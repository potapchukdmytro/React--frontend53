import { IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import { useParams } from "react-router";
import NotFound from "../notFound/NotFound";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";

function BookDetail() {
    const [book, setBook] = useState(null);

    const { id } = useParams();
    window.scrollTo(0, 0);

    useEffect(() => {
        const booksLocal = localStorage.getItem("books");
        if (!booksLocal) {
            return <NotFound />;
        }

        const books = JSON.parse(booksLocal);
        const data = books.find((b) => b.id == id);

        if (!data) {
            return <NotFound />;
        }

        setBook(data);
    }, []);

    function switchIsFavorite() {
        const newFavorite = !book.isFavorite;
        setBook({...book, isFavorite: newFavorite});

        const booksJson = localStorage.getItem("books");
        if (booksJson) {
            let books = JSON.parse(booksJson);
            const index = books.findIndex((b) => b.id === book.id);
            if (index !== -1) {
                books[index].isFavorite = newFavorite;
                localStorage.setItem("books", JSON.stringify(books));
            }
        }
    }

    if (!book) {
        return (
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "50px",
                }}
            >
                <CircularProgress
                    size="3rem"
                    aria-label="Loading…"
                    color="warning"
                />
            </div>
        );
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    padding: "16px 32px",
                    justifyContent: "center",
                }}
            >
                <div style={{ textAlign: "right" }}>
                    <img
                        src={book.cover}
                        alt={book.title}
                        height="500px"
                        width="400px"
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div
                    style={{
                        textAlign: "start",
                        marginTop: "16px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
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
                        <div>
                            <IconButton onClick={switchIsFavorite}>
                                {book.isFavorite ? (
                                    <FavoriteIcon
                                        style={{ color: "pink" }}
                                        fontSize="large"
                                    />
                                ) : (
                                    <FavoriteBorderIcon
                                        style={{ color: "pink" }}
                                        fontSize="large"
                                    />
                                )}
                            </IconButton>
                        </div>
                    </div>
                    <h1>{book.title}</h1>
                    <h3>Автор: {book.author}</h3>
                    <h3
                        style={{
                            fontWeight: "bold",
                            color: "orange",
                            fontSize: "1.4em",
                        }}
                    >
                        Ціна: ${book.price}
                    </h3>
                    <div style={{ maxWidth: "400px", whiteSpace: "normal" }}>
                        <p>{book.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
