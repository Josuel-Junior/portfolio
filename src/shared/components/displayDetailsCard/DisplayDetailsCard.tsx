import React from "react";

import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { Fade } from "react-awesome-reveal";

import Grid from "@mui/material/Unstable_Grid2/Grid2";

import { IAdvertisingcomponent } from "../../interfaces/IAdvertisingComponent";

interface IDetailsCard {
  details: IAdvertisingcomponent[];
}

export const DisplayDetailsCard: React.FC<IDetailsCard> = ({ details }) => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container>
      {details.map((element: IAdvertisingcomponent, id: React.Key) => {
        const idNumber = Number(id);
        return (
          <Grid container sx={{ minHeight: "50vh" }} key={id}>
            {idNumber % 2 === 0 && (
              <Grid
                lg={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "start",
                  alignItems: "center",
                  background: "",
                  padding: "30px",
                }}
              >
                <Fade
                  direction={idNumber % 2 === 0 ? "left" : "right"}
                  triggerOnce={true}
                >
                  <Box
                    component="img"
                    width="100%"
                    src={element.card2.publicityImage}
                    loading="lazy"
                  />
                </Fade>
              </Grid>
            )}
            <Grid
              lg={6}
              xs={12}
              style={{ order: isMatch ? 2 : 1 }}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Fade
                direction={idNumber % 2 === 0 ? "left" : "right"}
                triggerOnce={true}
              >
                <Box sx={{ mb: "20px" }}>
                  <Typography component="h2" sx={{ fontWeight: "bold" }}>
                    {element.card1.title}
                  </Typography>
                  <Typography paragraph>{element.card1.description}</Typography>
                </Box>
                <Box>
                  <Typography
                    component="h2"
                    variant="body1"
                    sx={{ fontWeight: "bold" }}
                  >
                    {element.card2.title}
                  </Typography>
                  <Typography paragraph>{element.card2.description}</Typography>
                </Box>
              </Fade>
            </Grid>
            {idNumber % 2 === 1 && (
              <Grid
                lg={6}
                xs={12}
                style={{ order: 1 }}
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  padding: "30px",
                }}
              >
                <Fade
                  direction={idNumber % 2 === 0 ? "left" : "right"}
                  triggerOnce={true}
                >
                  <Box
                    component="img"
                    width="100%"
                    src={element.card2.publicityImage}
                  />
                </Fade>
              </Grid>
            )}
          </Grid>
        );
      })}
    </Container>
  );
};
