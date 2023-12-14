import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';


import iconDesign from '../../../shared/assets/animation/animationIconServices/iconDesign.json'
import iconSeo from "../../../shared/assets/animation/animationIconServices/iconSeo.json"
import iconWeb from "../../../shared/assets/animation/animationIconServices/iconWeb.json"

import Lottie from "lottie-react"

import { useTheme } from "@mui/material"


const serviceInformation = [
    { title: "Design", subTitle: "Transmita a essência da sua marca através de designs visuais envolventes e memoráveis.", icon: iconDesign },
    { title: "Desenvolvimento Web", subTitle: "Do conceito à implementação, criamos experiências online impactantes e funcionais.", icon: iconWeb },
    { title: "Otimização de SEO", subTitle: "Aumente sua presença online e atraia tráfego qualificado através de técnicas avançadas de SEO.", icon: iconSeo },

]


export const SectionServices: React.FC = () => {

    const theme = useTheme()
    return (
        <Box sx={{ width: "100vw", background: theme.palette.mode === "dark" ? theme.palette.background.default : "#f7f6f3", }} component={"section"} >
            <Container maxWidth="lg" component={"div"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{
                        fontWeight: 'bold', marginTop: "15px", fontSize: {
                            xl: 31,
                            md: 30,
                            sm: 30,
                            xs: 25
                        },
                    }} variant='h3' component="h2">
                        Conheça Nossos Serviços
                    </Typography>
                    <Typography sx={{ marginTop: "15px" }} paragraph>
                        Com a era digital em constante evolução, oferecemos soluções sob medida para atender às suas necessidades. Descubra como nossos serviços podem impulsionar sua empresa ou seu negócio online.
                    </Typography>
                </Box>
                <Box>
                    <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "3px" }} >
                        {serviceInformation.map((element, id) => {
                            return (
                                <Grid xs={4} key={id} >
                                    <Card elevation={8}>
                                        <Box sx={{ padding: "30px", height: "350px" }}>
                                            <CardMedia sx={{ marginX: "auto", width: "120px", height: "90px" }} >
                                                <Lottie animationData={element?.icon} loop={true} alt={`Icon ${element.title}`} />
                                            </CardMedia >
                                            <CardContent sx={{ textAlign: "center" }}>
                                                <Typography gutterBottom component="h3" variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                    {element?.title}
                                                </Typography>
                                                <Typography paragraph>
                                                    {element?.subTitle}
                                                </Typography>
                                            </CardContent>
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