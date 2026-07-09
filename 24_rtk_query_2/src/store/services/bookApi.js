import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { env } from "./../../env";

export const bookApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({ baseUrl: env.apiUrl }),
    tagTypes: ["Books", "Book"],
    endpoints: (build) => ({
        // отримання книг
        getBooks: build.query({
            query: (params) => ({
                url: `books`,
                params: params
            }),
            providesTags: ["Books"],
        }),
        // Отримання книги по id
        getBook: build.query({
            query: (id) => ({
                url: `books/${id}`
            }),
            providesTags: ["Book"]
        }),
        // додавання нової книги
        createBook: build.mutation({
            query: (data) => ({
                url: "books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        // редагування книги
        updateBook: build.mutation({
            query: (data) => ({
                url: "books",
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Books", "Book"],
        }),
        // видалення книги
        deleteBook: build.mutation({
            query: (id) => ({
                url: `books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books", "Book"],
        }),
    }),
});

export const {
    useGetBookQuery,
    useGetBooksQuery,
    useCreateBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;
