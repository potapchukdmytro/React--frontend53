import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { Button, IconButton, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";
import Square from "./components/square/Square";

function App() {
    return (
        <>
            <Navbar />

            {/* <div>
                <CustomButton text="Преміум" />
                <CustomButton text="Залишити відгук" backgroundColor="lightGreen" />
                <CustomButton text="Оплатити" fontSize="24px" backgroundColor="red" color="white" borderRadius="15px" />
            </div> */}
            <Box>
                <Button variant="contained" color="success">
                    Кнопка MUI
                </Button>
                <IconButton aria-label="delete" color="error">
                    <Rating name="read-only" value={3} />
                    <DeleteIcon />
                </IconButton>
            </Box>

            <div>
                <Square isDark={false}/>
            </div>
        </>
    );
}

export default App;
