
import { Box, Button, Container, CssBaseline, Typography, Card, CardActionArea, CardMedia, CardContent } from '@mui/material'
import animationPageHome from '../../shared/assets/animation/animationPageHome.json'
import animationArrowHome from '../../shared/assets/animation/animationArrowHome.json'
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"

import code from "../../shared/assets/animation/code.json"
import { useTheme } from "@mui/material"
import { LayoutCard } from '../../shared/layouts/LayoutCard';

const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;
export const Home: React.FC = () => {


  const serviceInformation = [
    { title: "texto", subTitle: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa nam in reiciendis modi beatae inventore tempore animi exercitationem voluptatem autem vitae.", icon: code },
    { title: "texto", subTitle: "Descrição", icon: code },
    { title: "texto", subTitle: "Descrição", icon: code },
    // { title: "texto", subTitle: "Descrição", icon: code },
    // { title: "texto", subTitle: "Descrição", icon: code },
    // { title: "texto", subTitle: "Descrição", icon: code },
    // { title: "texto", subTitle: "Descrição", icon: code },
    // { title: "texto", subTitle: "Descrição", icon: code }
  ]





  const theme = useTheme()

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
      <Box sx={{ width: "100vw", position: "relative" }} component={"section"}>
        <Container maxWidth="xl" component={"div"} sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ textAlign: "center", width: "90%", background: "" }}>
            <Typography sx={{ fontWeight: 'bold', marginTop: "15px" }} variant='h3' component="h2">
              Conheça Nossos Serviços
            </Typography>
            <Typography sx={{ marginTop: "15px" }} variant='h5' component="h3">
              Na era digital em constante evolução, oferecemos soluções sob medida para atender às suas necessidades. Descubra como nossos serviços podem impulsionar sua empresa ou seu negócio online.
            </Typography>
          </Box>
          <Box>
            <LayoutCard textLayoutCard={serviceInformation} numberOfCard={4} />
          </Box>
        </Container>
      </Box>
    </>

  )
}