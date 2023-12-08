import { Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2/Grid2';

import Lottie from "lottie-react"


interface Service {
    title: String
    subTitle: String
    icon?: any
}

interface ILayoutCard {
    textLayoutCard: Service[]
    numberOfCard: number
}

export const LayoutCard: React.FC<ILayoutCard> = ({ textLayoutCard, numberOfCard }) => {

    return (

        <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12 }} sx={{  marginTop: "40px" }} >
            {textLayoutCard.map((element, id) => {
                return (
                    <Grid xs={numberOfCard} key={id} >
                        <Card>
                            <CardActionArea sx={{padding:"20px", background:"#41409a"}}>
                                <CardMedia sx={{ margin: "auto", width: "100px" }} >
                                    <Lottie animationData={element?.icon} loop={true} alt='icon' />
                                </CardMedia >
                                <CardContent sx={{ color: "#fff" }}>
                                    <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: "center" }}>
                                        {element?.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {element?.subTitle}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                )
            }
            )}
        </Grid>
    )
}