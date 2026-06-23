import { Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

function UserBalance() {
    // useSelector - для отримання даних зі store
    const { balance } = useSelector((state) => state.userBalance);
    // useDispatch - для змінення state у store
    const dispatch = useDispatch();

    function depositeHandler() {
        dispatch({ type: "deposit" });
    }

    function withdrawHandler() {
        dispatch({ type: "withdraw" });
    }

    return (
        <div>
            <h1>Balance {balance}</h1>

            <Button onClick={depositeHandler} color="success">Deposit</Button>
            <Button onClick={withdrawHandler} color="error">Withdraw</Button>
        </div>
    );
}

export default UserBalance;
