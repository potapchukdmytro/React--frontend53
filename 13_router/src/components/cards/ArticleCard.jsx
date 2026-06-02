import "./BookCard.css";

function ArticleCard({ article }) {
    function formatDate(value) {
        "2026-05-13T19:15:59Z";
        const fullDate = value.split("T")[0];
        const fullTime = value.split("T")[1];

        const dateParts = fullDate.split("-");
        const timeParts = fullTime.split(":");

        return `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}, ${timeParts[0]}:${timeParts[1]}`;
    }

    function linkTo() {
        // направити користувача на іншу адресу
        // те саме що і тег <a href={url}>

        // window.location = article.url; // та сама вкладка
        window.open(article.url); // нова вкладка
    }

    return (
        <div
            onClick={linkTo}
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
                {article.author} - {formatDate(article.publishedAt)}
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
            <div
                style={{
                    textAlign: "start",
                    padding: "0px 8px 8px 8px",
                    fontSize: "0.95em",
                }}
            >
                {article.description}
            </div>
        </div>
    );
}

export default ArticleCard;
