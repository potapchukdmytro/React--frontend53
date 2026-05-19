import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import "./Profile.css";

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
    backgroundColor: "#277070",
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

function Profile() {
    const [userImage, setUserImage] = useState(null);
    const [galery, setGalery] = useState([]);

    // image
    function userImageHandle(event) {
        const input = event.target;

        if (input.files && input.files.length > 0) {
            setUserImage(input.files[0]);
        }
    }

    // multiple images
    function galeryImagesHandle(event) {
        const input = event.target;

        if (input.files && input.files.length > 0) {
            const images = [];
            for(const file of input.files) {
                images.push(file);
            }
            setGalery(images);
        }
    }

    // Наша функція submit
    function formSubmit(values) {
        localStorage.setItem("profile", JSON.stringify(values));
    }

    const initValues = {
        firstName: "",
        lastName: "",
    };

    const schema = Yup.object({
        firstName: Yup.string().required("Обов'язкове поле"),
        lastName: Yup.string().required("Обов'язкове поле"),
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formSubmit,
        validationSchema: schema,
    });

    return (
        <div>
            <h1>Профіль</h1>
            <form
                action="/profile"
                method="get"
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
                        <label>Ім'я</label>
                    </div>
                    <input
                        name="firstName"
                        style={formInput}
                        type="text"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                    />
                    <div style={errorStyle}>
                        {formik.errors.firstName ? formik.errors.firstName : ""}
                    </div>
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Прізвище</label>
                    </div>
                    <input
                        name="lastName"
                        style={formInput}
                        type="text"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                    />
                    <div style={errorStyle}>
                        {formik.errors.lastName ? formik.errors.lastName : ""}
                    </div>
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Фото профілю</label>
                    </div>
                    <div>
                        <input
                            name="avatar"
                            id="avatar"
                            style={{ fontSize: "1.05em", color: "transparent" }}
                            type="file"
                            className="file-input"
                            accept="image/*"
                            onChange={userImageHandle}
                        />
                        <label htmlFor="avatar" className="file-input-custom">
                            Обрати фото
                        </label>
                    </div>

                    <div>
                        <input
                            name="galery"
                            id="galery"
                            style={{ fontSize: "1.05em", color: "transparent" }}
                            type="file"
                            className="file-input"
                            accept="image/*"
                            onChange={galeryImagesHandle}
                            multiple
                        />
                        <label htmlFor="galery" className="file-input-custom">
                            Завантажити фото для галереї
                        </label>
                    </div>
                </div>

                <div style={{ margin: "15px 0px" }}>
                    <input style={submitStyle} type="submit" value="Зберегти" />
                </div>

                {/* user image */}
                {userImage ? (
                    <div>
                        <img
                            style={{ width: "100%", objectFit: "contain" }}
                            alt={userImage.name}
                            src={URL.createObjectURL(userImage)}
                        />
                    </div>
                ) : null}

                {/* Galery images */}
                <div>
                    {
                        galery.map((image, index) => (
                            <img 
                                key={index} 
                                alt={image.name} 
                                src={URL.createObjectURL(image)}
                                style={{width: "50", height: "50px", objectFit: "contain"}}
                            />
                        ))
                    }
                </div>
            </form>
        </div>
    );
}

export default Profile;
