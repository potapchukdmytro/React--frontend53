import * as bookActions from "./book/bookActions";
import * as authorActions from "./author/authorActions";

export const actions = {
    ...bookActions,
    ...authorActions
}