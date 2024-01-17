import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { LayoutSectionInitial } from '../../shared/layouts/LayoutSectionInitial'
import { Link } from 'react-scroll';
import { DisplayTechnologies } from '../../shared/components/DisplayTechnologies';
import { DisplayDetailsCard } from '../../shared/components/DisplayDetailsCard';
import { moreInformationAboutPageTecnologies } from '../../shared/constants/pageText';

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;

export const Technologies: React.FC = () => {

  const theme = useTheme()

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()
  useEffect(() => {
    setIndicatorCurrent(2)
  }, [])
  return (
    <Box sx={{ width: "100vw" }} component="section">

      <LayoutSectionInitial
        background={backgroundHome}
        title='Confira todas as tecnologias'
        subTitle='Descubra as tecnologias que utilizamos para criar soluções inovadoras!'
        button={
          <Link to="technologiesPage" smooth={true} duration={500}>
            <Button variant="contained" size="medium" href="">Tecnologias</Button>
          </Link>
        }
      />


      <Container sx={{ textAlign: "center" }}>
        <Typography sx={{
          fontWeight: 'bold', marginTop: "15px", fontSize: {
            xl: 31,
            md: 30,
            sm: 30,
            xs: 25
          }, mt: "20px"
        }} component="h2" variant='h3'  >
          Tecnologias que utilizamos
        </Typography>
        <Typography paragraph sx={{ marginTop: "15px", textAlign: "left" }}>
          A JFC Tecnologia incorpora tecnologias de ponta para desenvolver soluções inovadoras, proporcionando excelência em cada projeto.
        </Typography>

      </Container>
      <Container>
        <DisplayDetailsCard details={moreInformationAboutPageTecnologies} />
      </Container>
      <Box sx={{ width: "100vw"}}>
        <Container id="technologiesPage" sx={{ alignItems: "center", marginTop: "20px" }} >
          <DisplayTechnologies showPagination={true} backgroundColorSkeleton='' />
        </Container>
      </Box>

    </Box>
  )
}