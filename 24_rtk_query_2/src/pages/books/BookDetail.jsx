import { IconButton, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ClearIcon from "@mui/icons-material/Clear";
import { Link, useNavigate, useParams } from "react-router";
import NotFound from "../notFound/NotFound";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import axios from "axios";
import Spiner from "../../components/spiner/Spiner";
import defaultImg from "./default.png";
import { toast } from "react-toastify";
import DeleteModal from "../../components/modals/DeleteModal";
import { useAction } from "./../../hooks/useAction";
import { api } from "../../api";
import {
    useDeleteBookMutation,
    useGetBookQuery,
} from "../../store/services/bookApi";
import { useDocumentTitle } from "../../hooks/useDocumentTitle";
import { Helmet } from "react-helmet-async";

function BookDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isFavorite, setIsFavorite] = useState(false);
    const [deleteBook] = useDeleteBookMutation();
    const { data, isLoading, isError, isSuccess } = useGetBookQuery(id);

    function switchFavorite() {
        const value = !isFavorite;
        setIsFavorite(value);
        if (value) {
            const localFavorite = localStorage.getItem("favorite");
            let items = [];
            if (localFavorite) {
                items = JSON.parse(localFavorite);
            }
            items.push(id);
            localStorage.setItem("favorite", JSON.stringify(items));
        } else {
            const localFavorite = localStorage.getItem("favorite");
            if (localFavorite) {
                const items = JSON.parse(localFavorite);
                const newItems = items.filter((i) => i != id);
                localStorage.setItem("favorite", JSON.stringify(newItems));
            }
        }
    }

    // delete book
    async function handleDeleteBok() {
        const res = await deleteBook(id);
        if (res.data.success) {
            toast.success("Книгу успішно видалено");
            navigate("/", { replace: true });
        } else {
            toast.error("Не вдалося видалити книгу");
        }
    }

    const notify = () => {
        toast(
            (props) => (
                <DeleteModal deleteCallback={handleDeleteBok} {...props} />
            ),
            {
                closeButton: false,
                ariaLabel: "Delete book",
                position: "bottom-center",
            },
        );
    };

    useEffect(() => {
        window.scrollTo(0, 0);

        const localData = localStorage.getItem("favorite");
        if (localData) {
            const items = JSON.parse(localData);
            if (items.some((i) => i == id)) {
                setIsFavorite(true);
            }
        }
    }, []);

    function imageError(event) {
        const img = event.target;
        img.src = defaultImg;
    }

    if (isLoading) {
        return <Spiner />;
    }

    if (isError) {
        navigate("/", { replace: true });
    }

    const book = data.payload;

    return (
        <div>
            {isSuccess && (
                <div
                    style={{
                        display: "flex",
                        padding: "16px 32px",
                        justifyContent: "center",
                    }}
                >
                    <Helmet>
                        <title>{`${book.title} ${book.author ? `- ${book.author.name}` : ""}`}</title>
                    </Helmet>
                    <div style={{ textAlign: "right" }}>
                        <img
                            src={book.image}
                            alt={book.title}
                            height="500px"
                            width="400px"
                            onError={imageError}
                            style={{
                                objectFit: "contain",
                                marginRight: "16px",
                            }}
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
                                <IconButton onClick={switchFavorite}>
                                    {isFavorite ? (
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
                        <h3>
                            Автор:{" "}
                            {book.author ? book.author.name : "Невідомий"}
                        </h3>
                        <p>
                            Рік публікації: <b>{book.publish_date}</b>
                        </p>
                        <p>
                            Сторінок: <b>{book.number_of_pages}</b>
                        </p>
                        <h3
                            style={{
                                fontWeight: "bold",
                                color: "orange",
                                fontSize: "1.4em",
                            }}
                        >
                            Ціна: {book.price} грн.
                        </h3>
                        <div
                            style={{ maxWidth: "400px", whiteSpace: "normal" }}
                        >
                            <p>{book.description}</p>
                        </div>
                        <div style={{ marginTop: "64px", textAlign: "right" }}>
                            <Link to={`/book/update/${id}`}>
                                <IconButton>
                                    <EditIcon
                                        fontSize="large"
                                        color="success"
                                    />
                                </IconButton>
                            </Link>
                            <IconButton onClick={notify}>
                                <DeleteIcon fontSize="large" color="error" />
                            </IconButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BookDetail;
