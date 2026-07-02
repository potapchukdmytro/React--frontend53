import { combineReducers } from "@reduxjs/toolkit";
import { userBalanceReducer } from "./userBalance/userBalanceReducer";
import { bookReducer } from "./book/bookReducer";
import { authorReducer } from "./author/authorReducer";
import authReducer from "./../slices/auth/authSlice";

export const rootReducer = combineReducers({
    userBalance: userBalanceReducer,
    book: bookReducer,
    author: authorReducer,
    auth: authReducer
});