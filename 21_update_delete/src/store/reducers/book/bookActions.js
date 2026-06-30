import { api } from "../../../api";

export const loadBooks = (page = 1) => async (dispatch) => {
        dispatch({ type: "loading_books" });

        try {
            const response = await api.get(`books?page=${page}`);
            const { data } = response;
            dispatch({
                type: "get_books_success",
                payload: {
                    items: data.payload.items,
                    totalPages: data.payload.total_pages,
                },
            });
        } catch (error) {
            dispatch({ type: "get_books_error" });
        }
    };

export const createBook = (book) => async (dispatch) => {
    try {
        const response = await api.post("books", book);
        dispatch({ type: "post_book" });
        return true;
    } catch (error) {
        return false;
    }
};
