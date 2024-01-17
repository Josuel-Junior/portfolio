import { Box, Button, Typography, Container } from '@mui/material'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { useEffect } from 'react'
import { LayoutSectionInitial } from '../../shared/layouts/LayoutSectionInitial'
import { DisplayProjects } from '../../shared/components/DisplayProjects';

import { Link } from 'react-scroll';

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;

export const Projects: React.FC = () => {

  const { setIndicatorCurrent } = UseIndicatorNavBar()

  useEffect(() => {
    setIndicatorCurrent(3)
  }, [])


  return (
    <Box sx={{ width: "100vw" }}>
      <LayoutSectionInitial
        background={backgroundHome}
        title='Conheça nossos projetos'
        subTitle='Nesta seção, você pode conhecer algumas das nossas soluções.'
        button={
          <Link to="projectsPage" smooth={true} duration={500}>
            <Button variant="contained" size="medium" href="">Projetos</Button>
          </Link>
        } />
      <Container sx={{ textAlign: "center" }}>
        <Typography sx={{
          fontWeight: 'bold', fontSize: {
            xl: 31,
            md: 30,
            sm: 30,
            xs: 25
          },mt:"20px"
        }} color={"primary"} component="h2">
          Explore nosso Portfólio.
        </Typography>
        <Typography paragraph sx={{ marginTop: "15px" }}>
          Bem-vindo a JFC Tecnologia! Sou Josuel, um desenvolvedor front-end apaixonado por transformar ideias em experiências visuais envolventes e funcionais.
        </Typography>

      </Container>

      <Container id="projectsPage" sx={{ alignItems: "center", marginTop: "20px" }} >
        <DisplayProjects showPagination={true} />
      </Container>
    </Box>
  )
}