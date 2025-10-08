import { Box, Container, Typography, useTheme, Button } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import CallIcon from "@mui/icons-material/Call";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Fade } from "react-awesome-reveal";

const background =
  require("../../../shared/assets/images/contact.webp") as string;

export const DisplayContact: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage:
          theme.palette.mode === "light" ? `url(${background})` : "",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      component="div"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          minHeight: "90vh",
        }}
        id="contactPage"
      >
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
            }}
            color={"secondary"}
            component="h2"
          >
            Contato
          </Typography>
          <Typography paragraph sx={{ textAlign: "left" }} color="secondary">
            Entre em contato para conversarmos sobre como posso contribuir com minhas habilidades e experiência em desenvolvimento de software. Estou pronto para agregar valor à sua equipe ou projeto com dedicação e foco em resultados.
          </Typography>
        </Container>
        <Container id="projectsPage" sx={{ background: "" }}>
          <Grid container>
            <Grid
              xs={12}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Fade direction="left">
                <Typography
                  sx={{ fontWeight: "bold", my: "10px" }}
                  color="secondary"
                >
                  Telefone
                </Typography>
                <Button
                  variant="contained"
                  href={"tel:+5535999007141"}
                  target="_blank"
                >
                  <CallIcon
                    fontSize="medium"
                    color="secondary"
                    sx={{ mx: "5px" }}
                  />
                  (35) 99900-7141
                </Button>
              </Fade>
            </Grid>
            <Grid
              xs={12}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                my: "15px",
              }}
            >
              <Fade direction="left">
                <Typography
                  sx={{ fontWeight: "bold", my: "10px" }}
                  color="secondary"
                >
                  Linkedin
                </Typography>
                <Button
                  variant="contained"
                  href={"https://www.linkedin.com/in/josuel-junior-433467266/"}
                  target="_blank"
                  sx={{ textTransform: "capitalize" }}
                >
                  <LinkedInIcon
                    fontSize="medium"
                    color="secondary"
                    sx={{ mx: "5px" }}
                  />
                  Josuel Junior
                </Button>
              </Fade>
            </Grid>
            <Grid
              xs={12}
              lg={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Fade direction="left">
                <Typography
                  sx={{ fontWeight: "bold", my: "10px" }}
                  color="secondary"
                >
                  Whatsapp
                </Typography>
                <Button
                  variant="contained"
                  href={"https://wa.me/5535999007141"}
                  target="_blank"
                >
                  <WhatsAppIcon
                    fontSize="medium"
                    color="secondary"
                    sx={{ mx: "5px" }}
                  />
                  (35) 99900-7141
                </Button>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};
