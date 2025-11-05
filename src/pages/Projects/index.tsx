import { Box, Typography, Container } from "@mui/material";
import { UseIndicatorNavBar } from "../../shared/contexts";
import { useEffect } from "react";
import { DisplayProjects } from "../../shared/components/displayProjects/DisplayProjects";
import { ScrollRestoration } from "react-router-dom";
import { SectionHome } from "../../shared/layouts/sectionHome";

const backgroundProject =
  require("../../shared/assets/images/backgroundProject.webp") as string;

export const Projects: React.FC = () => {
  const { setIndicatorCurrent } = UseIndicatorNavBar();

  useEffect(() => {
    setIndicatorCurrent(3);
  }, []);

  return (
    <Box sx={{ width: "100vw" }}>
      <ScrollRestoration />
      <SectionHome
        background={backgroundProject}
        title="Meus projetos"
        subTitle="Explore meu Portfólio"
      />

      <Container sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: {
              xl: 31,
              md: 30,
              sm: 30,
              xs: 25,
            },
            mt: "20px",
          }}
          color={"primary"}
          component="h2"
        >
          Projetos
        </Typography>
        <Typography paragraph sx={{ marginTop: "15px" }}>
          Bem-vindo ao meu Portfólio! Sou Josuel, um desenvolvedor Full Stack
          comprometido em transformar suas ideias em soluções digitais
          inovadoras e funcionais.
        </Typography>
      </Container>

      <Container
        id="projectsPage"
        sx={{ alignItems: "center", marginTop: "20px" }}
      >
        <DisplayProjects showPagination={true} />
      </Container>
    </Box>
  );
};
