import { createContext, useContext, useState } from "react"
import { getCookie, removeCookie, setCookie } from "../services/cookieService";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

// провайдер в який потрібно огорнути компоненти що повинні мати доступ до елементів контексту
export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    function login({email, password, rememberMe}) {
        setIsAuth(true);
        const data = {email: email, avatar: "https://www.svgrepo.com/show/335455/profile-default.svg"};
        setUser(data);

        if(rememberMe) {
            setCookie("auth", JSON.stringify(data), 24);
        } else {
            setCookie("auth", JSON.stringify(data));
        }
    }

    function googleLogin(token) {
        const payload = jwtDecode(token);
        const {email, picture} = payload;
        setIsAuth(true);
        const data = {email: email, avatar: picture};
        setUser(data);
        setCookie("auth", JSON.stringify(data), 24);
    }

    function localLogin() {
        const authJson = getCookie("auth");
        if(authJson) {
            const data = JSON.parse(authJson);
            setIsAuth(true);
            setUser(data);
            setCookie("auth", authJson, 24);
        }
    }

    function logout() {
        setIsAuth(false);
        setUser(null);
        removeCookie("auth");
    }

    // value={{ тут вказуємо всі елементи які будуть доступні компонентам що огорнуті нашим провайдером }}
    return (
        <AuthContext.Provider value={{ login, isAuth, user, logout, localLogin, googleLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

// хук для отримання елементів нашого контексту
export function useAuth() {
    return useContext(AuthContext);
}