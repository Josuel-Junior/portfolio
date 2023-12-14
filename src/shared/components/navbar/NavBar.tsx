import { AppBar, Toolbar, Tabs, Tab, IconButton, useMediaQuery, useTheme, ButtonGroup, Paper, Popper, Grow, MenuItem, MenuList, ClickAwayListener, Box, makeStyles } from "@mui/material"
import DarkModeIcon from '@mui/icons-material/DarkMode';

import Logo from '../../assets/icons/jfc-logo.svg'
import LogoDark from '../../assets/icons/jfc-logo-dark.svg'
import { useState, useRef } from "react"

import { DrawerComponent } from "../drawerComponent/DrawerComponent";
import { UseIndicatorNavBar, useAppThemeContext } from "../../contexts";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { ProviderPropsChildren } from "../../interfaces";
import { useNavigate } from "react-router-dom";


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
    const handleClose = (event: Event) => {

        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }
        setOpen(false);
    };



    return (

        <AppBar sx={{ background: `${theme.palette.background.paper}`, display: "flex", justifyContent: "center" }}>
            <Box component="img" src={ theme.palette.mode === "light" ? `${Logo}` : `${LogoDark}`} sx={{ width: "50px", position: "absolute", marginLeft: "20px" }} />
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
                            <Tab label="Home" sx={hoverTextNavBar} onClick={() => navigate("/")} />
                            <Tab label="Serviços" sx={hoverTextNavBar} onClick={() => navigate("/services")} />
                            <Tab label="Tecnologias" sx={hoverTextNavBar} onClick={() => navigate("/technology")} />
                            <Tab label="Projetos" sx={hoverTextNavBar} onClick={() => navigate("/projects")} />
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
                                {"Estrutura de dados"}
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
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList id="split-button-menu" autoFocusItem >
                                                {options.map((option, index) => (
                                                    <MenuItem
                                                        key={option}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <IconButton onClick={toggleTheme}>
                            <DarkModeIcon />
                        </IconButton>
                    </Toolbar>
            }
        </AppBar>

    )
}