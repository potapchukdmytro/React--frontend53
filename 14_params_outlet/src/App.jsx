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
import Footer from "./components/footer/Footer";
import UserLayout from "./components/layouts/userLayout/UserLayout";
import AdminLayout from "./components/layouts/adminLayout/AdminLayout";

function App() {
    return (
        <>
            <Routes>
                {/* Users routes */}
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Books />} />
                    <Route path="cats" element={<CatsPage />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="news" element={<News />} />
                    <Route path="login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Admin routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<h1>Dashboard</h1>}/>
                    <Route path="books" element={<h1>Test books</h1>}/>
                    <Route path="authors" element={<h1>Test authors</h1>}/>
                    <Route path="users" element={<h1>Test users</h1>}/>
                    <Route path="roles" element={<h1>Test roles</h1>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
