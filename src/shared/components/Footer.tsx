import { Box, Button, Container, Divider, IconButton, ListItemIcon, Typography, useMediaQuery, useTheme } from "@mui/material"

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useNavigate } from "react-router-dom";
import { UseIndicatorNavBar } from "../contexts";

import LogoFooter from '../assets/icons/jfc-logo-footer.svg'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';



export const Footer: React.FC = () => {

    const theme = useTheme()

    const { indicatorCurrent } = UseIndicatorNavBar()

    const navigate = useNavigate()

    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const scrollToTop = () => {
        if (indicatorCurrent == 0) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        } else (
            navigate("/")
        )
    };

    return (
        <Box sx={{ width: '100vw', background: theme.palette.mode === "dark" ? "#161724" : "#296fcd" }}>

            <Container sx={{ textAlign: isMatch ? "center" : "left" }}>
                <Box component="img" src={`${LogoFooter}`} sx={{ width: "70px" }} alt="Icone do rodapé do site" />
            </Container>

            <Divider sx={{ borderBottomWidth: '2px', background: "#fff" }} />
            <Grid container sx={{ display: "flex", justifyContent: "space-around", padding: "5px" }} columns={{ xs: 4, md: 8, lg: 10, xl: 12 }}>
                <Grid xs={4} sx={{ background: "" }}>
                    <ListItemIcon sx={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", padding: "10px" }}>
                        <IconButton aria-label="share" href={"https://github.com/Josuel-Junior"} target="_blank">
                            <GitHubIcon fontSize="large" color="secondary" />
                        </IconButton>
                        <IconButton aria-label="share" href={"https://www.linkedin.com/in/josuel-junior-433467266/"} target="_blank">
                            <LinkedInIcon fontSize="large" color="secondary" />
                        </IconButton>
                        <IconButton aria-label="share" href={"https://wa.me/5535999007141"} target="_blank">
                            <WhatsAppIcon fontSize="large" color="secondary" />
                        </IconButton>
                        <IconButton aria-label="share" href={"tel:+5535999007141"} target="_blank">
                            <PhoneIcon fontSize="large" color="secondary" />
                        </IconButton>
                    </ListItemIcon>
                </Grid>
                <Grid xs={4} sx={{ background: "" }}>
                    <Box component="nav" sx={{ display: "flex", flexDirection: isMatch ? "column" : "flex", justifyContent: "space-between", width: "100%", color: "#fff", marginTop: "5px" }}>
                        <Button variant="text" color={"secondary"} onClick={() => scrollToTop()}>
                            Home
                        </Button>
                        <Button variant="text" color={"secondary"} onClick={() => navigate("/services")}>
                            Serviços
                        </Button>
                        <Button variant="text" color={"secondary"} onClick={() => navigate("/technology")}>
                            Tecnologias
                        </Button>
                        <Button variant="text" color={"secondary"} onClick={() => navigate("/projects")}>
                            Projetos
                        </Button>
                        <Button variant="text" color={"secondary"} onClick={() => navigate("/contact")}>
                            Contato
                        </Button>
                    </Box>
                </Grid>
            </Grid>
            <Divider />
            <Box sx={{ width: "100vw", textAlign: "center" }}>
                <Typography color="secondary" sx={{
                    fontSize: {
                        xl: 15,
                        md: 14,
                        sm: 13,
                        xs: 11
                    }
                }}>
                    JFC Tecnologia Copyright © 2023 - Todos os direitos reservados
                </Typography>
            </Box>
        </Box>
    )
}