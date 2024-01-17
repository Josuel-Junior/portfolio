
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import Reveal from 'react-awesome-reveal'

import { ServiceInfo } from '../interfaces';
import { useNavigate } from 'react-router-dom';

interface ISectionServicesProps {
    serviceInformation: ServiceInfo[];
    showButton?: boolean;
}

export const DisplayService: React.FC<ISectionServicesProps> = ({ serviceInformation, showButton }) => {

    const navigate = useNavigate()

    return (
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ my: "3px" }} >
            {serviceInformation.map((element, id) => {
                return (
                    <Grid xs={4} key={id} >
                        <Reveal triggerOnce={true}>
                            <Card elevation={8}>
                                <Box sx={{ padding: "30px", height: "330px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                    <CardMedia sx={{ mx: "auto", width: "115px", height: "80px" }} >
                                        <Box component="img"
                                            src={`${element?.icon}`}
                                            alt={`Icone de ${element?.title}`}
                                            sx={{ width: "100%", height: "90px" }}
                                            loading="lazy"
                                        />
                                    </CardMedia >
                                    <CardContent sx={{ textAlign: "center" }}>
                                        <Typography gutterBottom component="h3" variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                            {element?.title}
                                        </Typography>
                                        <Typography paragraph>
                                            {element?.subTitle}
                                        </Typography>
                                        {showButton && (
                                            <Button variant='contained' onClick={() => navigate("/services")}>
                                                Leia mais
                                            </Button>
                                        )
                                        }
                                    </CardContent>
                                </Box>
                            </Card>
                        </Reveal>
                    </Grid>
                )
            }
            )}
        </Grid>
    )
}