import { useState } from "react";

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    function handleSubmit(e) {
        // Зупиняє стандартне виконання form
        e.preventDefault();

        
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
                    <input value={email} onChange={e => setEmail(e.target.value)} name="email" style={formInput} type="email" />
                </div>

                <div style={fieldsGroup}>
                    <div style={formLabel}>
                        <label>Пароль</label>
                    </div>
                    <input value={password} onChange={e => setPassword(e.target.value)} name="password" style={formInput} type="password" />
                </div>

                <div style={{ margin: "15px 0px" }}>
                    <input style={submitStyle} type="submit" value="Увійти" />
                </div>
            </form>
        </div>
    );
}

export default Login;
