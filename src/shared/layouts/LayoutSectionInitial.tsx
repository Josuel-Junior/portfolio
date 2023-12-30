import { Box, Typography, useMediaQuery } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import { Reveal } from "react-awesome-reveal";

import Typewriter from 'typewriter-effect';

import Lottie from "lottie-react"

import { useTheme } from "@mui/material"
import { ReactElement } from "react"

interface ILayoutBase {
    title: string
    subTitle: string
    button: ReactElement
    background: string
    icon?: any
}

export const LayoutSectionInitial: React.FC<ILayoutBase> = ({ title, subTitle, icon, background, button }) => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));




    return (
        <Box sx={{
            width: '100vw',
            minHeight: '100vh',
            backgroundImage: theme.palette.mode === "light" ? `url(${background})` : "",
            background: theme.palette.mode === "dark" ? "#161724" : "",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} component="div">
            {isMatch ? (
                <Grid container sx={{ display: "flex", alignItems: "center", height: "80vh", justifyContent: "center", background: "" }} >
                    <Grid xs={12} sx={{ textAlign: "center", width: "100vw", background: "" }}>
                        <Typography component="h1" variant="h1" sx={{
                            fontSize: {
                                xl: 31,
                                md: 30,
                                sm: 30,
                                xs: 25
                            },
                            fontWeight: 'bold'
                        }}>
                            <Reveal>

                                {title}
                            </Reveal>

                        </Typography>
                        <Typography component="h2" variant="h2" sx={{
                            fontSize: {
                                xl: 31,
                                md: 30,
                                sm: 30,
                                xs: 25
                            },
                            fontWeight: 'bold',
                            marginY: "20px"

                        }}>
                            Somos especialistas em: <Typewriter options={{ autoStart: true, loop: true, strings: ['Desenvolvimento Web', 'Otimização de SEO', 'UX / UI'] }} onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000).deleteAll().pauseFor(2000).deleteAll().start()

                            }} />
                        </Typography>
                        {button}
                    </Grid>
                </Grid>
            ) :
                <Grid container sx={{ background: "", display: "flex", justifyContent: "center" }} >
                    <Grid xs={4}>
                        <Box sx={{ height: "100vh", display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                            <Typography component="h1" variant="h1" sx={{
                                fontSize: {
                                    lg: 38,
                                    md: 32,
                                    sm: 30,
                                    xs: 25
                                }
                                ,
                                fontWeight: 'bold'
                            }}>
                                <Reveal>

                                    {title}
                                </Reveal>
                            </Typography>
                            <Typography component="h2" variant="h2" sx={{
                                fontSize: {
                                    lg: 38,
                                    md: 32,
                                    sm: 30,
                                    xs: 25
                                }
                                ,
                                fontWeight: 'bold'
                            }}>
                                Somos especialistas em: <Typewriter options={{ autoStart: true, loop: true, strings: ['Desenvolvimento Web', 'Otimização de SEO', 'UX / UI'] }} onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(2000).deleteAll().pauseFor(2000).deleteAll().start()

                                }} />
                            </Typography>
                            <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                                {subTitle}
                            </Typography>
                            {button}
                            <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid xs={4} sx={{ display: "flex", background: "" }}>
                        <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                            {/* <Lottie animationData={icon} loop={false} /> */}
                        </Box>
                    </Grid>
                </Grid>
            }


        </Box >
    )

}