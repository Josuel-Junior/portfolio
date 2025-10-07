import { Box, Button, Container, Typography } from "@mui/material";

import { DisplayProjects } from "../../../shared/components/displayProjects/DisplayProjects";
import { useNavigate } from "react-router-dom";

export const SectionProjects: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100vw",
      }}
      component="section"
    >
      <Box>
        <Container
          maxWidth="lg"
          component="div"
          sx={{
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginTop: "15px",
                fontSize: {
                  xl: 31,
                  md: 30,
                  sm: 30,
                  xs: 25,
                },
              }}
            >
              Projetos
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ marginTop: "15px", textAlign: "left" }} paragraph>
              Explore meu portfólio e descubra algumas das soluções que
              desenvolvi.{" "}
              <Button variant="text" onClick={() => navigate("/projects")}>
                Mais sobre
              </Button>
            </Typography>
          </Box>

          <DisplayProjects showPagination={false} />
        </Container>
      </Box>
    </Box>
  );
};
