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
import UpdateBook from "./pages/dashboard/books/UpdateBook";
import CreateBook from "./pages/dashboard/books/CreateBook";
import { ToastContainer, Flip } from "react-toastify";
import { useDispatch } from "react-redux";
import { getCookie } from "./services/cookieService";
import { login } from "./store/slices/auth/authSlice";
import Galery from "./pages/galery/Galery";
import Dashboard from "./pages/dashboard/Dashboard";
import BooksTable from "./pages/dashboard/books/BooksTable";

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
                    <Route path="cats" element={<CatsPage />} />
                    <Route path="weather" element={<Weather />} />
                    <Route path="news" element={<News />} />
                    <Route path="login" element={<Login />} />
                    <Route path="galery" element={<Galery />} />
                    <Route path="movies" element={<Movies />} />
                    <Route path="movie/:imdbId" element={<MovieDetail />} />
                    <Route path="balance" element={<UserBalance />} />
                    
                    // Dashboard routes
                    <Route path="dashboard">
                        <Route index element={<Dashboard />} />
                        <Route path="books">
                            <Route index element={<BooksTable />}/>
                            <Route path="update/:id" element={<UpdateBook />}/>
                            <Route path="create" element={<CreateBook />}/>
                        </Route>
                    </Route>

                    <Route path="*" element={<NotFound />} />
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
