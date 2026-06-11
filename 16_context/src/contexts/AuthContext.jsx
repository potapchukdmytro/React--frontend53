import { createContext, useContext, useState } from "react"
import { getCookie, removeCookie, setCookie } from "../services/cookieService";

const AuthContext = createContext();

// провайдер в який потрібно огорнути компоненти що повинні мати доступ до елементів контексту
export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    function login({email, password, rememberMe}) {
        setIsAuth(true);
        setUser({email: email});

        if(rememberMe) {
            setCookie("auth", email, 24);
        } else {
            setCookie("auth", email);
        }
    }

    function localLogin() {
        const email = getCookie("auth");
        if(email) {
            setIsAuth(true);
            setUser(email);
            setCookie("auth", email, 24);
        }
    }

    function logout() {
        setIsAuth(false);
        setUser(null);
        removeCookie("auth");
    }

    // value={{ тут вказуємо всі елементи які будуть доступні компонентам що огорнуті нашим провайдером }}
    return (
        <AuthContext.Provider value={{ login, isAuth, user, logout, localLogin }}>
            {children}
        </AuthContext.Provider>
    )
}

// хук для отримання елементів нашого контексту
export function useAuth() {
    return useContext(AuthContext);
}