import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#41409a",
            dark: "#5d5cdc",
            light: "#7d7ce3",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#2f60b2",
            dark: "#448aff",
            light: "#69a1ff",
            contrastText: "#ffffff",
        },
        background: {
            default: "#f7f6f3",
            paper: "#ffffff",
        },

    },

});
