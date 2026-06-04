import "./App.css";
import { useState, useEffect } from "react";
import Books from "./pages/books/Books";
import LocalStorageTemplate from "./components/localStorage/LocalStorageTemplate";
import CatsPage from "./pages/catsPage/CatsPage";
import Weather from "./pages/weather/Weather";
import News from "./pages/news/News";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { Route, Routes } from "react-router";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Books />} />
                <Route path="/cats" element={<CatsPage />} />
                <Route path="/weather" element={<Weather />} />
                <Route path="/news" element={<News />} />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
