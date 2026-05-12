import BookCard from "../../components/cards/BookCard";
import books from "./booksData.json";
import { CircularProgress } from "@mui/material";

function Books() {
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
                    <BookCard key={index} book={book} />
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
