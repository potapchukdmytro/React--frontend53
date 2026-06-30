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

export const updateBook = (book) => async (dispatch) => {
    console.log(book);
    try {
        const response = await api.put("books", book);
        dispatch({ type: "put_book" });
        return true;
    } catch (error) {
        return false;
    }
};

export const deleteBook = (id)  => async(dispatch) => {
    try {
        const response = await api.delete(`books/${id}`);
        dispatch({ type: "delete_book" });
        return true;
    } catch (error) {
        return false;
    }
}
