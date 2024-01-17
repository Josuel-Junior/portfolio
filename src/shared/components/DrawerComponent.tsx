import { Drawer, IconButton, List, Divider, ListItemButton, ListItemIcon, ListItemText, Toolbar, Collapse, Box } from "@mui/material";
import { Icon } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import SchoolIcon from '@mui/icons-material/School';

import { useState } from "react";
import { useAppThemeContext } from "../contexts";
import { useNavigate } from "react-router-dom";
import { navigateDrawer } from "../constants/pageText";



interface navigateDrawer {
    page: string
    iconPage: string
    navigate: string
}


export const DrawerComponent: React.FC = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const [OpenSubButtonMenu, setOpenSubButtonMenu] = useState(false);
    const [OpenSubButtonMenuStructure, setOpenSubButtonMenuStructure] = useState(false);

    const handleClick = () => {
        setOpenSubButtonMenu(!OpenSubButtonMenu);
    };
    const handleClickStructure = () => {
        setOpenSubButtonMenuStructure(!OpenSubButtonMenuStructure);
    };

    const { toggleTheme } = useAppThemeContext();

    const navigate = useNavigate()

    const handleNavigateLifo = () => {
        setOpenDrawer(false)
        navigate("/structurelifo")
    }
    const handleNavigateFifo = () => {
        setOpenDrawer(false)
        navigate("/structurefifo")
    }

    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {navigateDrawer.map((itensPage: navigateDrawer, index: number) => (
                        <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon >
                                <Icon>{itensPage.iconPage}</Icon>
                            </ListItemIcon>
                            <ListItemText onClick={() => navigate(`/${itensPage.navigate}`)}>
                                {itensPage.page}
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <SchoolIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Aprenda programação
                        </ListItemText>
                        {OpenSubButtonMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>

                    <Collapse in={OpenSubButtonMenu} timeout="auto" unmountOnExit sx={{ ml: "7px" }}>
                        <ListItemButton onClick={handleClickStructure}>
                            <ListItemIcon>
                                <StorageIcon />
                            </ListItemIcon>
                            <ListItemText>
                                Estrutura de dados
                            </ListItemText>
                            {OpenSubButtonMenuStructure ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={OpenSubButtonMenuStructure} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DataObjectIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Pilha (LIFO)" onClick={() => handleNavigateLifo()} />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <DataObjectIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Fila (FIFO)" onClick={() => handleNavigateFifo()} />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </Collapse>
                </List>
                <Divider />
                <List>
                    <ListItemButton onClick={toggleTheme}>
                        <IconButton >
                            <DarkModeIcon />
                        </IconButton>
                        <ListItemText>
                            Alterar tema
                        </ListItemText>
                    </ListItemButton>
                </List>
            </Drawer>

            <IconButton onClick={() => setOpenDrawer(!openDrawer)} aria-labelledby="Abrir menu de opções">
                <MenuIcon sx={{ color: "secondary" }} id="Abrir menu de opções" />
            </IconButton>

        </>

    )
}