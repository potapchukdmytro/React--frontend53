const initState = {
    balance: 0
}

export function userBalanceReducer(state = initState, action) {
    switch(action.type) {
        case "deposit":
            return { ...state, balance: state.balance + action.payload };
        case "withdraw":
            if(state.balance >= action.payload) {
                return { ...state, balance: state.balance - action.payload };
            } else 
            {
                return state;
            }
        default:
            return state;
    }
}