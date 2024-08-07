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
    title: "Design",
    subTitle:
      "Transmita a essência da sua marca através de designs visuais envolventes e memoráveis.",
    icon: iconDesign,
  },
  {
    title: "Desenvolvimento Front End",
    subTitle:
      "Do conceito à implementação, criamos experiências online impactantes e funcionais.",
    icon: iconWeb,
  },
  {
    title: "Desenvolvimento Back-End",
    subTitle:
      "Gerenciamos servidores e bancos de dados com Java e Spring Boot, criando APIs seguras e eficientes.",
    icon: iconBackEnd,
  },
];

export const serviceInformationPageService = [
  {
    title: "Design",
    subTitle:
      "Transmita a essência da sua marca através de designs visuais envolventes e memoráveis.",
    icon: iconDesign,
  },
  {
    title: "Desenvolvimento Web",
    subTitle:
      "Do conceito à implementação, criamos experiências online impactantes e funcionais.",
    icon: iconWeb,
  },
  {
    title: "Desenvolvimento Back-End",
    subTitle:
      "Gerenciamos servidores e bancos de dados com Java e Spring Boot, criando APIs seguras e eficientes.",
    icon: iconBackEnd,
  },
  {
    title: "Responsividade",
    subTitle:
      "Desenvolvemos soluções que se adaptam perfeitamente a qualquer dispositivo.",
    icon: responsive,
  },
  {
    title: "Integração com APIs",
    subTitle:
      "Conectamos seu sistema a serviços externos, ampliando suas possibilidades.",
    icon: iconApi,
  },
  {
    title: "Aplicativos Android",
    subTitle:
      "Criamos apps nativos para Android, unindo eficiência e qualidade.",
    icon: iconAndroid,
  },
];

export const moreInformationAboutPageServices = [
  {
    card1: {
      title: "Desenvolvimento Back-End",
      description:
        "Desenvolvemos back-end com Spring Boot, que garante um código seguro e robusto.",
    },
    card2: {
      publicityImage: serviceImageSecurity,
      title: "Consultoria Especializada",
      description:
        "Nossa equipe de desenvolvedores está pronta para transformar suas ideias em experiências digitais incríveis.",
    },
  },
  {
    card1: {
      title: "Desenvolvimento de Aplicativos com React Native e TypeScript",
      description:
        "Unimos eficiência e inovação em cada linha de código para criar soluções excepcionais. Seja qual for a sua visão, estamos prontos para transformá-la em realidade digital.",
    },
    card2: {
      publicityImage: serviceImageMobile,
      title: "Desenvolvimento Front-End Personalizado",
      description:
        "Crie experiências digitais incríveis com nossa equipe especializada em desenvolvimento front-end. Do design à implementação, personalizamos soluções para atender às suas necessidades únicas.",
    },
  },
];

export const moreInformationAboutPageTecnologies = [
  {
    card1: {
      title: "TypeScript",
      description:
        "Abra caminho para o futuro do desenvolvimento front-end com TypeScript. Além da flexibilidade do JavaScript, oferece a robustez da tipagem estática, proporcionando um código mais seguro e legível.",
    },
    card2: {
      publicityImage: technologiesImage,
      title: "Spring Boot",
      description:
        "Exploramos o poder do Spring Boot para desenvolver um back-end robusto e escalável, garantindo eficiência e qualidade na construção de nossas APIs.",
    },
  },
  {
    card1: {
      title: "Material-UI",
      description:
        "Material-UI não é apenas uma biblioteca, é uma ferramenta que coloca estilo e consistência na ponta dos dedos dos desenvolvedores front-end. Cada botão, cada barra de progresso, é uma experiência de design. Explore conosco como Material-UI simplifica o processo, permitindo que cada elemento da sua aplicação brilhe com uma estética moderna",
    },
    card2: {
      publicityImage: technologiesImagedesign,
      title: "Conectando Experiências Digitais de Forma Eficiente",
      description:
        "Desvende o poder das API REST na criação de experiências digitais dinâmicas e eficientes. Com a capacidade de integrar dados de forma coesa, construímos pontes digitais que conectam aplicativos, websites e serviços.",
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
  { page: "Serviços", iconPage: "webIcon", navigate: "services" },
  { page: "Tecnologias", iconPage: "codeIcon", navigate: "technologies" },
  { page: "Projetos", iconPage: "phonelink", navigate: "projects" },
  { page: "Contato", iconPage: "contacts", navigate: "contact" },
];
