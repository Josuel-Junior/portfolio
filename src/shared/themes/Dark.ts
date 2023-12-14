import { createTheme } from "@mui/material";

export const DarkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: "#296fcd",
            dark: "#2684dd",
            light: "#519ce3",
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
        },
        subtitle1:{
            color:"#fff",
            fontSize: 19,
        },
        body1:{
            fontSize: 19,
        },
        h1:{
            color:"#fff"
        },
        h2:{
            color:"#fff"
        },
        h3:{
            color:"#fff"
        }
    }
});
