import { useRef, useState } from "react";

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
    marginRight: "10px"
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

function Login() {
    const [errorMessage, setErrorMessage] = useState("");

    const emailInput = useRef(null);
    const passwordInput = useRef(null);
    const rememberRef = useRef(null);

    function handleSubmit(e) {
        // Зупиняє стандартне виконання form
        e.preventDefault();
        const form = e.target;

        const loginData = {
            email: emailInput.current.value,
            password: passwordInput.current.value,
            rememberMe: rememberRef.current.checked
        };

        if (!validate(loginData)) {
            return;
        }

        form.reset();
        alert("Успішний вхід");
        console.log(loginData);
    }

    function validate({ email, password }) {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

        if (email.length === 0) {
            setErrorMessage("Вкажіть пошту");
            return false;
        }
        if (!emailRegex.test(email)) {
            setErrorMessage("Невірний формат пошти");
            return false;
        }

        if (password.length < 6) {
            setErrorMessage("Мінімальна довжина паролю 6 символів");
            return false;
        }

        setErrorMessage("");

        return true;
    }

    return (
        <div>
            <h1>Вхід</h1>
            <form
                action="/login"
                method="get"
                onSubmit={handleSubmit}
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
                        ref={emailInput}
                        name="email"
                        style={formInput}
                        type="email"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Пароль</label>
                    </div>
                    <input
                        ref={passwordInput}
                        name="password"
                        style={formInput}
                        type="password"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <input
                            ref={rememberRef}
                            name="rememberMe"
                            style={formCheckbox}
                            type="checkbox"
                        />
                        <label>Запам'ятати мене</label>
                    </div>
                </div>

                <div style={{ margin: "15px 0px" }}>
                    <input style={submitStyle} type="submit" value="Увійти" />
                </div>
                <div>
                    <span style={{ fontSize: "0.9em", color: "coral" }}>
                        {errorMessage}
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
