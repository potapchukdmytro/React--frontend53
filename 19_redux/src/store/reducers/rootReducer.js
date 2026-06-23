import { combineReducers } from "@reduxjs/toolkit";
import { userBalanceReducer } from "./userBalance/userBalancereducer";

export const rootReducer = combineReducers({
    userBalance: userBalanceReducer
});