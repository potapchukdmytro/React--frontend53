import axios from "axios"

export const loadAuthors = () => async (dispatch) => {
    const url = "https://frontend53.somee.com/api/authors";

    dispatch({type: "loading_authors"});
    try {
        const response = await axios.get(url);
        const {data} = response;
        dispatch({type: "get_authors_success", payload: data.payload.items});
    } catch (error) {
        dispatch({type: "get_authors_error"});
    }
}