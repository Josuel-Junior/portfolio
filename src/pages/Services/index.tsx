import React, { Key, useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { Box, Button, Card, CardContent, CardMedia, Container, Typography, useMediaQuery, useTheme } from '@mui/material'
import { LayoutSectionInitial } from '../../shared/layouts/LayoutSectionInitial'
import { Link } from 'react-scroll'


import Grid from '@mui/material/Unstable_Grid2/Grid2';

import { serviceInformationPageService } from '../../shared/constants/serviceInformation'
import { DisplayService } from '../../shared/components/displayService/displayService'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'


import { moreInformationAboutPage } from '../../shared/constants/serviceInformation'
import { DisplayDetailsCard } from '../../shared/components/displayDetailsCard/DisplayDetailsCard'
const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;



export const Services: React.FC = () => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()

  const theme = useTheme();


  useEffect(() => {
    setIndicatorCurrent(1)
  }, [])
  return (
    <Box sx={{ width: "100vw" }}>
      <LayoutSectionInitial
        background={backgroundHome}
        title='Transformamos ideias em realidade'
        subTitle='Explore nossos serviços e solicite um orçamento. Estamos prontos para atendê-lo.'
        button={
          <Link to="projectsPage" smooth={true} duration={500}>
            <Button variant="contained" size="large">Serviços</Button>
          </Link>
        } />

      <Container id="projectsPage" sx={{ alignItems: "center", marginTop: "20px" }} >
        <Box sx={{ textAlign: "center" }}>
          <Typography sx={{
            fontWeight: 'bold', marginTop: "15px", fontSize: {
              xl: 31,
              md: 30,
              sm: 30,
              xs: 25
            },
          }} variant='h3' component="h2">
            Nossos Serviços
          </Typography>
          <Typography sx={{ marginTop: "15px" }} paragraph>
            Nossa equipe especializada oferece soluções sob medida para impulsionar sua presença online.
          </Typography>
        </Box>

        <DisplayService serviceInformation={serviceInformationPageService} />

      </Container>
      <Box sx={{ background: theme.palette.mode === "dark" ? "#161724" : "#EAEFF6" }}>
        <DisplayDetailsCard details={moreInformationAboutPage} />
      </Box>
    </Box>
  )
}