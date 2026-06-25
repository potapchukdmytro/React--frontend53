const initState = {
    books: [],
    isLoaded: false,
    isLoading: false
}

export function bookReducer(state = initState, action) {
    switch(action.type) {
        case "loading_books":
            return { ...state, isLoading: true, isLoaded: false };
        case "get_books_success":
            return { ...state, isLoaded: true, books: action.payload, isLoading: false };
        case "get_books_error":
            return { ...state, isLoaded: false, isLoading: false }
        default:
            return state;
    }
}