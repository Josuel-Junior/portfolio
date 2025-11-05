import iconDesign from "../../shared/assets/icons/iconDesign.svg";
import iconSeo from "../../shared/assets/icons/iconSeo.svg";
import iconBackEnd from "../../shared/assets/icons/iconBackEnd.svg";
import iconWeb from "../../shared/assets/icons/iconWeb.svg";
import responsive from "../../shared/assets/icons/responsive.svg";
import iconApi from "../../shared/assets/icons/iconApi.svg";
import iconAndroid from "../../shared/assets/icons/iconAndroid.svg";

const serviceImageMobile =
  require("../../shared/assets/images/serviceImageMobile.webp") as string;
const serviceImageSecurity =
  require("../../shared/assets/images/serviceImageSecurity.webp") as string;
const technologiesImage =
  require("../../shared/assets/images/technologiesImage.webp") as string;
const technologiesImagedesign =
  require("../../shared/assets/images/technologiesImagedesign.webp") as string;

export const serviceInformationPageHome = [
  {
    title: "Cloud",
    subTitle:
      "Transforme seus projetos com soluções em Cloud modernas e escaláveis.",
    icon: iconDesign,
  },
  {
    title: "Desenvolvimento Front End",
    subTitle:
      "Do conceito à implementação, crio experiências digitais impactantes.",
    icon: iconWeb,
  },
  {
    title: "Desenvolvimento Back-End",
    subTitle:
      "Desenvolvo aplicações com Java e Spring Boot, criando APIs seguras e eficientes.",
    icon: iconBackEnd,
  },
];

export const serviceInformationPageService = [
  {
    title: "Cloud",
    subTitle:
      "Transforme seus projetos com soluções em Cloud modernas e escaláveis.",
    icon: iconDesign,
  },
  {
    title: "Desenvolvimento Front End",
    subTitle:
      "Do conceito à implementação, crio experiências digitais impactantes.",
    icon: iconWeb,
  },
  {
    title: "Desenvolvimento Back-End",
    subTitle:
      "Desenvolvo aplicações com Java e Spring Boot, criando APIs seguras e eficientes.",
    icon: iconBackEnd,
  },
  {
    title: "Responsividade",
    subTitle:
      "Desenvolvo soluções que se adaptam perfeitamente a qualquer dispositivo.",
    icon: responsive,
  },
  {
    title: "Integração com APIs",
    subTitle:
      "Conecto seu sistema a serviços externos, ampliando suas possibilidades.",
    icon: iconApi,
  },
  {
    title: "Aplicativos Android",
    subTitle: "Crio apps nativos para Android, unindo eficiência e qualidade.",
    icon: iconAndroid,
  },
];

export const moreInformationAboutPageServices = [
  {
    card1: {
      title: "Desenvolvimento Back-End",
      description:
        "Desenvolvo back-end com java e Spring Boot, o que garante um código seguro e robusto.",
    },
    card2: {
      publicityImage: serviceImageSecurity,
      title: "Soluções Cloud",
      description:
        "Trabalho com soluções em nuvem modernas e escaláveis, ajudando empresas a otimizar recursos, aumentar a segurança e impulsionar a performance dos sistemas.",
    },
  },
  {
    card1: {
      title: "Desenvolvimento Front-End",
      description:
        "Desenvolvo experiências digitais únicas, do design à implementação, com foco em eficiência e personalização.",
    },

    card2: {
      publicityImage: serviceImageMobile,
      title: "Desenvolvimento de Aplicativos com React Native e TypeScript",
      description:
        "Transformo ideias em aplicativos modernos com React Native e TypeScript, oferecendo soluções seguras, escaláveis e de alto desempenho.",
    },
  },
];

export const moreInformationAboutPageTecnologies = [
  {
    card1: {
      title: "TypeScript",
      description:
        "Abra caminho para o futuro do desenvolvimento front-end com TypeScript. Além da flexibilidade do JavaScript, ele oferece a robustez da tipagem estática, proporcionando um código mais seguro e legível.",
    },
    card2: {
      publicityImage: technologiesImage,
      title: "Spring Boot",
      description:
        "Exploro o poder do Spring Boot para desenvolver um back-end robusto e escalável, garantindo eficiência e qualidade na construção de minhas APIs.",
    },
  },
  {
    card1: {
      title: "Material-UI",
      description:
        "Material-UI não é apenas uma biblioteca, é uma ferramenta que coloca estilo e consistência na ponta dos meus dedos. Cada botão, cada barra de progresso, representa uma experiência de design. Explore comigo como o Material-UI simplifica o processo, permitindo que cada elemento da aplicação brilhe com uma estética moderna.",
    },
    card2: {
      publicityImage: technologiesImagedesign,
      title: "Conectando Experiências Digitais de Forma Eficiente",
      description:
        "Exploro o potencial das APIs REST para criar experiências digitais ágeis e integradas, conectando aplicativos, websites e serviços de forma eficiente.",
    },
  },
];

export const textWritePageHome = [
  "Desenvolvimento Web",
  "Otimização de SEO",
  "UX / UI",
  "Aplicativos Android",
];

export const navigateDrawer = [
  { page: "Home", iconPage: "home", navigate: "" },
  { page: "Sobre Mim", iconPage: "webIcon", navigate: "services" },
  { page: "Tecnologias", iconPage: "codeIcon", navigate: "technologies" },
  { page: "Projetos", iconPage: "phonelink", navigate: "projects" },
  { page: "Contato", iconPage: "contacts", navigate: "contact" },
];
