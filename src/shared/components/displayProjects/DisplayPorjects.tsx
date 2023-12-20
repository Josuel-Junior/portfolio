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
import { useState } from "react";
import { useTheme } from "@mui/material"


const arrayButton = ["Todos", "Clientes", "Projetos pessoais"]


export const DisplayProjects: React.FC = () => {
    const { loading, error, data } = useQuery(queryProjects)

    const theme = useTheme()
    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));
    const [buttonActive, setButtonActive] = useState<number>(0)
    function handleButtonActive(buttonActive: number) {
        setButtonActive(buttonActive)
    }
    if (loading) {
        (
            <Box>

                <Typography>
                    Carregando

                </Typography>
            </Box >
        )

    }

    return (
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignContent: "center" }}>


            <Box aria-label="primary button group" sx={{ display:"flex",justifyContent:"center", flexDirection: isMatch ? "column" : "flex", alignItems:"center", gap:"10px" }}>
                {
                    arrayButton.map((button: string, index) => {
                        return (
                            <Typography>
                                {buttonActive === index ?
                                    <Button variant="contained" onClick={() => handleButtonActive(index)}>{button}</Button>
                                    : <Button variant="outlined" onClick={() => handleButtonActive(index)}>{button}</Button>}
                            </Typography>
                        )
                    })
                }
            </Box>

            <Grid container spacing={4} columns={{ xs: 4, md: 8, lg: 10, xl: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center"}} >
                <Grid xs={ 4}>
                    <Card sx={{ width: "100%", margin: "auto", padding: "10px" }} elevation={12}>
                        <Paper sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image="https://github.com/Josuel-Junior/projects-images/blob/master/image%20Ponto-Hardware/Layout-web.PNG?raw=true"
                                title="green iguana"

                            />
                        </Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Site Institucional
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: {
                                    xs: 11
                                }
                            }}>
                                Tecnologias: HTML,CSS,BOOTSTREP,JAVASCRIPT
                            </Typography>
                        </CardContent>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                    </Card>
                </Grid>
                <Grid xs={ 4}>
                    <Card sx={{ width: "100%", margin: "auto", padding: "10px" }} elevation={12}>
                        <Paper sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image="https://github.com/Josuel-Junior/projects-images/blob/master/image%20Ponto-Hardware/Layout-web.PNG?raw=true"
                                title="green iguana"

                            />
                        </Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Site Institucional
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: {
                                    xs: 11
                                }
                            }}>
                                Tecnologias: HTML,CSS,BOOTSTREP,JAVASCRIPT
                            </Typography>
                        </CardContent>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                    </Card>
                </Grid>
                <Grid xs={ 4}>
                    <Card sx={{ width: "100%", margin: "auto", padding: "10px" }} elevation={12}>
                        <Paper sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image="https://github.com/Josuel-Junior/projects-images/blob/master/image%20Ponto-Hardware/Layout-web.PNG?raw=true"
                                title="green iguana"

                            />
                        </Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Site Institucional
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: {
                                    xs: 11
                                }
                            }}>
                                Tecnologias: HTML,CSS,BOOTSTREP,JAVASCRIPT
                            </Typography>
                        </CardContent>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                    </Card>
                </Grid>
                <Grid xs={ 4}>
                    <Card sx={{ width: "100%", margin: "auto", padding: "10px" }} elevation={12}>
                        <Paper sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image="https://github.com/Josuel-Junior/projects-images/blob/master/image%20Ponto-Hardware/Layout-web.PNG?raw=true"
                                title="green iguana"

                            />
                        </Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Site Institucional
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: {
                                    xs: 11
                                }
                            }}>
                                Tecnologias: HTML,CSS,BOOTSTREP,JAVASCRIPT
                            </Typography>
                        </CardContent>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                    </Card>
                </Grid>
                <Grid xs={ 4}>
                    <Card sx={{ width: "100%", margin: "auto", padding: "10px" }} elevation={12}>
                        <Paper sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image="https://github.com/Josuel-Junior/projects-images/blob/master/image%20Ponto-Hardware/Layout-web.PNG?raw=true"
                                title="green iguana"

                            />
                        </Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Site Institucional
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: {
                                    xs: 11
                                }
                            }}>
                                Tecnologias: HTML,CSS,BOOTSTREP,JAVASCRIPT
                            </Typography>
                        </CardContent>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                    </Card>
                </Grid>
                <Grid xs={ 4}>
                    <Card sx={{ width: "100%", margin: "auto", padding: "10px" }} elevation={12}>
                        <Paper sx={{ width: "100%" }}>
                            <CardMedia
                                component="img"
                                image="https://github.com/Josuel-Junior/projects-images/blob/master/image%20Ponto-Hardware/Layout-web.PNG?raw=true"
                                title="green iguana"

                            />
                        </Paper>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Site Institucional
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{
                                fontSize: {
                                    xs: 11
                                }
                            }}>
                                Tecnologias: HTML,CSS,BOOTSTREP,JAVASCRIPT
                            </Typography>
                        </CardContent>
                        <ListItemIcon sx={{ display: "flex", justifyContent: "end" }}>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <OutboundIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                            <IconButton aria-label="share" href="https://josuel-junior.github.io/site-ponto-hardware/">
                                <GitHubIcon color={theme.palette.mode === "dark" ? "secondary" : "primary" } fontSize="large" />
                            </IconButton>
                        </ListItemIcon>
                    </Card>
                </Grid>
            
               
                
            </Grid>
        </Box>
    )
}