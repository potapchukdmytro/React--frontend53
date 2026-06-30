import { IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate, useParams } from "react-router";
import NotFound from "../notFound/NotFound";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Spiner from "../../components/spiner/Spiner";
import defaultImg from "./default.png";

function BookDetail() {
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    const { id } = useParams();

    async function fetchBook() {
        const url = `https://frontend53.somee.com/api/books/${id}`;

        try {
            const response = await axios.get(url);
            const { data } = response;
            setBook(data.payload);
        } catch (error) {
            navigate(-1, { replace: true });
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0);

        fetchBook();
    }, []);

    function imageError(event) {
        const img = event.target;
        img.src = defaultImg;
    }

    if (!book) {
        return <Spiner />;
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
                        src={book.image}
                        alt={book.title}
                        height="500px"
                        width="400px"
                        onError={imageError}
                        style={{ objectFit: "contain", marginRight: "16px" }}
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
                            {/* <IconButton onClick={switchIsFavorite}>
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
                            </IconButton> */}
                            <FavoriteBorderIcon
                                style={{ color: "pink" }}
                                fontSize="large"
                            />
                        </div>
                    </div>
                    <h1>{book.title}</h1>
                    <h3>Автор: {book.author ? book.author.name : "Невідомий"}</h3>
                    <p>Рік публікації: <b>{book.publish_date}</b></p>
                    <p>Сторінок: <b>{book.number_of_pages}</b></p>
                    <h3
                        style={{
                            fontWeight: "bold",
                            color: "orange",
                            fontSize: "1.4em",
                        }}
                    >
                        Ціна: {book.price} грн.
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
