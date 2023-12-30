import { Box, Button } from '@mui/material'
import animationPageHome from '../../shared/assets/animation/animationPageHome.json'

import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"
import { SectionServices } from './sectionServices'
import { SectionTechnologies } from './sectionTechnologies'
import { SectionProjects } from './sectionProjects'
import { serviceInformation } from '../../shared/constants/serviceInformation'
import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'


const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;






export const Home: React.FC = (technologies) => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()

  useEffect(() => {
    setIndicatorCurrent(0)
  }, [])

  return (
    <>


      <Box component="main">
        <LayoutSectionInitial
          title="Bem-vindo à JFC Tecnologia"
          subTitle="Aqui, a inovação e a excelência técnica se encontram para criar soluções por meio da programação."
          icon={animationPageHome}
          background={backgroundHome}
          button={<Button variant="contained" size="large">Projetos</Button>}
        />
      </Box>

      <SectionServices serviceInformation={serviceInformation} />

      <SectionTechnologies />

      <SectionProjects />

    </>

  )
}



