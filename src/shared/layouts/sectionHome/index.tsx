import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Fade } from "react-awesome-reveal";
import { useTheme } from "@mui/material";

interface IProps {
  title: string;
  subTitle: string;
  background: string;
}

// const imageSectionService =
//   require("../../../shared/assets/images/backgroundSectionHome.png") as string;

export const SectionHome: React.FC<IProps> = ({
  background,
  title,
  subTitle,
}) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box
        sx={{
          backgroundImage:
            theme.palette.mode === "light" ? `url(${background})` : "#",
          height: "100%",
          width: "100%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          background: theme.palette.mode === "light" ? "" : "#161724",
          filter: theme.palette.mode === "light" ? "brightness(65%)" : "",
        }}
      />
      <Container sx={{ position: "absolute", textAlign: "center" }}>
        <Fade direction="up" delay={100}>
          <Typography
            sx={{
              fontSize: {
                xl: 32,
                md: 30,
                sm: 30,
                xs: 25,
              },
              color: "#fff",
              textShadow: "0 0 2px #666666, 0 0 2px #666666, 0 0 2px #666666",
              fontWeight: "bold",
            }}
          >
            {title}
          </Typography>
        </Fade>
        <Fade direction="up" delay={1000}>
          <Typography
            sx={{
              fontSize: {
                xl: 25,
                md: 25,
                sm: 20,
                xs: 17,
              },
              my: "10px",
              color: "#fff",
              textShadow: "0 0 2px #666666, 0 0 2px #666666, 0 0 2px #666666",
            }}
          >
            {subTitle}
          </Typography>
        </Fade>
      </Container>
    </Box>
  );
};
