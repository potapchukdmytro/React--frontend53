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
    return (
        <div>
            <h1>Вхід</h1>
            <form
                action="/login"
                method="get"
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
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Пароль</label>
                    </div>
                    <input
                        name="password"
                        style={formInput}
                        type="password"
                    />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <input
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
                        Тут буде помилка
                    </span>
                </div>
            </form>
        </div>
    );
}

export default Login;
