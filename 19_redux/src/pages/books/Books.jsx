import { useState, useEffect } from "react";
import BookCard from "../../components/cards/BookCard";
import booksJson from "./booksData.json";
import { CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function Books() {
    const { isLoaded, books, isLoading } = useSelector((state) => state.book);
    const dispatch = useDispatch();

    async function fetchBooks() {
        const url = "https://frontend53.somee.com/api/books";

        dispatch({ type: "loading_books" });

        try {
            const response = await axios.get(url);
            const { data } = response;

            dispatch({
                type: "get_books_success",
                payload: data.payload.items,
            });
        } catch (error) {
            dispatch({ type: "get_books_error" });
        }
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    // Спінер
    if (isLoading) {
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

    // Книги
    return (
        <>
            {isLoaded ? (
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
            ) : (
                <h2 style={{ textAlign: "center" }}>
                    Помилка під час отримання книг. Спробуйте пізніше
                </h2>
            )}
        </>
    );
}

// function Books() {
//     return (
//         <>
//             {books.length === 0 ? (
//                 // спінер
//                 <div
//                     style={{
//                         display: "flex",
//                         justifyContent: "center",
//                         marginTop: "50px",
//                     }}
//                 >
//                     <CircularProgress
//                         size="3rem"
//                         aria-label="Loading…"
//                         color="warning"
//                     />
//                 </div>
//             ) : (
//                 // книги
//                 <div
//                     style={{
//                         margin: "16px 0px",
//                         display: "grid",
//                         gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
//                         gap: "10px",
//                     }}
//                 >
//                     {books.map((book, index) => (
//                         <BookCard key={index} book={book} />
//                     ))}
//                 </div>
//             )}
//         </>
//     );
// }

export default Books;
