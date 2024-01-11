import { useQuery } from "graphql-hooks";
import { queryProjects } from "../../services/lib/dato-cms";

import { Box, IconButton, ListItemIcon, Pagination, Paper, Stack, Typography, useTheme } from "@mui/material"


import OutboundIcon from '@mui/icons-material/Outbound';
import GitHubIcon from '@mui/icons-material/GitHub';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from "react";

import { SkeletonCoponent } from "../skeleton/Skeleton";

import { FilterButton } from "../filterButton/FilterButton";
import Reveal from "react-awesome-reveal";

interface IDataprojects {
    github: string;
    project: {
        url: string;
    };
    projecttype: string
    showproject: string
    technologies: string;
    title: string;
    description: string
}

interface numberOfDisplay {
    showPagination: boolean;
}


export const DisplayProjects: React.FC<numberOfDisplay> = ({ showPagination }) => {

    const { loading, error, data } = useQuery(queryProjects)

    const theme = useTheme()

    const [filterType, setFilter] = useState('');


    const itemsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);


    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
    };

    if (loading) {
        return (
            <SkeletonCoponent numberOfSkeleton={6} widthSkeleton={300} heightSkeleton={300} />
        )
    }

    if (error) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", height: "100vh", width: "100vw", alignItems: "center", justifyItems: "center" }}>
                <Typography paragraph>
                    Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.
                </Typography>
            </Box>
        )
    }

    const filteredData = data.allProjects?.filter((item: IDataprojects) => item.projecttype.toLocaleLowerCase().includes(filterType.toLocaleLowerCase()));

    const currentData = filteredData.slice(startIndex, endIndex);

    return (
        <Box maxWidth="lg" component="div" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <FilterButton setFilter={setFilter} />

            <Grid container spacing={4} columns={{ xs: 4, md: 8, lg: 10, xl: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center", minHeight: "100vh" }} >

                {currentData?.map((project: IDataprojects, id: number) => {
                    return (

                        <Grid xs={4} key={id}>
                            <Reveal triggerOnce={true}>
                                <Card sx={{ margin: "auto", padding: "10px" }} elevation={12}>
                                    <Paper sx={{ width: "100%" }} elevation={2}>
                                        <CardMedia
                                            component="img"
                                            image={project.project.url}
                                            title={project.title}
                                            loading="lazy"

                                        />
                                    </Paper>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {project.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{
                                            fontSize: {
                                                xs: 12
                                            }
                                        }}>
                                            {project.description}

                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={{
                                            fontSize: {
                                                xs: 12
                                            },
                                            marginY: "5px"
                                        }}>
                                            Tecnologias usadas: {project.technologies}
                                        </Typography>
                                    </CardContent>
                                    <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                                        <IconButton aria-label="share" href={project.showproject} target="_blank">
                                            <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary"} fontSize="large" />
                                        </IconButton>
                                        <IconButton aria-label="share" href={`${project.github}`} target="_blank">
                                            <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary"} fontSize="large" />
                                        </IconButton>
                                    </ListItemIcon>
                                </Card>
                            </Reveal>
                        </Grid>
                    )
                })}
            </Grid>
            {showPagination && (
                <Stack spacing={2} sx={{ marginY: "20px" }}>
                    <Pagination count={Math.ceil(filteredData.length / itemsPerPage)}
                        color="primary"
                        page={currentPage} onChange={handleChange}
                    />
                </Stack>
            )}
        </Box>
    )


}