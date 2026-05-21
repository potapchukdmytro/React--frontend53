import { useState, useEffect } from "react";
import BookCard from "../../components/cards/BookCard";
import booksJson from "./booksData.json";
import { CircularProgress } from "@mui/material";

function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const localBooks = localStorage.getItem("books");

        if(localBooks) {
            setBooks(JSON.parse(localBooks));
        } else {
            setBooks(booksJson);
            localStorage.setItem("books", JSON.stringify(booksJson));
        }
    }, []);

    // Спінер
    if (books.length === 0) {
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
            <div
                style={{
                    margin: "16px 0px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: "10px",
                }}
            >
                {books.map((book, index) => (
                    <BookCard key={index} book={book} setBooks={setBooks} />
                ))}
            </div>
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
