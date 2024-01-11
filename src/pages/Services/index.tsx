import React, { Key, useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { Box, Button, Container, Typography, useTheme } from '@mui/material'
import { LayoutSectionInitial } from '../../shared/layouts/LayoutSectionInitial'
import { Link } from 'react-scroll'

import { serviceInformationPageService } from '../../shared/constants/serviceInformation'
import { DisplayService } from '../../shared/components/displayService/displayService'



import { moreInformationAboutPage } from '../../shared/constants/serviceInformation'
import { DisplayDetailsCard } from '../../shared/components/displayDetailsCard/DisplayDetailsCard'
import { DisplayContact } from '../../shared/components/displayContact/DisplayContact'
const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;
const imageSectionService = require("../../shared/assets/images/imageSectionService.png") as string;


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
            <Button variant="contained" size="large" href="">Serviços</Button>
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
            }, mt: "20px"
          }} variant='h3' component="h2">
            Nossos Serviços
          </Typography>
          <Typography sx={{ marginTop: "15px" }} paragraph>
            Nossa equipe especializada oferece soluções sob medida para impulsionar sua presença online.
          </Typography>
        </Box>
      </Container>
      <Box sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundImage: theme.palette.mode === "light" ? `url(${imageSectionService})` : "",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} component="div">
        <Container>
          <DisplayService serviceInformation={serviceInformationPageService} showButton={false} />
        </Container>
      </Box>
      <Box sx={{ background: theme.palette.mode === "dark" ? "#161724" : "", py: "20px" }}>
        <DisplayDetailsCard details={moreInformationAboutPage} />
      </Box>
      <DisplayContact />
    </Box>
  )
}