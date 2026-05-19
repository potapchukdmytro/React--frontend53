import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";

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
    lineHeight: "20px"
}

function Login() {
    // Наша функція submit
    function formSubmit(values) {
        console.log(values);
    }

    const initValues = {
        email: "",
        password: "",
        rememberMe: false,
    };

    const schema = Yup.object({
        email: Yup.string()
            .required()
            .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
        password: Yup.string().required().min(6),
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formSubmit,
        validationSchema: schema,
    });

    return (
        <div>
            <h1>Вхід</h1>
            <form
                action="/login"
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
                        <label>Пошта</label>
                    </div>
                    <input
                        name="email"
                        style={formInput}
                        type="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    <div style={errorStyle}>
                        {formik.errors.email ? formik.errors.email : ""}
                    </div>
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Пароль</label>
                    </div>
                    <input
                        name="password"
                        style={formInput}
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                    />
                    <div style={errorStyle}>
                        {formik.errors.password ? formik.errors.password : ""}
                    </div>
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <input
                            name="rememberMe"
                            style={formCheckbox}
                            type="checkbox"
                            checked={formik.values.rememberMe}
                            onChange={formik.handleChange}
                        />
                        <label>Запам'ятати мене</label>
                    </div>
                </div>

                <div style={{ margin: "15px 0px" }}>
                    <input style={submitStyle} type="submit" value="Увійти" />
                </div>
            </form>
        </div>
    );
}

export default Login;
