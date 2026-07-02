import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CircularProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import testImage from "./image.png";
import "./Movies.css";

function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const { imdbId } = useParams();

    async function fetchMovie() {
        const key = "6126fcdb";
        const url = `https://www.omdbapi.com/?apikey=${key}&i=${imdbId}`;

        try {
            const response = await axios.get(url);
            const { data } = response;
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovie();
    }, []);

    function formatMovieTime(time) {
        if (time === "N/A") {
            return "N/A";
        }

        const totalMinutes = parseInt(time.split(" ")[0]);
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;

        if (hours > 0) {
            return `${hours}h ${minutes}m`;
        } else {
            return `${minutes}m`;
        }
    }

    if (!movie) {
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
        <div style={{ padding: "12px 36px" }}>
            <div style={{ display: "flex" }}>
                <div style={{ flexGrow: 1, textAlign: "start" }}>
                    <h2 style={{ fontSize: "2em" }}>{movie.Title}</h2>
                    <span style={{ fontSize: "0.9em", fontWeight: "500" }}>
                        {movie.Year} • {movie.Rated} •{" "}
                        {formatMovieTime(movie.Runtime)}
                    </span>
                </div>
                <div style={{ display: "flex" }}>
                    <div style={{ margin: "0px 18px", textAlign: "start" }}>
                        <span style={{ fontSize: "0.9em", fontWeight: "600" }}>
                            IMDb RATING
                        </span>
                        <br />
                        <StarIcon color="warning" />
                        <span
                            style={{
                                fontWeight: "600",
                                verticalAlign: "top",
                                margin: "6px",
                            }}
                        >
                            {movie.Ratings[0].Value}
                        </span>
                    </div>
                    <div style={{ margin: "0px 18px", textAlign: "start" }}>
                        <span style={{ fontSize: "0.9em", fontWeight: "600" }}>
                            Metacritic
                        </span>
                        <br />
                        <StarIcon color="warning" />
                        <span
                            style={{
                                fontWeight: "600",
                                verticalAlign: "top",
                                margin: "6px",
                            }}
                        >
                            {movie.Ratings[2] ? movie.Ratings[2].Value : "0/0"}
                        </span>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", padding: "24px 0px" }}>
                <img
                    width={300}
                    height={450}
                    src={movie.Poster}
                    style={{ margin: "0px 3px", borderRadius: "10px" }}
                />
                <div>
                    <img
                        src={testImage}
                        width="100%"
                        height="100%"
                        style={{ margin: "0px 3px", borderRadius: "10px" }}
                    />
                </div>
            </div>
            <div style={{ width: "70%", textAlign: "start", color: "white" }}>
                {/* genres */}
                <div style={{ display: "flex" }}>
                    {movie.Genre.split(", ").map((genre) => (
                        <div key={genre} className="genre-tag">
                            {genre}
                        </div>
                    ))}
                </div>
                {/* plot */}
                <div>
                    <span style={{ fontWeight: "400" }}>{movie.Plot}</span>
                </div>
                <div style={{ fontWeight: "500" }}>
                    {/* director */}
                    <hr
                        style={{
                            height: "1px",
                            background: "#818181",
                            border: "none",
                        }}
                    />
                    Director{" "}
                    <span style={{ color: "rgb(87, 153, 239)" }}>
                        {movie.Director}
                    </span>
                    {/* writer */}
                    <hr
                        style={{
                            height: "1px",
                            background: "#818181",
                            border: "none",
                        }}
                    />
                    Writer{" "}
                    <span style={{ color: "rgb(87, 153, 239)" }}>
                        {movie.Writer}
                    </span>
                    {/* actors */}
                    <hr
                        style={{
                            height: "1px",
                            background: "#818181",
                            border: "none",
                        }}
                    />
                    Actors{" "}
                    <span style={{ color: "rgb(87, 153, 239)" }}>
                        {movie.Actors}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default MovieDetail;
