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
import BookDetail from "./pages/books/BookDetail";
import Movies from "./pages/movies/Movies";
import MovieDetail from "./pages/movies/MovieDetail";
import UserBalance from "./pages/userBalance/UserBalance";
import CreateBook from "./pages/books/CreateBook";
import { ToastContainer, Flip } from "react-toastify";
import UpdateBook from "./pages/books/UpdateBook";
import { useDispatch } from "react-redux";
import { getCookie } from "./services/cookieService";
import { login } from "./store/slices/auth/authSlice";
import Galery from "./pages/galery/Galery";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const token = getCookie("ujta");
        if(token) {
            dispatch(login(token));
        }
    }, []);

    return (
        <>
            <Routes>
                {/* Users routes */}
                <Route path="/" element={<UserLayout />}>
                    <Route index element={<Books />} />
                    {/* :id - url параметер */}
                    <Route path="book/:id" element={<BookDetail />} />
                    <Route path="book/update/:id" element={<UpdateBook />} />
                    <Route path="book/create" element={<CreateBook />} />
                    <Route path="cats" element={<CatsPage />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="news" element={<News />} />
                    <Route path="login" element={<Login />} />
                    <Route path="galery" element={<Galery />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="movie/:imdbId" element={<MovieDetail />} />
                    <Route path="balance" element={<UserBalance />} />
                    <Route path="*" element={<NotFound />} />
                </Route>

                {/* Admin routes */}
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<h1>Dashboard</h1>} />
                    <Route path="books" element={<h1>Test books</h1>} />
                    <Route path="authors" element={<h1>Test authors</h1>} />
                    <Route path="users" element={<h1>Test users</h1>} />
                    <Route path="roles" element={<h1>Test roles</h1>} />
                </Route>
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Flip}
            />
        </>
    );
}

export default App;
