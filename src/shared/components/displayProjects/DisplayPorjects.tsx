import { useQuery } from "graphql-hooks";
import { queryProjects } from "../../services/lib/dato-cms";

import { Box, Typography } from "@mui/material"

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';


import Grid from '@mui/material/Unstable_Grid2/Grid2';
import { useState } from "react";


const arrayButton = ["button1", "button2", "button3"]


export const DisplayProjects: React.FC = () => {
    const { loading, error, data } = useQuery(queryProjects)


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

    console.log(buttonActive)

    return (
        <Box>
            <Box>

                <ButtonGroup aria-label="primary button group">
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

                </ButtonGroup>

            </Box>
            <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ marginY: "25px", display: "flex", justifyContent: "center" }} >
                <Grid xs={4}>

                </Grid>
            </Grid>
        </Box>
    )
}