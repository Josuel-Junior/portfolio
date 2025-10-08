import React from "react";
import { useQuery } from "graphql-hooks";
import { Button, useTheme } from "@mui/material";
import { queryTechnologies } from "../../../shared/services/lib/dato-cms";
import { Typography, Box, Container } from "@mui/material";
import { SkeletonCoponent } from "../../../shared/components/skeleton/Skeleton";

import { useNavigate } from "react-router-dom";

import { DisplayTechnologies } from "../../../shared/components/displayTechnologies/DisplayTechnologies";

export const SectionTechnologies: React.FC = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const { loading, error, data } = useQuery(queryTechnologies);

  if (loading) {
    return (
      <Box
        sx={{
          background: theme.palette.mode === "dark" ? "#161724" : "#296fcd",
        }}
        component="section"
      >
        <SkeletonCoponent
          numberOfSkeleton={9}
          widthSkeleton={360}
          heightSkeleton={110}
        />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100vh",
          alignItems: "center",
          justifyItems: "center",
          background: theme.palette.mode === "dark" ? "#161724" : "#296fcd",
        }}
      >
        <Typography paragraph color="secondary">
          Desculpe, ocorreu um erro. Por favor, tente novamente mais tarde.
        </Typography>
      </Box>
    );
  }
  return (
    <Box
      sx={{
        background: theme.palette.mode === "dark" ? "#161724" : "#296fcd",
      }}
      component="section"
    >
      <Container
        maxWidth="lg"
        component={"div"}
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ textAlign: "center", my: "20px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              mt: "15px",
              fontSize: {
                xl: 31,
                md: 30,
                sm: 30,
                xs: 25,
              },
            }}
            color={"secondary"}
            component="h2"
          >
            Confira algumas das tecnologias que utilizo e descubra como posso
            agregar valor à sua equipe.
          </Typography>
          <Typography
            paragraph
            sx={{ mt: "15px", textAlign: "left" }}
            color={"secondary"}
          >
            Uso tecnologias de ponta como Spring Boot, React e React Native para
            desenvolver experiências digitais inovadoras e de alto impacto.
            <Button
              color="secondary"
              size="large"
              onClick={() => navigate("/technologies")}
              sx={{ fontWeight: "bold" }}
            >
              VER MAIS
            </Button>
          </Typography>
        </Box>

        <DisplayTechnologies
          showPagination={false}
          backgroundColorSkeleton="#296fcd"
        />
      </Container>
    </Box>
  );
};
