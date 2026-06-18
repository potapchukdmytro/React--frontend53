import { createTheme } from "@mui/material";
import { purple } from "@mui/material/colors";

export const lightTheme = createTheme({
    palette: {
        mode: "light"
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        customColor: {
            main: purple[500],
            light: purple[300],
            dark: purple[700],
            contrastText: "#00000083"
        }
    },
});
