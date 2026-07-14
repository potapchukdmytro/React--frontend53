import { useState, useEffect } from "react";
import BookCard from "../../components/cards/BookCard";
import booksJson from "./booksData.json";
import { CircularProgress, Pagination, IconButton } from "@mui/material";
import Spiner from "../../components/spiner/Spiner";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router";
import { useGetBooksQuery } from "../../store/services/bookApi";
import { Helmet } from "react-helmet-async";

function Books() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isSuccess, isError } = useGetBooksQuery({page: page, page_size: 20});

    function paginationChangeHandler(event, value) {
        setPage(value);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    // Спінер
    if (isLoading) {
        return <Spiner />;
    }

    if (isError) {
        return (
            <h2 style={{ textAlign: "center" }}>
                Помилка під час отримання книг. Спробуйте пізніше
            </h2>
        );
    }

    // Книги
    return (
        <>
            {isSuccess && (
                <>
                    <Helmet>
                        <title>Каталог книг</title>
                        <meta name="description" content="Книги по доступній ціні"></meta>
                    </Helmet>
                    <div
                        style={{
                            margin: "16px 0px",
                            display: "grid",
                            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                            gap: "10px",
                        }}
                    >
                        {data.payload.items.map((book, index) => (
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
                                count={data.payload.total_pages}
                                onChange={paginationChangeHandler}
                            />
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Books;
