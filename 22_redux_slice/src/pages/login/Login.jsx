import { useFormik } from "formik";
import { useRef, useState } from "react";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import {
    GoogleOAuthProvider,
    GoogleLogin,
    useGoogleLogin,
} from "@react-oauth/google";
import { env } from "../../env";
import { jwtDecode } from "jwt-decode";
import { api } from "./../../api";
import { login } from "../../store/slices/auth/authSlice";
import { useDispatch } from "react-redux";
import { setCookie } from "../../services/cookieService";
import { toast } from "react-toastify";

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

function Login() {
    const [loginError, setLoginError] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Наша функція submit
    async function formSubmit(values) {
        try {
            const response = await api.post("auth/login", values);
            const { data } = response;
            const token = data.payload;

            if (values.rememberMe) {
                setCookie("ujta", token, 24);
            } else {
                setCookie("ujta", token);
            }

            dispatch(login(token));
            // Перекинути на головну сторінку
            navigate("/", { replace: true });
        } catch (error) {
            const { response } = error;
            const { data } = response;
            toast.error(data.message);
            setLoginError(data.message);
        }
    }

    const initValues = {
        email: "",
        password: "",
        rememberMe: false,
    };

    const schema = Yup.object({
        email: Yup.string()
            .required("Обов'язкове поле")
            .matches(
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
                "Невірний формат пошти",
            ),
        password: Yup.string()
            .required("Обов'язкове поле")
            .min(6, "Мінімум 6 символів"),
    });

    const formik = useFormik({
        initialValues: initValues,
        onSubmit: formSubmit,
        validationSchema: schema,
    });

    // google auth
    function googleSuccessHandler(response) {
        const token = response.credential;
        googleLogin(token);
        navigate("/", { replace: true });
    }

    function googleErrorHandler(error) {
        console.log(error);
    }

    return (
        <GoogleOAuthProvider clientId={env.googleClientId}>
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
                            autoComplete="email"
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
                            autoComplete="current-password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <div style={errorStyle}>
                            {formik.errors.password
                                ? formik.errors.password
                                : ""}
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

                    <div>
                        <span
                            style={errorStyle}
                        >
                            {loginError}
                        </span>
                    </div>

                    <div style={{ margin: "15px 0px" }}>
                        <input
                            style={submitStyle}
                            type="submit"
                            value="Увійти"
                        />
                    </div>
                    <GoogleLogin
                        type="standart"
                        theme="filled_black"
                        size="large"
                        text="continue_with"
                        shape="circle"
                        logo_alignment="center"
                        onSuccess={googleSuccessHandler}
                        onError={googleErrorHandler}
                    />
                </form>
            </div>
        </GoogleOAuthProvider>
    );
}

export default Login;
