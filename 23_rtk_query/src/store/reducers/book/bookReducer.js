const initState = {
    books: [],
    isLoaded: false,
    isLoading: false,
    pageCount: 1,
};

export function bookReducer(state = initState, action) {
    switch (action.type) {
        case "loading_books":
            return { ...state, isLoading: true, isLoaded: false };
        case "get_books_success":
            return {
                ...state,
                isLoaded: true,
                books: action.payload.items,
                pageCount: action.payload.totalPages,
                isLoading: false,
            };
        case "get_books_error":
            return { ...state, isLoaded: false, isLoading: false };
        case "post_book":
            return { ...state, isLoaded: false, isLoading: false };
        case "put_book":
            return { ...state, isLoaded: false, isLoading: false };
        case "delete_book":
            return { ...state, isLoaded: false, isLoading: false };
        default:
            return state;
    }
}
