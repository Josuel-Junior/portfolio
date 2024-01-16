import { Box, Card, CardContent, CardMedia, Pagination, Stack, Typography } from "@mui/material"

import { useTheme } from "@mui/material"


import { Fade } from "react-awesome-reveal";

import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { queryTechnologies } from "../services/lib/dato-cms";
import { useQuery } from "graphql-hooks";
import { SkeletonCoponent } from "./Skeleton";

import { IDataTechnologies } from "../interfaces/IDataTecnologies"
import { useState } from "react";


interface pagination {
    showPagination: boolean;
    backgroundColorSkeleton: string;
}

export const DisplayTechnologies: React.FC<pagination> = ({ showPagination,backgroundColorSkeleton }) => {

    const { loading, error, data } = useQuery(queryTechnologies)

    const theme = useTheme()


    const itemsPerPage = 9;
    const [currentPage, setCurrentPage] = useState(1);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    if (loading) {
        return (
            <Box sx={{
                background: theme.palette.mode === "dark" ? "#161724" : `${backgroundColorSkeleton}`
            }} component="section">
                <SkeletonCoponent numberOfSkeleton={9} widthSkeleton={360} heightSkeleton={110} />
            </Box>
        )
    }

    if (error) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", alignItems: "center", justifyItems: "center", background: theme.palette.mode === "dark" ? "#161724" : "#296fcd" }}>
                <Typography paragraph color="secondary">
                    Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.
                </Typography>
            </Box>
        )
    }

    const currentData = data.allServiceIcons.slice(startIndex, endIndex);

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", marginY: "20px"}}>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ my: "25px", display: "flex", justifyContent: "center" }} >

                {currentData?.map((serviceIcon: IDataTechnologies, id: React.Key) => {

                    const idNumber = Number(id)

                    return (
                        <Grid xs={4} key={id}>
                            <Fade direction={idNumber % 2 === 0 ? "left" : "right"} triggerOnce={true}>
                                <Card sx={{ display: "flex" }} elevation={8}>
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
                                            loading="lazy"
                                        />
                                    </Box>
                                </Card>
                            </Fade>
                        </Grid>
                    )
                }
                )}
            </Grid>
            <Box>
                {showPagination && (
                    <Stack spacing={2} sx={{ marginY: "20px" }}>
                        <Pagination count={Math.ceil(data.allServiceIcons.length / itemsPerPage)}
                            color="primary"
                            page={currentPage} onChange={handleChange}
                        />
                    </Stack>
                )}
            </Box>
        </Box>
    )
}