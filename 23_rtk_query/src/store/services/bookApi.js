import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "./../../env";

export const bookApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["Books"],
    endpoints: (build) => ({
        getBooks: build.query({
            query: (params) => ({
                url: "books",
                params: params,
            }),
            providesTags: ["Books"],
        }),
        createBook: build.mutation({
            query: (data) => ({
                url: "books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        updateBook: build.mutation({
            query: (data) => ({
                url: "books",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: build.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
