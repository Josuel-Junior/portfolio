import { useQuery } from "graphql-hooks";
import { queryProjects } from "../../services/lib/dato-cms";

import { Box, IconButton, ListItemIcon, Paper, Typography } from "@mui/material"




import OutboundIcon from '@mui/icons-material/Outbound';

import GitHubIcon from '@mui/icons-material/GitHub';

import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from "react";
import { useTheme } from "@mui/material"

import { SkeletonCoponent } from "../skeleton/Skeleton";
import { FilterButton } from "../filterButton/FilterButton";


const arrayButton = ["Todos", "Clientes", "Projetos pessoais"]

interface IDataprojects {
    github: string;
    project: {
        url: string;
        responsiveImage: {
            alt: any
            base64: string
            bgColor: any
            title: any
            webpSrcSet: string
        }
    };
    projecttype: string
    showproject: string
    subtitle: string;
    title: string;
}

interface numberOfDisplay {
    display: number;
}


export const DisplayProjects: React.FC<numberOfDisplay> = ({ display }) => {

    const { loading, error, data } = useQuery(queryProjects)

    const theme = useTheme()

    const [filterType, setFilter] = useState('');


    if (loading) {
        return (
            <SkeletonCoponent numberOfSkeleton={6} widthSkeleton={300} heightSkeleton={300} />
        )
    }


    const filteredData = data.allProjects?.filter((item: IDataprojects) => item.projecttype.toLocaleLowerCase().includes(filterType.toLocaleLowerCase()));

    return (

        <Box maxWidth="lg" component="div" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <FilterButton setFilter={setFilter} />

            <Grid container spacing={4} columns={{ xs: 4, md: 8, lg: 10, xl: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center", minHeight: "100vh" }} >

                {filteredData?.slice(0, display).map((project: IDataprojects, id: number) => {
                    return (

                        <Grid xs={4} key={id}>
                            <Card sx={{ margin: "auto", padding: "10px" }} elevation={12}>
                                <Paper sx={{ width: "100%" }}>
                                    <CardMedia
                                        component="img"
                                        image={project.project.url}
                                        title={project.title}

                                    />
                                </Paper>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        fontSize: {
                                            xs: 11
                                        }
                                    }}>
                                        {project.subtitle}
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
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}