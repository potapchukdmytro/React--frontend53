import Navbar from "./components/navbar/Navbar";
import "./App.css";
import { CssBaseline, Box, ThemeProvider } from "@mui/material";
import DashboardLayout from "./components/layouts/dashboard/DashboardLayout";
import Users from "./pages/users/Users";
import Roles from "./pages/roles/Roles";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router";
import { lightTheme, darkTheme } from "./theming/themes";
import { useState } from "react";

function App() {
    const [isDark, setIsDark] = useState(true);

    return (
        <>
            <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={<DashboardLayout />}>
                        <Route index element={<Home />} />
                        <Route path="users" element={<Users />} />
                        <Route path="roles" element={<Roles />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
