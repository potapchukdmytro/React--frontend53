import { useState, useEffect } from "react";
import BookCard from "../../components/cards/BookCard";
import booksJson from "./booksData.json";
import { CircularProgress, Pagination, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import Spiner from "../../components/spiner/Spiner";
import { useAction } from "../../components/hooks/useAction";
import AddIcon from "@mui/icons-material/Add";

function Books() {
    const [page, setPage] = useState(1);
    const { isLoaded, books, isLoading, pageCount } = useSelector(
        (state) => state.book,
    );
    const { loadBooks } = useAction();

    function paginationChangeHandler(event, value) {
        setPage(value);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    useEffect(() => {
        loadBooks(page);
    }, [page]);

    // Спінер
    if (isLoading) {
        return <Spiner />;
    }

    // Книги
    return (
        <>
            {isLoaded ? (
                <>
                    <div
                        style={{
                            margin: "16px 0px",
                            display: "grid",
                            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            gap: "10px",
                        }}
                    >
                        {books.map((book, index) => (
                            <BookCard key={index} book={book} />
                        ))}
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            margin: "40px 20px",
                        }}
                    >
                        <div
                            style={{
                                flexGrow: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <Pagination
                                color="warning"
                                page={page}
                                count={pageCount}
                                onChange={paginationChangeHandler}
                            />
                        </div>
                        <div style={{ flexGrow: 0 }}>
                            <IconButton>
                                <AddIcon />
                            </IconButton>
                        </div>
                    </div>
                </>
            ) : (
                <h2 style={{ textAlign: "center" }}>
                    Помилка під час отримання книг. Спробуйте пізніше
                </h2>
            )}
        </>
    );
}

export default Books;
