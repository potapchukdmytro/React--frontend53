import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
    <ThemeProvider theme={createTheme({ palette: { mode: "dark" } })}>
        <Provider store={store}>
            <BrowserRouter>
                    <App />
            </BrowserRouter>
        </Provider>
    </ThemeProvider>,
);
