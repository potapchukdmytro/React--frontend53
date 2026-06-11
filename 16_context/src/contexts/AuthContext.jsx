import { createContext, useContext, useState } from "react"

const AuthContext = createContext();

// провайдер в який потрібно огорнути компоненти що повинні мати доступ до елементів контексту
export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [user, setUser] = useState(null);

    function login({email, password, rememberMe}) {
        setIsAuth(true);
        setUser({email: email});
    }

    function logout() {
        setIsAuth(false);
        setUser(null);
    }

    // value={{ тут вказуємо всі елементи які будуть доступні компонентам що огорнуті нашим провайдером }}
    return (
        <AuthContext.Provider value={{ login, isAuth, user, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

// хук для отримання елементів нашого контексту
export function useAuth() {
    return useContext(AuthContext);
}