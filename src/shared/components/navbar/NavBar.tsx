import { AppBar, Toolbar, Tabs, Tab, IconButton, useMediaQuery, useTheme, ButtonGroup, Paper, Popper, Grow, MenuItem, MenuList, ClickAwayListener } from "@mui/material"
import TerminalIcon from '@mui/icons-material/Terminal';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useState, useRef } from "react"

import { DrawerComponent } from "../drawerComponent/DrawerComponent";
import { useAppThemeContext } from "../../contexts";
import Button from '@mui/material/Button';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import { ProviderPropsChildren } from "../../interfaces";
const hoverTextNavBar = {
    transition: "all .3s",
    "&:hover": {
        color: "#bdbdbd"
    }
}

const options = ['Estrutura de Pilha', 'Estrutura de Fila'];

export const NavBar: React.FC<ProviderPropsChildren> = ({ children }) => {

    const [menuPosition, setMenuPosition] = useState<Number>(0)
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const { toggleTheme } = useAppThemeContext();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setMenuPosition(newValue);
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
        <header>
            <AppBar>
                {
                    isMatch ? (
                        <>
                            <DrawerComponent />
                        </>
                    ) :


                        <Toolbar >
                            <TerminalIcon />
                            <Tabs
                                sx={{ marginLeft: "auto", }}
                                value={menuPosition}
                                indicatorColor="secondary"
                                onChange={handleChange}
                                textColor="inherit"
                                TabIndicatorProps={{
                                    style: {
                                        backgroundColor: "#fff"
                                    }
                                }}
                            >
                                <Tab label="Home" sx={hoverTextNavBar} />

                                <Tab label="Serviços" sx={hoverTextNavBar} />
                                <Tab label="Tecnologias" sx={hoverTextNavBar} />
                                <Tab label="Projetos" sx={hoverTextNavBar} />
                                <Tab label="Contato" sx={hoverTextNavBar} />
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
                                    variant="text" color="inherit"
                                    onClick={handleToggle}
                                >
                                    <Button variant="text" color="inherit" >
                                        {"Estrutura de dados"}
                                    </Button>
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
        </header>
    )
}