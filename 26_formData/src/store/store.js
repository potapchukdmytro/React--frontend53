import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";
import { bookApi } from "./services/bookApi";
import { trackApi } from "./services/trackApi";

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            bookApi.middleware,
            trackApi.middleware
        )
});