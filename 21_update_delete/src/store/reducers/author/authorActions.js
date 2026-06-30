import { api } from "../../../api";

export const loadAuthors = () => async (dispatch) => {
    dispatch({type: "loading_authors"});
    try {
        const response = await api.get("authors");
        const {data} = response;
        dispatch({type: "get_authors_success", payload: data.payload.items});
    } catch (error) {
        dispatch({type: "get_authors_error"});
    }
}