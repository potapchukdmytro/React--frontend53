import { Button, TextField } from "@mui/material";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

function UserBalance() {
    const inputRef = useRef(null);

    // useSelector - для отримання даних зі store
    const { balance } = useSelector((state) => state.userBalance);
    // useDispatch - для змінення state у store
    const dispatch = useDispatch();

    function depositeHandler() {
        const value = parseInt(inputRef.current.value);
        if(!isNaN(value)) {
            dispatch({ type: "deposit", payload: value });
        }
    }

    function withdrawHandler() {
        const value = parseInt(inputRef.current.value);
        if(!isNaN(value)) {
            dispatch({ type: "withdraw", payload: value });
        }
    }

    return (
        <div>
            <h1>Balance {balance}</h1>
            <TextField inputRef={inputRef} type="number" size="small" />
            <br/>
            <Button onClick={depositeHandler} color="success">Deposit</Button>
            <Button onClick={withdrawHandler} color="error">Withdraw</Button>
        </div>
    );
}

export default UserBalance;
