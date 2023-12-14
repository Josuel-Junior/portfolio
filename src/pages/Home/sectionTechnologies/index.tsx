import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";

import { useTheme } from "@mui/material"

import icon from '../../../shared/assets/icons/js-icon.svg'

const serviceTechnologies = [
    { title: "Javascript", icon: icon },
    { title: "Typescript", icon: icon },
    { title: "React", icon: icon },
    { title: "Design", icon: icon },
    { title: "Design", icon: icon },
    { title: "Design", icon: icon },
    { title: "Design", icon: icon },
    { title: "Design", icon: icon },
    { title: "Design", icon: icon },
]



export const SectionTechnologies: React.FC = () => {
    const theme = useTheme()

    return (
        <Box sx={{

            background: theme.palette.mode === "dark" ? "#161724" : "#296fcd"


        }} component="section">

            <Container maxWidth="lg" component={"div"} sx={{ minHeight: "100vh", width: "100vw", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{
                        fontWeight: 'bold', marginTop: "15px", fontSize: {
                            xl: 31,
                            md: 30,
                            sm: 30,
                            xs: 25
                        },
                    }} color={"secondary"} component="h2"   >
                        Conheça as tecnologias que usamos para criar experiências digitais inovadoras
                    </Typography>
                    <Typography paragraph sx={{ marginTop: "15px" }} color={"secondary"}>
                        Das bases sólidas de HTML, CSS e JavaScript aos frameworks dinâmicos como React, nosso arsenal tecnológico foca na construção de interfaces envolventes. O TypeScript assegura a robustez do código, enquanto o SASS/SCSS organiza a estilização com elegância.
                    </Typography>

                </Box>
                <Box >
                    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >
                        {serviceTechnologies.map((element, id) => {
                            return (
                                <Grid xs={4} key={id}>

                                    <Card sx={{ display: "flex" }}>
                                        <Box sx={{ margin: "auto" }}>
                                            <CardContent >
                                                <Typography component="div" variant="h5">
                                                    Javascript
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <Box >
                                            <CardMedia
                                                component="img"
                                                image={`${element.icon}`}
                                                alt={element?.title}
                                                sx={{ width: "100%", height: "100px" }}
                                            />
                                        </Box>
                                    </Card>
                                </Grid>
                            )
                        }
                        )}
                    </Grid>
                </Box>
            </Container>
        </Box>
    )

}