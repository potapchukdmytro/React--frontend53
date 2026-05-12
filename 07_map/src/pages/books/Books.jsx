import BookCard from "../../components/cards/BookCard";

function Books() {
    return (
        <div
            style={{
                marginTop: "16px",
                display: "grid",
                gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                gap: "10px"
            }}
        >
            <BookCard />
        </div>
    );
}

export default Books;
