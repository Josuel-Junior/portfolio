import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#41409a",
            dark: "#5d5cdc",
            light: "#7d7ce3",
            contrastText: "#ffffff",
        },
        secondary: {
            main: "#fff",
            dark: "#448aff",
            light: "#69a1ff",
            contrastText: "#ffffff",
        },
        background: {
            default: "#202134",
            paper: "#303134",
        },

    },
    typography: {
        allVariants: {
            color: "#fff"
        }
    }
});
