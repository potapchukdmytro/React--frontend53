import "./BookCard.css";
import noImage from "./noimage.png";

function MovieCard({ movie }) {
    function translate(text) {
        if(text === "movie") {
            return "фільм"
        } else if(text === "series") {
            return "серія"
        } else if(text === "episode") {
            return "епізод"
        } else {
            return "невідомий"
        }
    }

    function posterError(event) {
        const img = event.target;
        img.src = noImage;
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
            <div>
                <img
                    height="300px"
                    width="100%"
                    src={movie.Poster}
                    alt={movie.Title}
                    style={{ objectFit: "contain" }}
                    onError={posterError}
                />
            </div>
            <div
                style={{
                    overflow: "hidden",
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "1.05em",
                    padding: "6px 12px",
                    width: "100%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                {movie.Title}
            </div>
            <div
                style={{
                    textAlign: "start",
                    padding: "0px 8px 8px 8px",
                    fontSize: "0.95em",
                    padding: "6px 12px"
                }}
            >
                Рік випуску: <span style={{fontWeight: "bold", color: "white"}}>{movie.Year}</span>
            </div>
            <div
                style={{
                    textAlign: "start",
                    color: "orange",
                    padding: "0px 8px 8px 8px",
                    fontSize: "0.95em",
                    padding: "6px 12px"
                }}
            >
                [{translate(movie.Type)}]
            </div>
        </div>
    );
}

export default MovieCard;
