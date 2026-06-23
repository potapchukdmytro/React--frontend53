import { useEffect, useState } from "react";
import { CircularProgress, Pagination } from "@mui/material";
import ArticleCard from "../../components/cards/ArticleCard";
import axios from "axios";
import { env } from "../../env";

function News() {
    const [news, setNews] = useState([]);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);

    function changePage(event, value) {
        // scroll to top
        window.scrollTo({top: 0, behavior: "smooth"});
        setPage(value);
    }

    async function fetchNews() {
        const key = env.newsKey;
        const q = "Технології";
        const lang = "uk";
        const pageSize = "15";
        const url = `https://newsapi.org/v2/everything?apiKey=${key}&q=${q}&language=${lang}&page=${page}&pageSize=${pageSize}`;

        try {
            const response = await axios.get(url);
            const {data} = response;
            
            // Заукруглення
            // Math.ceil();  - до більшого цілого
            // Math.round(); - (>= 0.5 до більшого цілого) (< 0.5 до меншого цілого)
            // Math.floor(); - до меншого цілого
            
            const pageCount = Math.ceil(data.totalResults / pageSize);
            setCount(pageCount);
            setNews(data.articles);
        } catch (error) {
            console.log(error);
        }
    }

    // [] - масив змінних від яких залежить useEffect. 
    // Якщо одна із цих змінних змінить своє значення то useEffect спрацює повторно
    useEffect(() => {
        fetchNews();
    }, [page]);

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
            <div style={{display: "flex", justifyContent: "center", margin: "40px 20px"}}>
                <Pagination page={page} count={count} onChange={changePage} color="warning" />
            </div>
        </>
    );
}

export default News;
