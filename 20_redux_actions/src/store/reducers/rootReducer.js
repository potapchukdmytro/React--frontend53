import { combineReducers } from "@reduxjs/toolkit";
import { userBalanceReducer } from "./userBalance/userBalanceReducer";
import { bookReducer } from "./book/bookReducer";

export const rootReducer = combineReducers({
    userBalance: userBalanceReducer,
    book: bookReducer
});