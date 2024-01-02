import { Box, Button } from '@mui/material'

import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"
import { SectionServices } from './sectionServices'
import { SectionTechnologies } from './sectionTechnologies'
import { SectionProjects } from './sectionProjects'
import { serviceInformation, textWritePageHome } from '../../shared/constants/serviceInformation'
import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { Link } from 'react-scroll'


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
          background={backgroundHome}
          button={
            <Link to="projectsPageHome" smooth={true} duration={500} href=''>
              <Button variant="contained" size="large" >

                Projetos1</Button>
            </Link>
          }
          presentationText="Somos especialistas em:"
          textWriteDisplay={textWritePageHome}
        />
      </Box>
      <SectionServices serviceInformation={serviceInformation} />

      <SectionTechnologies />

      <Box id="projectsPageHome">
        <SectionProjects />
      </Box>

    </>

  )
}



