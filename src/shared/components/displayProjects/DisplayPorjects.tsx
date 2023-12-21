import { useQuery } from "graphql-hooks";
import { queryProjects } from "../../services/lib/dato-cms";

import { Box, IconButton, ListItemIcon, Paper, Typography, useMediaQuery } from "@mui/material"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import { borders } from '@mui/system';


import OutboundIcon from '@mui/icons-material/Outbound';

import GitHubIcon from '@mui/icons-material/GitHub';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';


import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useEffect, useState } from "react";
import { useTheme } from "@mui/material"


const arrayButton = ["Todos", "Clientes", "Projetos pessoais"]

interface IDataprojects {
    github: string;
    project: {
        url: string;
        responsiveImage:{
            alt:any
            base64:string
            bgColor:any
            title:any
        }
    };
    projecttype: string
    showproject: string
    subtitle: string;
    title: string;
}


export const DisplayProjects: React.FC = () => {

    const { loading, error, data } = useQuery(queryProjects)

    const theme = useTheme()

    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const [buttonActive, setButtonActive] = useState<number>(0)

    const [filterType, setFilter] = useState('');

    function handleButtonActive(buttonActive: number, button: string) {

        if (button.toLocaleLowerCase() === "todos") {
            setFilter('')

        } else {
            setFilter(button)
        }

        setButtonActive(buttonActive)
    }


    if (loading) {
        return (
            <Box>

                <Typography>
                    Carregando

                </Typography>
            </Box >
        )
    }



    const filteredData = data.allProjects?.filter((item: IDataprojects) => item.projecttype.toLocaleLowerCase().includes(filterType.toLocaleLowerCase()));

    console.log(data)

    // const filter = data.allProjects.filter((ele:IDataprojects) => ele.title.includes("Site Institucional "))

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>


            <Box aria-label="primary button group" sx={{ display: "flex", justifyContent: "center", flexDirection: isMatch ? "column" : "flex", alignItems: "center", gap: "10px" }}>
                {
                    arrayButton.map((button: string, index) => {
                        return (
                            <Typography>
                                {buttonActive === index ?
                                    <Button variant="contained" onClick={() => handleButtonActive(index, button)}>{button}</Button>
                                    : <Button variant="outlined" onClick={() => handleButtonActive(index, button)}>{button}</Button>}
                            </Typography>
                        )
                    })
                }
            </Box>

            <Grid container spacing={4} columns={{ xs: 4, md: 8, lg: 10, xl: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >

                {filteredData?.map((project: IDataprojects, id: number) => {
                    return (

                        <Grid xs={4} key={id}>
                            <Card sx={{ margin: "auto", padding: "10px" }} elevation={12}>
                                <Paper sx={{ width: "100%" }}>
                                    <CardMedia
                                        component="img"
                                        image={project.project.responsiveImage.base64}
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