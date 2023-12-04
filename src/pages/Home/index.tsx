
import { CssBaseline, Container, Box, ListItemText, Typography, Button, Stack, AvatarGroup } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2'

import animationPageHome from '../../shared/animation/animationPageHome.json'
import arrow from '../../shared/animation/arrow.json'

import Lottie from "lottie-react"
export const Home: React.FC = () => {

  return (
    <>
      <Container maxWidth="xl" component={"section"} sx={{ background: "" }}>
        <CssBaseline />
        <Grid container>
          <Grid xs={6} sx={{ background: "" }}>
            <Box sx={{ height: "100vh", display: "flex", alignItems: "start", justifyContent: "center", flexDirection: "column" }}>
              <Typography component="h1" color="primary" variant="h1" sx={{
                fontSize: {
                  lg: 45,
                  md: 37,
                  sm: 30,
                  xs: 25
                }
                ,
                fontWeight: 'bold'
              }}>
                Bem-vindo à JFC Tecnologia
              </Typography>
              <Typography component="h2" variant="h5" sx={{ py: 4 }}>
                Aqui, a inovação e a excelência técnica se encontram para criar soluções por meio da programação.
              </Typography>
              <Button variant="contained"  size="large">Projetos</Button>
            </Box>
          </Grid>
          <Grid xs={6} sx={{ display: "flex" }}>
            <Box sx={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
              <Box sx={{ rotate: "130deg", width: "40px", marginTop: "-60px" }}>
                <Lottie animationData={arrow} loop={false} />
              </Box>
              <Lottie animationData={animationPageHome} loop={false} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>

  )
}