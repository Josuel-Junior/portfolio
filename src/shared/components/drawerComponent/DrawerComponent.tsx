import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export const DrawerComponent: React.FC = () => {

    const [openDrawer, setOpenDrawer] = useState(false)

    const PAGES = [
        "Home",
        "Serviços",
        "Tecnologias",
        "Projetos",
        "Estrutura de dados",
        "Contato"
    ]
    return (
        <div>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {PAGES.map((page, index) => (
                        <ListItemButton key={index} onClick={() => setOpenDrawer(false)}>
                            <ListItemIcon>
                                <ListItemText>
                                    {page}
                                </ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}

                </List>
            </Drawer>
            <IconButton sx={{ color: "white", display: "flex", justifyContent: "end", width: "100%" }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>
        </div>

    )
}