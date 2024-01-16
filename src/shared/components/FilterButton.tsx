import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";


import { useTheme } from "@mui/material"


interface IFilterButton {
    setFilter: React.Dispatch<React.SetStateAction<string>>
}


export const FilterButton: React.FC<IFilterButton> = ({ setFilter }) => {

    const arrayButton = ["Recentes", "Projetos pessoais", "Clientes", "Aplicativos"]


    const theme = useTheme()


    const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

    const [buttonActive, setButtonActive] = useState<number>(0)



    function handleButtonActive(buttonActive: number, button: string) {

        if (button.toLocaleLowerCase() === "recentes") {
            setFilter('')

        } else {
            setFilter(button)
        }

        setButtonActive(buttonActive)
    }

    return (
        <Box aria-label="primary button group" sx={{ display: "flex", justifyContent: "center", flexDirection: isMatch ? "column" : "flex", alignItems: "center", gap: "10px" }}>
            {
                arrayButton.map((button: string, index) => {
                    return (
                        <Typography key={button}>
                            {buttonActive === index ?
                                <Button style={{ width: "190px" }} variant="contained" onClick={() => handleButtonActive(index, button)}>{button}</Button>
                                : <Button style={{ width: "190px" }} variant="outlined" onClick={() => handleButtonActive(index, button)}>{button}</Button>}
                        </Typography>
                    )
                })
            }
        </Box>
    )
}