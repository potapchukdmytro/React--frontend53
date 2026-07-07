import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { env } from "./../../env";

export const bookApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["Books"],
    endpoints: (build) => ({
        getBooks: build.query({
            query: (params) => ({
                url: "books",
                params: params
            }),
            providesTags: ["Books"]
        })
    })
})

export const { useGetBooksQuery } = bookApi;