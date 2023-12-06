
import { Box, Button, Container, CssBaseline, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import animationPageHome from '../../shared/assets/animation/animationPageHome.json'
import animationArrowHome from '../../shared/assets/animation/animationArrowHome.json'
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"
import Grid from '@mui/material/Unstable_Grid2/Grid2';

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;
export const Home: React.FC = () => {

  return (

    <>
      <LayoutSectionInitial
        title=" Bem-vindo à JFC Tecnologia"
        subTitle="Aqui, a inovação e a excelência técnica se encontram para criar soluções por meio da programação."
        icon={animationPageHome}
        iconArrow={animationArrowHome}
        background={backgroundHome}
        button={<Button variant="contained" size="large">Projetos</Button>}
      />
      <Box sx={{ width: "100vw", minHeight: "100vh", background: "#FDFFFF", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Container maxWidth="xl" component={"div"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", background: "red" }}>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>
              Title
            </Typography>
          </Box>

          <Grid container columns={{ xs: 4, sm: 8, md: 12 }} >

            <Grid xs={4} sx={{ background: "blue" }} >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image=""
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Texto
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam in reiciendis modi beatae inventore tempore animi exercitationem voluptatem autem vitae.
                    </Typography>

                  </CardContent>

                </CardActionArea>
              </Card>

            </Grid>
            <Grid xs={4}>
              test
            </Grid>
            <Grid xs={4}>
              test
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>

  )
}