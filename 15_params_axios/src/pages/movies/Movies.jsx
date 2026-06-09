import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import MovieCard from "../../components/cards/MovieCard";
import { Link } from "react-router";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState("ring");

    async function fetchMovies() {
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

    function searchSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const searchValue = form["search"].value;
        setSearch(searchValue);
    }

    useEffect(() => {
        fetchMovies();
    }, [search]);

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
            <div style={{ width: "50%", margin: "0px auto" }}>
                <Paper
                    component="form"
                    onSubmit={searchSubmit}
                    sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "16px",
                    }}
                >
                    <InputBase
                        name="search"
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Movie"
                        inputProps={{ "aria-label": "search google maps" }}
                    />
                    <IconButton
                        type="submit"
                        sx={{ p: "10px" }}
                        aria-label="search"
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div
                style={{
                    margin: "16px 0px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
                    gap: "10px",
                }}
            >
                {movies.map((movie) => (
                    <Link key={movie.imdbID} to={`/movie/${movie.imdbID}`}>
                        <MovieCard movie={movie} />
                    </Link>
                ))}
            </div>
        </>
    );
}

export default Movies;
