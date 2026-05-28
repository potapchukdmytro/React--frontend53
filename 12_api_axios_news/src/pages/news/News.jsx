import { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import ArticleCard from "../../components/cards/ArticleCard";
import axios from "axios";

function News() {
    const [news, setNews] = useState([]);

    async function fetchNews() {
        const key = "eef038525fa7401d8dfe7cf1a9006b10";
        const url = `https://newsapi.org/v2/everything?apiKey=${key}&q=it`;

        try {
            const response = await axios.get(url);
            const {data} = response;
            setNews(data.articles);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);

    // Спінер
    if (news.length === 0) {
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
                    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                    gap: "10px",
                }}
            >
                {news.map((article, index) => (
                    <ArticleCard article={article} key={index} />
                ))}
            </div>
        </>
    );
}

export default News;
