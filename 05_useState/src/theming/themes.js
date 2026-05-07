import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: "#5025adf5",
            dark: "#381979f5",
            light: "#7350bdf5",
        },
        secondary: {
            main: "#08bd8a",
            dark: "#39caa1",
            light: "#058460",
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "#18181e",
            dark: "#101015",
            light: "#46464B",
        },
        secondary: {
            main: "#05966d",
            dark: "#03694C",
            light: "#37AB8A",
        },
    },
});
