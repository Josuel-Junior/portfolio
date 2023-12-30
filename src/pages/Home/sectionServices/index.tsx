import { Box, Container, Typography, Card, CardMedia, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { ServiceInfo } from "../../../shared/interfaces/index"

import Lottie from "lottie-react"
import Reveal from 'react-awesome-reveal';


interface SectionServicesProps {
    serviceInformation: ServiceInfo[];
}

export const SectionServices: React.FC<SectionServicesProps> = ({ serviceInformation }) => {
    return (
        <Box sx={{ width: "100vw" }} component={"section"} >
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
                        Nossos Serviços
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
                                    <Reveal triggerOnce={true}>
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
                                    </Reveal>
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