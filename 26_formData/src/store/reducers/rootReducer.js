import { combineReducers } from "@reduxjs/toolkit";
import { userBalanceReducer } from "./userBalance/userBalanceReducer";
import { bookReducer } from "./book/bookReducer";
import { authorReducer } from "./author/authorReducer";
import authReducer from "./../slices/auth/authSlice";
import { bookApi } from "../services/bookApi";
import { trackApi } from "../services/trackApi";

export const rootReducer = combineReducers({
    userBalance: userBalanceReducer,
    booksOld: bookReducer,
    author: authorReducer,
    auth: authReducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [trackApi.reducerPath]: trackApi.reducer
});