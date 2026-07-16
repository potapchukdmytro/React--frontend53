import { useState } from "react";
import { Helmet } from "react-helmet-async";

function Galery() {
    const [images, setImages] = useState([]);

    function selectImageHandler(event) {
        const files = event.target.files;

        if (files && files.length > 0) {
            const data = [...images];
            for (const f of files) {
                data.push(f);
            }
            setImages(data);
        }
    }

    return (
        <>
            <Helmet>
                <title>Галерея</title>
            </Helmet>

            <div style={{ marginTop: "12px" }}>
                <label
                    style={{
                        backgroundColor: "lightcoral",
                        padding: "6px 12px",
                        borderRadius: "10px",
                        color: "white",
                        fontWeight: "600",
                    }}
                    htmlFor="images"
                >
                    Обрати фото
                </label>
                <input
                    id="images"
                    type="file"
                    hidden
                    accept="image/*"
                    multiple
                    onChange={selectImageHandler}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    marginTop: "24px",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        width="300px"
                        height="200px"
                        style={{ objectFit: "contain" }}
                        src={URL.createObjectURL(image)}
                        alt={image.name}
                    />
                ))}
            </div>
        </>
    );
}

export default Galery;
