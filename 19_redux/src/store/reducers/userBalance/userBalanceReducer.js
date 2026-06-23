const initState = {
    balance: 0
}

export function userBalanceReducer(state = initState, action) {
    switch(action.type) {
        case "deposit":
            return { ...state, balance: state.balance + 10 };
        case "withdraw":
            if(state.balance >= 10) {
                return { ...state, balance: state.balance - 10 };
            } else 
            {
                return state;
            }
        default:
            return state;
    }
}