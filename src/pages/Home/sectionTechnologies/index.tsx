
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea, Container, Paper } from '@mui/material';
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

const backgroundSectionTechnologies = require("../../../shared/assets/images/backgroundSectionTechnologies.jpg") as string;



export const SectionTechnologies: React.FC = () => {


    const theme = useTheme()

    return (
        <Box sx={{
            width: '100vw',
            minHeight: '100vh',
            backgroundImage: theme.palette.mode === "light" ? `url(${backgroundSectionTechnologies})` : "",
            background: theme.palette.mode === "dark" ? "#161724" : "",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }} component="section">

            <Container maxWidth="lg" component={"div"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                <Box sx={{ textAlign: "center", width: "90%" }}>
                    <Typography color="secondary" sx={{
                        fontWeight: 'bold', marginTop: "15px", fontSize: {
                            xl: 31,
                            md: 30,
                            sm: 30,
                            xs: 25
                        },
                    }} variant='h3' component="h2">
                        Veja algumas tecnolgias que trabalhamos
                    </Typography>
                    <Typography sx={{ marginTop: "15px" }} variant='h5' component="h3">
                        Na era digital em constante evolução, oferecemos soluções sob medida para atender às suas necessidades. Descubra como nossos serviços podem impulsionar sua empresa ou seu negócio online.
                    </Typography>
                    
                </Box>
                <Box >
                    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginTop: "25px", display: "flex", justifyContent: "center"}} >
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