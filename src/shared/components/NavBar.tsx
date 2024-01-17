import { AppBar, Toolbar, Tabs, Tab, IconButton, useMediaQuery, useTheme, ButtonGroup, Paper, Popper, Grow, MenuItem, MenuList, ClickAwayListener, Box, Typography, Divider } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Logo from '../assets/icons/jfc-logo.svg'
import LogoDark from '../assets/icons/jfc-logo-dark.svg'
import { useState, useRef } from "react"

import { Link } from 'react-router-dom';

import { DrawerComponent } from "./DrawerComponent";
import { UseIndicatorNavBar, useAppThemeContext } from "../contexts";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { ProviderPropsChildren } from "../interfaces";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2/Grid2";


const hoverTextNavBar = {
    transition: "all .3s",
    "&:hover": {
        color: "#2684dd"
    }
}

const options = ['Estrutura de Pilha', 'Estrutura de Fila'];

export const NavBar: React.FC<ProviderPropsChildren> = ({ children }) => {

    const navigate = useNavigate()

    const { indicatorCurrent, setIndicatorCurrent } = UseIndicatorNavBar()
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const { toggleTheme } = useAppThemeContext();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setIndicatorCurrent(newValue);
    };

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLDivElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleNavigateLifo = () => {
        navigate("/structurelifo")
        handleToggle()
    }
    const handleNavigateFifo = () => {
        navigate("/structurefifo")
        handleToggle()
    }
    const handeleNavigateHome = () => {
        navigate("/")
    }


    return (

        <AppBar sx={{ background: `${theme.palette.background.paper}`, display: "flex", justifyContent: "center" }}>

            <Box component="img" onClick={() => handeleNavigateHome()} src={theme.palette.mode === "light" ? `${Logo}` : `${LogoDark}`} sx={{ width: "50px", position: "absolute", marginLeft: "20px" }} alt="Ícone JFC Tecnologia" loading="lazy" />
            {
                isMatch ? (
                    <Box sx={{ display: "flex", justifyContent: "end" }}>
                        <DrawerComponent />
                    </Box>

                ) :
                    <Toolbar >
                        <Tabs
                            sx={{ marginLeft: "auto" }}
                            value={indicatorCurrent}
                            indicatorColor="primary"
                            onChange={handleChange}
                            textColor="primary"
                            TabIndicatorProps={{
                                style: {
                                    backgroundColor: "#296fcd"
                                }
                            }}
                        >
                            <Tab label="Home" sx={hoverTextNavBar} component={Link} to="/" />
                            <Tab label="Serviços" sx={hoverTextNavBar} onClick={() => navigate("/services")} />
                            <Tab label="Tecnologias" sx={hoverTextNavBar} onClick={() => navigate("/technologies")} />
                            <Tab label="Projetos" sx={hoverTextNavBar} component={Link} to="/projects" />
                            <Tab label="Contato" sx={hoverTextNavBar} onClick={() => navigate("/contact")} />
                        </Tabs>
                        <ButtonGroup ref={anchorRef} disableElevation
                            variant="contained"
                            aria-label="Disabled elevation buttons"
                        >

                            <Button
                                size="small"
                                aria-controls={open ? 'split-button-menu' : undefined}
                                aria-expanded={open ? 'true' : undefined}
                                aria-label="button group"
                                aria-haspopup="menu"
                                role="group"
                                variant="contained" color="primary"
                                onClick={handleToggle}
                            >
                                {"Aprenda programação"}
                                <ArrowDropDownIcon />
                            </Button>
                        </ButtonGroup>
                        <Popper
                            sx={{
                                zIndex: 1,
                            }}
                            open={open}
                            anchorEl={anchorRef.current}
                            role={undefined}
                            transition
                            disablePortal
                        >
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{
                                        transformOrigin:
                                            placement === 'bottom' ? 'center left' : 'center bottom',
                                    }}
                                >
                                    <Paper >
                                        <Box sx={{ p: "10px" }}>
                                            <Typography variant="body1" color="primary" sx={{ ml: "10px" }} >
                                                Estrutura de Dados
                                            </Typography>
                                            <Divider />
                                            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "start" }}>
                                                <Button onClick={() => handleNavigateLifo()} variant="text" size="large" sx={{
                                                    color: theme.palette.mode == "light" ? "#4f4f4f" : "#fff", textTransform: "capitalize", "&:hover": {
                                                        color: "#2684dd"
                                                    }
                                                }}>
                                                    Pilha (LIFO)
                                                </Button>
                                                <Button onClick={() => handleNavigateFifo()} variant="text" size="large" sx={{
                                                    color: theme.palette.mode == "light" ? "#4f4f4f" : "#fff", textTransform: "capitalize", "&:hover": {
                                                        color: "#2684dd"
                                                    }
                                                }}>
                                                    Fila (FIFO)
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <IconButton onClick={toggleTheme} aria-label="Botão para alterar o tema">
                            <DarkModeIcon/>
                        </IconButton>
                    </Toolbar>
            }
        </AppBar>

    )
}