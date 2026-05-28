import "./BookCard.css";

function ArticleCard({article}) {
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
            <div
                style={{
                    overflow: "hidden",
                    textAlign: "start",
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "1.05em",
                    width: "100%",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                }}
            >
                {article.title}
            </div>
            <div style={{ textAlign: "start", fontSize: "0.7em" }}>
                {article.author} - {article.publishedAt}
            </div>
            <div>
                <img
                    height="300px"
                    width="100%"
                    src={article.urlToImage}
                    alt={article.title}
                    style={{ objectFit: "contain" }}
                />
            </div>
            <div style={{textAlign: "start", padding: "0px 8px 8px 8px", fontSize: "0.95em"}}>
                {article.description}
            </div>
        </div>
    );
}

export default ArticleCard;
