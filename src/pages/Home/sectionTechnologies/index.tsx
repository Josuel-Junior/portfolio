import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useEffect, useState } from "react";
import { useQuery } from "graphql-hooks";

import { useTheme } from "@mui/material"

import { sectionTechnologies } from '../../../shared/services/lib/dato-cms';

export const SectionTechnologies: React.FC = () => {

    const theme = useTheme()

    const { loading, error, data } = useQuery(sectionTechnologies, {
        variables: {
            limit: 10
        }
    });

    if (loading) {
        console.log("carregando")
    } else {
        const { allServiceIcons } = data

        const filter = allServiceIcons.filter((ele: { logo: any, name: "string" }) => {
            return ele.name.includes("M")
        })

        console.log(filter)
        console.log(allServiceIcons.filte)
        console.log(data?.allServiceIcons[0].logo.url)
    }



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
                    {
                        loading == true ? "carregando" : (
                            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >

                                {data.allServiceIcons?.map((element: {
                                    logo: {
                                        url: string;
                                    }; name: string
                                }, id: React.Key) => {
                                    return (
                                        <Grid xs={4} key={id}>

                                            <Card sx={{ display: "flex" }}>
                                                <Box sx={{ margin: "auto" }}>
                                                    <CardContent >
                                                        <Typography component="div" variant="h5">
                                                            {element.name}
                                                        </Typography>

                                                    </CardContent>
                                                </Box>
                                                <Box sx={{ width: "100px", padding:"10px" }}>
                                                    <CardMedia
                                                        component="img"
                                                        image={`${element.logo.url}`}
                                                        src={`${element.logo.url}`}
                                                        alt={element.name}
                                                        sx={{}}
                                                    />
                                                </Box>
                                            </Card>
                                        </Grid>
                                    )
                                }
                                )}
                            </Grid>
                        )
                    }

                </Box>
            </Container>
        </Box>
    )

}

