import { Link } from "react-router";
import "./Navbar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/auth/authSlice";
import defaultAvatar from "./avatar.png";

function Navbar() {
    const dispatch = useDispatch();
    const {isAuth, user} = useSelector((state) => state.auth);

    function logoutHandler() {
        dispatch(logout());
    }

    return (
        <div
            style={{
                backgroundColor: "#aa3bff1a",
                padding: "10px 50px",
                height: "60px",
                borderBottom: "1px solid #585858",
                display: "flex",
                alignItems: "center",
                marginBottom: "12px"
            }}>
                <div style={{ display: "flex", gap: "20px", flexGrow: 1 }}>
                    <Link to="/" className="nav-link">Книги</Link>
                    <Link to="/weather" className="nav-link">Погода</Link>
                    <Link to="/news" className="nav-link">Новини</Link>
                    <Link to="/cats" className="nav-link">Фото котиків</Link>
                    <Link to="/movies" className="nav-link">Фільми</Link>
                    <Link to="/galery" className="nav-link">Галерея</Link>
                </div>
                <div>
                {
                    isAuth 
                    ? (
                        <div style={{display: "flex", alignItems: "center"}}>
                            <Link style={{marginRight: "20px"}} to="/profile" className="nav-link">
                                <img style={{marginRight: "20px", borderRadius: "50%"}} alt={user.email} width="40px" height="40px" src={user.avatar ? user.avatar : defaultAvatar}/>
                            </Link>
                            <Link onClick={logoutHandler} className="nav-link">Вийти</Link>
                        </div>
                    )
                    : <Link to="/login" className="nav-link">Увійти</Link>
                }
                </div>
        </div>
    );
}

export default Navbar;
