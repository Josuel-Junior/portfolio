import { Drawer, IconButton, List, Divider, ListItemButton, ListItemIcon, ListItemText, Toolbar, Collapse, Box } from "@mui/material";
import { Icon } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import StorageIcon from '@mui/icons-material/Storage';
import DataObjectIcon from '@mui/icons-material/DataObject';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useState } from "react";
import { useAppThemeContext } from "../../contexts";




export const DrawerComponent: React.FC = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const [OpenSubButtonMenu, setOpenSubButtonMenu] = useState(false);

    const handleClick = () => {
        setOpenSubButtonMenu(!OpenSubButtonMenu);
    };

    const { toggleTheme } = useAppThemeContext();

    const pages = [
        "Home",
        "Serviços",
        "Tecnologias",
        "Projetos",
        "Contato"
    ]
    const icons = [
        "home",
        "webIcon",
        "codeIcon",
        "phonelink",
        "contacts"
    ]
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}

            >
                <List>
                    {pages.map((page, index) => (
                        <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon >
                                <Icon>{icons[index]}</Icon>
                            </ListItemIcon>
                            <ListItemText >
                                {page}
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemIcon>
                            <StorageIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Estrutura de dados
                        </ListItemText>
                        {OpenSubButtonMenu ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={OpenSubButtonMenu} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <DataObjectIcon />
                                </ListItemIcon>
                                <ListItemText primary="Estrutura de Pilha" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <DataObjectIcon />
                                </ListItemIcon>
                                <ListItemText primary="Estrutura de Fila" />
                            </ListItemButton>
                        </List>
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

            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>

        </>

    )
}