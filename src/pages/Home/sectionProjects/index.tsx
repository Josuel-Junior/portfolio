import { Box, Button, Container, Typography, useTheme } from "@mui/material"

import { DisplayProjects } from "../../../shared/components/displayProjects/DisplayPorjects";
import { useNavigate } from "react-router-dom";



const backgroundHome2 = require("../../../shared/assets/images/backgroundTopTecnologies.webp") as string;
export const SectionProjects: React.FC = () => {

    const theme = useTheme()
    const navigate = useNavigate()
    return (
        <Box sx={{
            width: "100vw"
        }} component="section">
            <Box sx={{
                width: '100vw',
                minHeight: '15vh',
                backgroundImage: theme.palette.mode === "light" ? `url(${backgroundHome2})` : "",
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                mt:"-5px"
            }} component="div" />


            <Box>
                <Container maxWidth="lg" component="div" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Box >
                        <Typography component="h2" variant="h3" sx={{
                            fontWeight: 'bold', marginTop: "15px", fontSize: {
                                xl: 31,
                                md: 30,
                                sm: 30,
                                xs: 25
                            }
                        }}>
                            Projetos
                        </Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ marginTop: "15px", textAlign: "left" }} paragraph>
                            Explore nosso portfólio de projetos e conheça algumas de nossas soluções. <Button variant="text" onClick={() => navigate("/projects")}>Ver todos</Button>
                        </Typography>
                    </Box>

                    <DisplayProjects showPagination={false} />


                </Container>

            </Box>

        </Box>
    )
}