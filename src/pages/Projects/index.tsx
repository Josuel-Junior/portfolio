import { Box, Button, Typography } from '@mui/material'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { useEffect } from 'react'
import { LayoutSectionInitial } from '../../shared/layouts/LayoutSectionInitial'
import { DisplayProjects } from '../../shared/components/displayProjects/DisplayPorjects';

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;

export const Projects: React.FC = () => {

  const { setIndicatorCurrent } = UseIndicatorNavBar()

  useEffect(() => {
    setIndicatorCurrent(3)
  })
  return (
    <Box sx={{ width: "100vw" }}>
      <LayoutSectionInitial
        background={backgroundHome}
        title='Conheça nossos projetos'
        subTitle='Nesta seção, você pode conhecer algumas das nossas soluções.'
        button={<Button variant="contained" size="large">Projetos</Button>
        } />
      <Box>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem dignissimos itaque eum, ea ex delectus minus voluptate omnis et sint, dolores velit. Consectetur reprehenderit doloremque veritatis natus sed voluptate officiis!
        </Typography>
      </Box>
      <Box sx={{ width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>

        <DisplayProjects />
      </Box>

    </Box>
  )
}