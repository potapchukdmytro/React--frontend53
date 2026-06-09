import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import MovieCard from "../../components/cards/MovieCard";

function Movies() {
    const [movies, setMovies] = useState([]);

    async function fetchMovies() {
        const search = "sinister";
        const key = "6126fcdb";
        const url = `http://www.omdbapi.com/?apikey=${key}&s=${search}`;

        try {
            const response = await axios.get(url);
            const { data } = response;
            setMovies(data.Search);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchMovies();
    }, []);

    if (!movies || movies.length === 0) {
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
        <>
            <div
                style={{
                    margin: "16px 0px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: "10px",
                }}
            >
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie}/>
                ))}
            </div>
        </>
    );
}

export default Movies;
