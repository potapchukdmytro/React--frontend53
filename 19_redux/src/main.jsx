import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
        <Provider store={store}>
            <BrowserRouter>
                <AuthProvider>
                    <App />
                </AuthProvider>
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
);
