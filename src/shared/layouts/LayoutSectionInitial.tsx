import { CssBaseline, Container, Box, ListItemText, Typography, Button, Stack, AvatarGroup, useMediaQuery } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import Lottie from "lottie-react"

import { useTheme } from "@mui/material"
import { ReactElement } from "react"

interface LayoutBase {
    title: string
    subTitle: string
    button?: ReactElement
    background: string
    icon: any
    iconArrow?: any
}



export const LayoutSectionInitial: React.FC<LayoutBase> = ({ title, subTitle, icon, iconArrow, background, button }) => {

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box sx={{
            width: '100vw',
            minHeight: '100vh',
            backgroundImage: theme.palette.mode === "light" ? `url(${background})` : "",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        }} component="div">
            <Container maxWidth="lg" component={"div"}>
                <CssBaseline />
                <Grid container>
                    {isMatch ? (
                        <Grid xs={12} sx={{ textAlign: "center" }}>
                            <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                                <Typography component="h1" color="primary" variant="h1" sx={{
                                    fontSize: {
                                        xl: 31,
                                        md: 30,
                                        sm: 30,
                                        xs: 25
                                    },
                                    fontWeight: 'bold'
                                }}>
                                    {title}
                                </Typography>
                                <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                                    {subTitle}
                                </Typography>
                                {button}
                            </Box>
                        </Grid>

                    ) :
                        <>
                            <Grid xs={6} sx={{ background: "" }}>
                                <Box sx={{ height: "100vh", display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                                    <Typography component="h1" color="primary" variant="h1" sx={{
                                        fontSize: {
                                            lg: 38,
                                            md: 32,
                                            sm: 30,
                                            xs: 25
                                        }
                                        ,
                                        fontWeight: 'bold'
                                    }}>
                                        {title}
                                    </Typography>
                                    <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                                        {subTitle}
                                    </Typography>
                                    {button}
                                </Box>
                            </Grid>
                            <Grid xs={6} sx={{ display: "flex" }}>
                                <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                                    <Box sx={{ rotate: "130deg", width: "40px", marginTop: "-60px" }}>
                                        <Lottie animationData={iconArrow} loop={false} />
                                    </Box>
                                    <Lottie animationData={icon} loop={false} />
                                </Box>
                            </Grid>
                        </>
                    }
                </Grid>
            </Container>
        </Box>
    )

}