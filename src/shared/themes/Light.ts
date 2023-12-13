import { createTheme } from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#212c6f",
            dark: "#303f9f",
            light: "#5965b2",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#41409a",
            dark: "#448aff",
            light: "#69a1ff",
            contrastText: "#ffffff",
        },
        background: {
            default: "#f7f6f3",
            paper: "#ffffff",
        },

    },
    typography: {

    }

});
