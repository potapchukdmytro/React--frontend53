import { combineReducers } from "@reduxjs/toolkit";
import { userBalanceReducer } from "./userBalance/userBalanceReducer";
import { bookReducer } from "./book/bookReducer";
import { authorReducer } from "./author/authorReducer";

export const rootReducer = combineReducers({
    userBalance: userBalanceReducer,
    book: bookReducer,
    author: authorReducer
});