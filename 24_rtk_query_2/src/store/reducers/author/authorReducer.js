const initState = {
    authors: [],
    isLoaded: false,
    isLoading: false
}

export function authorReducer(state = initState, action) {
    switch(action.type) {
        case "loading_authors":
            return { ...state, isLoading: true, isLoaded: false };
        case "get_authors_success":
            return {
                ...state,
                isLoaded: true,
                authors: action.payload,
                isLoading: false,
            };
        case "get_authors_error":
            return { ...state, isLoaded: false, isLoading: false };
        default: 
            return state;
    }
}