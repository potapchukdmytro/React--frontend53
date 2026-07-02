import { Button } from "@mui/material";

function DeleteModal({closeToast, deleteCallback}) {
    function test() {

    }

    const callback = test;

    return (
        <div style={{width: "100%"}}>
            <div style={{textAlign: "center", margin: "8px 0px"}}>
                <h2>Are you sure?</h2>
            </div>
            <div style={{display: "flex", justifyContent: "space-around", margin: "16px 0px"}}>
                <Button onClick={deleteCallback} variant="contained" color="error">Delete</Button>
                <Button variant="contained" onClick={() => closeToast("ignore")} color="info">Cancel</Button>
            </div>
        </div>
    )
}

export default DeleteModal;