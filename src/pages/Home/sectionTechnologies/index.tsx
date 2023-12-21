import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { useQuery } from "graphql-hooks";
import { useTheme } from "@mui/material"
import { queryTechnologies } from '../../../shared/services/lib/dato-cms';
import { Card, CardContent, CardMedia, Typography, Box, Container } from '@mui/material';
import { SkeletonCoponent } from "../../../shared/components/skeleton/Skeleton";

import {IDataTechnologies} from "../../../shared/interfaces/IDataTecnologies"


export const SectionTechnologies: React.FC = () => {

    const theme = useTheme()
    const { loading, error, data } = useQuery(queryTechnologies)

    if (loading) {
        return (
            <Box sx={{
                background: theme.palette.mode === "dark" ? "#161724" : "#296fcd"
            }} component="section">
                <SkeletonCoponent numberOfSkeleton={9} widthSkeleton={360} heightSkeleton={110} />
            </Box>
        )
    }

    console.log(loading)
    if (error) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", justifyItems: "center", background: theme.palette.mode === "dark" ? "#161724" : "#296fcd" }}>
                <Typography paragraph color="secondary">
                    Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.
                </Typography>
            </Box>
        )
    }
    return (
        <Box sx={{
            background: theme.palette.mode === "dark" ? "#161724" : "#296fcd"
        }} component="section">

            <Container maxWidth="lg" component={"div"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

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
                <Box>
                    <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >

                        {data.allServiceIcons?.map((serviceIcon:IDataTechnologies, id: React.Key) => {
                            return (
                                <Grid xs={4} key={id}>

                                    <Card sx={{ display: "flex" }}>
                                        <Box sx={{ margin: "auto" }}>
                                            <CardContent >
                                                <Typography component="div" variant="h5">
                                                    {serviceIcon.name}
                                                </Typography>

                                            </CardContent>
                                        </Box>
                                        <Box sx={{ width: "100px", padding: "10px" }}>
                                            <CardMedia
                                                component="img"
                                                image={`${serviceIcon.logo.url}`}
                                                src={`${serviceIcon.logo.url}`}
                                                alt={`Logo da tecnologia ${serviceIcon.name}`}
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

