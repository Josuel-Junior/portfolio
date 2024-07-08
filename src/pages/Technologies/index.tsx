import { useEffect } from "react";
import { UseIndicatorNavBar } from "../../shared/contexts";
import { Box, Container, Typography } from "@mui/material";
import { DisplayTechnologies } from "../../shared/components/displayTechnologies/DisplayTechnologies";
import { DisplayDetailsCard } from "../../shared/components/displayDetailsCard/DisplayDetailsCard";
import { moreInformationAboutPageTecnologies } from "../../shared/constants/pageText";
import { ScrollRestoration } from "react-router-dom";
import { SectionHome } from "../../shared/layouts/sectionHome";

const backgroundTechnologies =
  require("../../shared/assets/images/backgroundTechnologies.png") as string;

export const Technologies: React.FC = () => {
  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar();
  useEffect(() => {
    setIndicatorCurrent(2);
  }, []);
  return (
    <Box sx={{ width: "100vw" }} component="section">
      <ScrollRestoration />
      <SectionHome
        background={backgroundTechnologies}
        title="Tecnologias"
        subTitle="Descubra as tecnologias que utilizamos para criar soluções inovadoras!"
      />

      <Container sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontWeight: "bold",
            marginTop: "15px",
            fontSize: {
              xl: 31,
              md: 30,
              sm: 30,
              xs: 25,
            },
            mt: "20px",
          }}
          component="h2"
          variant="h3"
        >
          Tecnologias que utilizamos
        </Typography>
        <Typography paragraph sx={{ marginTop: "15px", textAlign: "left" }}>
          A JFC Tecnologia incorpora tecnologias de ponta para desenvolver
          soluções inovadoras, proporcionando excelência em cada projeto.
        </Typography>
      </Container>
      <Container>
        <DisplayDetailsCard details={moreInformationAboutPageTecnologies} />
      </Container>
      <Box sx={{ width: "100vw" }}>
        <Container
          id="technologiesPage"
          sx={{ alignItems: "center", marginTop: "20px" }}
        >
          <DisplayTechnologies
            showPagination={true}
            backgroundColorSkeleton=""
          />
        </Container>
      </Box>
    </Box>
  );
};
