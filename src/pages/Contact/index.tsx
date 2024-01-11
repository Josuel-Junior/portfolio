import { useEffect } from 'react'
import { UseIndicatorNavBar } from '../../shared/contexts'
import { DisplayContact } from '../../shared/components/displayContact/DisplayContact'
import { LayoutSectionInitial } from '../../shared/layouts/LayoutSectionInitial'
import { Link } from 'react-scroll';
import { Button } from '@mui/material';



const backgroundHome = require("../../shared/assets/images/backgroundPageHome.webp") as string;


export const Contact: React.FC = () => {

  const { setIndicatorCurrent, indicatorCurrent } = UseIndicatorNavBar()



  useEffect(() => {
    setIndicatorCurrent(4)
  })


  return (
    <>
      <LayoutSectionInitial
        background={backgroundHome}
        title='Entre em contato'
        subTitle='Estamos prontos para transformar suas ideias em realidade.'
        button={
          <Link to="contactPage" smooth={true} duration={500}>
            <Button variant="contained" size="large" href="">Contato</Button>
          </Link>
        }
      />
      <DisplayContact />

    </>
  )
}