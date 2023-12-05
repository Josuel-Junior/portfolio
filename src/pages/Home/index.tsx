
import {Button} from '@mui/material'
import animationPageHome from '../../shared/assets/animation/animationPageHome.json'
import animationArrowHome from '../../shared/assets/animation/animationArrowHome.json'
import { LayoutSectionInitial } from "../../shared/layouts/LayoutSectionInitial"

const backgroundHome = require("../../shared/images/backgroundPageHome.webp") as string;
export const Home: React.FC = () => {

  return (
    <LayoutSectionInitial
      title=" Bem-vindo à JFC Tecnologia"
      subTitle="Aqui, a inovação e a excelência técnica se encontram para criar soluções por meio da programação."
      icon={animationPageHome}
      iconArrow={animationArrowHome}
      background={backgroundHome}
      button={<Button variant="contained" size="large">Projetos</Button>}
    />
  )
}