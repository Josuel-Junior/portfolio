import { Drawer, Typography, IconButton, List, Divider, ListItemButton, ListItemIcon, ListItemText, Toolbar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { Icon } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppThemeContext } from "../../contexts";

export const DrawerComponent: React.FC = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const { toggleTheme } = useAppThemeContext();

    const pages = [
        "Home",
        "Serviços",
        "Tecnologias",
        "Projetos",
        "Estrutura de dados",
        "Contato"
    ]
    const icons = [
        "home",
        "webIcon",
        "codeIcon",
        "phonelink",
        "storageIcon",
        "contacts"
    ]
    return (
        <>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List >
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
            <IconButton sx={{ color: "white", display: "flex", justifyContent: "end", width: "100%" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </>

    )
}