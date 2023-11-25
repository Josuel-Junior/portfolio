import { AppBar, Toolbar, Tabs, Tab, IconButton, useMediaQuery, Typography, useTheme } from "@mui/material"
import { useState } from "react"
import TerminalIcon from '@mui/icons-material/Terminal';
import DarkModeIcon from '@mui/icons-material/DarkMode';


import { ProviderPropsChildren } from "../../interfaces";
import { DrawerComponent } from "../drawerComponent/DrawerComponent";
import { useAppThemeContext } from "../../contexts";



export const NavBar: React.FC<ProviderPropsChildren> = ({ children }) => {

    const [value, setValue] = useState(0)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    const { toggleTheme } = useAppThemeContext();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    
    return (
        <>
            <AppBar sx={{ background: "primary" }} >
                {
                    isMatch ? (
                        <>
                            <DrawerComponent />
                        </>
                    ) :
                        <Toolbar >
                            <TerminalIcon />
                            <Tabs
                                sx={{ marginLeft: "auto" }}
                                value={value}
                                indicatorColor="secondary"
                                onChange={handleChange}
                            >

                                <Tab label="Home" />
                                <Tab label="Serviços" />
                                <Tab label="Tecnologias" />
                                <Tab label="Projetos" />
                                <Tab label="Estrutura de dados" />
                                <Tab label="Contato" />


                            </Tabs>
                            <IconButton onClick={toggleTheme}>
                                <DarkModeIcon />
                            </IconButton>
                        </Toolbar>
                }
            </AppBar>
        </>
    )
}