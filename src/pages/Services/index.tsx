import React, { Key, useEffect } from "react";
import { UseIndicatorNavBar } from "../../shared/contexts";
import { Box, Button, Container, Typography, useTheme } from "@mui/material";
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial";
import { Link } from "react-scroll";

import { serviceInformationPageService } from "../../shared/constants/pageText";
import { DisplayService } from "../../shared/components/displayService/displayService";

import { moreInformationAboutPageServices } from "../../shared/constants/pageText";
import { DisplayDetailsCard } from "../../shared/components/displayDetailsCard/DisplayDetailsCard";
import { DisplayContact } from "../../shared/components/displayContact/DisplayContact";
import { ScrollRestoration } from "react-router-dom";
import { SectionHome } from "../../shared/layouts/sectionHome";
const backgroundHome =
  require("../../shared/assets/images/backgroundService.png") as string;
const imageSectionService =
  require("../../shared/assets/images/imageSectionService.png") as string;

export const Services: React.FC = () => {
  const { setIndicatorCurrent } = UseIndicatorNavBar();

  const theme = useTheme();

  useEffect(() => {
    setIndicatorCurrent(1);
  }, []);
  return (
    <Box sx={{ width: "100vw" }}>
      <ScrollRestoration />
      <SectionHome
        background={backgroundHome}
        title="Transformamos ideias em realidade"
        subTitle="Explore nossos serviços e solicite um orçamento. Estamos prontos para atendê-lo."
      />

      <Container
        id="projectsPage"
        sx={{ alignItems: "center", marginTop: "20px" }}
      >
        <Box sx={{ textAlign: "center" }}>
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
            variant="h3"
            component="h2"
          >
            Nossos Serviços
          </Typography>
          <Typography sx={{ marginTop: "15px" }} paragraph>
            Nossa equipe especializada oferece soluções sob medida para
            impulsionar sua presença online.
          </Typography>
        </Box>
      </Container>
      <Box>
        <Container>
          <DisplayService
            serviceInformation={serviceInformationPageService}
            showButton={false}
          />
        </Container>
      </Box>
      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#161724" : "",
          py: "20px",
        }}
      >
        <DisplayDetailsCard details={moreInformationAboutPageServices} />
      </Box>
      <DisplayContact />
    </Box>
  );
};
