import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Spiner from "../../../components/spiner/Spiner";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { useCreateTrackMutation } from "../../../store/services/trackApi";
import { Button } from "@mui/material";

const fieldsGroup = {
    display: "flex",
    flexDirection: "column",
    margin: "8px 0px",
};

const formLabel = {
    textAlign: "start",
    color: "white",
};

const formInput = {
    fontSize: "1.05em",
};

const formCheckbox = {
    transform: "scale(1.3)",
    marginRight: "10px",
};

const submitStyle = {
    fontSize: "1.03em",
    fontWeight: "bold",
    color: "#ffffff",
    backgroundColor: "#aa3bff1a",
    border: "none",
    borderRadius: "10px",
    padding: "12px",
    boxShadow: "1px 1px 5px grey",
    width: "75%",
};

const errorStyle = {
    fontSize: "0.7em",
    color: "coral",
    whiteSpace: "nowrap",
    textAlign: "start",
    height: "20px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    lineHeight: "20px",
};

function CreateTrack() {
    const [audio, setAudio] = useState(null);
    const navigate = useNavigate();

    const [createTrack] = useCreateTrackMutation();

    useEffect(() => {
        window.scrollTo({ top: 0 });
    }, []);

    async function submitHandler(values) {
        try {
            const data = new FormData();

            for (const key in values) {
                data.append(key, values[key]);
            }

            if(audio) {
                data.append("file", audio);
            }

            // unwrap - говорить rtk викинути помилку на ззовні що дає змогу краще її обробити власним try catch
            const res = await createTrack(data).unwrap();

            if (res.success) {
                toast.success("Трек успішно доданий");
                navigate("/dashboard/tracks");
            } else {
                toast.error("Помилка під час додавання треку");
            }
        } catch (error) {
            toast.error("Помилка під час додавання треку");
        }
    }

    const initValues = {
        title: "",
        author: "",
        album: "",
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: submitHandler,
    });

    function uploadTrackHandler(event) {
        const files = event.target.files;
        if (files && files.length > 0) {
            setAudio(files[0]);
        }
    }

    return (
        <div>
            <Helmet>
                <title>Додавання треку</title>
            </Helmet>
            <h1>Додавання треку</h1>
            <form
                onSubmit={formik.handleSubmit}
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "33%",
                    margin: "0px auto",
                }}
            >
                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Назва</label>
                    </div>
                    <input
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        name="title"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Виконавець</label>
                    </div>
                    <input
                        value={formik.values.author}
                        onChange={formik.handleChange}
                        name="author"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Альбом</label>
                    </div>
                    <input
                        value={formik.values.album}
                        onChange={formik.handleChange}
                        name="album"
                        style={formInput}
                        type="text"
                    />
                </div>

                <div style={{ margin: "16px 0px" }}>
                    <label
                        style={{
                            display: "inline-block",
                            padding: "8px 16px",
                            backgroundColor: "gray",
                            borderRadius: "10px",
                            color: "white",
                            width: "250px",
                            height: "30px",
                        }}
                        htmlFor="track"
                    >
                        Завантажити аудіо
                    </label>

                    <input
                        onChange={uploadTrackHandler}
                        id="track"
                        type="file"
                        hidden
                        accept="audio/*"
                    />
                </div>

                {audio && (
                    <div>
                        <span>{audio.name}</span>
                    </div>
                )}

                <div style={{ margin: "15px 0px" }}>
                    <input style={submitStyle} type="submit" value="Додати" />
                </div>
            </form>
        </div>
    );
}

export default CreateTrack;
