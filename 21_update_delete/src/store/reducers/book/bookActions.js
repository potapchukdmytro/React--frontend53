import axios from "axios";

export const loadBooks = (page = 1) => async (dispatch) => {
        const url = `https://frontend53.somee.com/api/books?page=${page}`;

        dispatch({ type: "loading_books" });

        try {
            const response = await axios.get(url);
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
    const url = "https://frontend53.somee.com/api/books";

    try {
        const response = await axios.post(url, book);
        dispatch({ type: "post_book" });
        return true;
    } catch (error) {
        return false;
    }
};
