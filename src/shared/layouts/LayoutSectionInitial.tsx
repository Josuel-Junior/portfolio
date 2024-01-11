import { Box, Container, Typography, useMediaQuery } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import { Reveal } from "react-awesome-reveal";

import Typewriter from 'typewriter-effect';

import { useTheme } from "@mui/material"
import { ReactElement } from "react"
import { UseIndicatorNavBar } from "../contexts";

interface ILayoutBase {
    title: string;
    subTitle: string;
    button?: ReactElement;
    background: string;
    presentationText?: string;
    textWriteDisplay?: string[];
}


export const LayoutSectionInitial: React.FC<ILayoutBase> = ({ title, subTitle, background, button, textWriteDisplay, presentationText }) => {
    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));

    const { indicatorCurrent } = UseIndicatorNavBar()


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
                <Grid container sx={{ display: "flex", alignItems: "center", height: "80vh", justifyContent: "center" }} >
                    <Grid xs={12} sx={{ textAlign: "center", width: "100vw", }}>
                        <Container>
                            <Typography component={indicatorCurrent === 0 ? "h1" : "h2"} variant="h2" sx={{
                                fontSize: {
                                    xl: 31,
                                    md: 30,
                                    sm: 30,
                                    xs: 25
                                },
                                fontWeight: 'bold', my: "10px"
                            }}>
                                <Reveal>

                                    {title}
                                </Reveal>

                            </Typography>
                        </Container>
                        {button}
                    </Grid>
                </Grid>
            ) :
                <Grid container sx={{ display: "flex", justifyContent: "center" }} >
                    <Grid xs={4}>
                        <Box sx={{ height: "100vh", display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
                            <Typography component={indicatorCurrent === 0 ? "h1" : "h2"} variant="h2" sx={{
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

                            {presentationText && (
                                <Typography component="h3" variant="h2" sx={{
                                    fontSize: {
                                        lg: 38,
                                        md: 32,
                                        sm: 30,
                                        xs: 25
                                    }
                                    ,
                                    fontWeight: 'bold'
                                }}>
                                    {presentationText} <Typewriter options={{ autoStart: true, loop: true, strings: textWriteDisplay }} onInit={(typewriter) => {
                                        typewriter
                                            .pauseFor(2000).deleteAll().pauseFor(2000).deleteAll().start()

                                    }} />
                                </Typography>
                            )

                            }
                            <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                                {subTitle}
                            </Typography>
                            {button}
                            <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid xs={4} sx={{ display: "flex", background: "" }}>

                    </Grid>
                </Grid>
            }


        </Box >
    )

}