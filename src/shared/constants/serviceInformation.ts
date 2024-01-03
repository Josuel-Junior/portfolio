import iconDesign from '../../shared/assets/icons/iconDesign.svg'
import iconSeo from "../../shared/assets/icons/iconSeo.svg"
import iconWeb from "../../shared/assets/icons/iconWeb.svg"
import responsive from "../../shared/assets/icons/responsive.svg"
import iconApi from "../../shared/assets/icons/iconApi.svg"
import iconTestCode from "../../shared/assets/icons/iconTestCode.svg"


const servicesImage2 = require("../../shared/assets/images/servicesImage.png") as string;
const servicesImage = require("../../shared/assets/images//servicesImage2.jpg") as string;

export const serviceInformationPageHome = [
  { title: "Design", subTitle: "Transmita a essência da sua marca através de designs visuais envolventes e memoráveis.", icon: iconDesign },
  { title: "Desenvolvimento Web", subTitle: "Do conceito à implementação, criamos experiências online impactantes e funcionais.", icon: iconWeb },
  { title: "Otimização de SEO", subTitle: "Aumente sua presença online e atraia tráfego qualificado através de técnicas avançadas de SEO.", icon: iconSeo },
]

export const serviceInformationPageService = [
  { title: "Design", subTitle: "Transmita a essência da sua marca através de designs visuais envolventes e memoráveis.", icon: iconDesign },
  { title: "Desenvolvimento Web", subTitle: "Do conceito à implementação, criamos experiências online impactantes e funcionais.", icon: iconWeb },
  { title: "Otimização de SEO", subTitle: "Aumente sua presença online e atraia tráfego qualificado através de técnicas avançadas de SEO.", icon: iconSeo },
  { title: "Responsividade", subTitle: "Transmita a essência da sua marca através de designs visuais envolventes e memoráveis.", icon: responsive },
  { title: "Integração com APIs", subTitle: "Do conceito à implementação, criamos experiências online impactantes e funcionais.", icon: iconApi },
  { title: "Testes e Depuração", subTitle: "Aumente sua presença online e atraia tráfego qualificado através de técnicas avançadas de SEO.", icon: iconTestCode },
]


export const moreInformationAboutPage = [
  {
    card1: {
      publicityImage: servicesImage,
      title: "Manutenção e Atualizações Contínuas",
      description: "Nossos serviços de manutenção mantêm seu site seguro e atualizado, seguindo as últimas tendências da indústria."
    },
    card2: {
      publicityImage: servicesImage,
      title: "Consultoria Especializada",
      description: "Nossa equipe de desenvolvedores front-end está pronta para transformar suas ideias em experiências digitais incríveis."
    }
  },
  {
    card1: {
      publicityImage: servicesImage2,
      title: "Auditoria de Código",
      description: "Assegure-se de um código robusto e de alta qualidade. Nossa auditoria de código verifica e otimiza, garantindo que seu site esteja em conformidade e alcance padrões elevados."
    },
    card2: {
      publicityImage: servicesImage2,
      title: "Desenvolvimento Front-End Personalizado",
      description: "Crie experiências digitais incríveis com nossa equipe especializada em desenvolvimento front-end. Do design à implementação, personalizamos soluções para atender às suas necessidades únicas."
    }
  }
];

export const textWritePageHome = ['Desenvolvimento Web', 'Otimização de SEO', 'UX / UI']