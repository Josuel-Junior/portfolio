import { Box } from "@mui/material";
import { SectionServices } from "./sectionServices";
import { SectionTechnologies } from "./sectionTechnologies";
import { SectionProjects } from "./sectionProjects";
import { serviceInformationPageHome } from "../../shared/constants/pageText";
import { useEffect } from "react";
import { UseIndicatorNavBar } from "../../shared/contexts";

import { ScrollRestoration } from "react-router-dom";

import { SectionHome } from "../../shared/layouts/sectionHome/index";

const backgroundSectionHome =
  require("../../shared/assets/images/backgroundSectionHome.png") as string;

export const Home: React.FC = () => {
  const { setIndicatorCurrent } = UseIndicatorNavBar();

  useEffect(() => {
    setIndicatorCurrent(0);
  }, []);

  return (
    <Box sx={{ width: "100vw" }}>
      <ScrollRestoration />
      <Box component="main" sx={{ width: "100vw" }}>
        <SectionHome
          background={backgroundSectionHome}
          title="Bem-vindo à JFC Tecnologia"
          subTitle="Aqui, a inovação e a excelência técnica se encontram para criar
            soluções por meio da programação."
        />
      </Box>
      <SectionServices textServices={serviceInformationPageHome} />

      <SectionTechnologies />

      <Box id="projectsPageHome">
        <SectionProjects />
      </Box>
    </Box>
  );
};
