import { useState, useEffect } from "react";
import { Button } from "@mui/material";

function CatsPage() {
    const [imageUrl, setImageUrl] = useState(null);

    const apiCatUrl = "https://api.thecatapi.com/v1/images/search";

    async function fetchCat() {
        const response = await fetch(apiCatUrl);
        const data = await response.json();
        setImageUrl(data[0].url);
    }

    // async await
    // then catch

    useEffect(() => {
        fetchCat();
    }, []);

    return (
        <>
            <h1>❤️Чудові котики❤️</h1>
            <div style={{ margin: "16px 0px" }}>
                <img style={{ maxHeight: "500px" }} alt="cat" src={imageUrl} />
            </div>
            <div style={{ textAlign: "center", margin: "16px 0px" }}>
                <Button
                    onClick={fetchCat}
                    style={{ width: "200px" }}
                    variant="contained"
                    color="warning"
                >
                    Отримати котика
                </Button>
            </div>
        </>
    );
}

export default CatsPage;
