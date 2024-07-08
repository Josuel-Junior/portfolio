import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Home,
  Contact,
  Projects,
  Services,
  Technologies,
  StructureLifo,
  StructureFifo,
  FlexBox,
} from "../pages";
import { Privacypolicy } from "../pages/Privacy policy/PrivacyPolicy";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/structurelifo",
        element: <StructureLifo />,
      },
      {
        path: "/structurefifo",
        element: <StructureFifo />,
      },
      {
        path: "/technologies",
        element: <Technologies />,
      },
      {
        path: "/flexbox",
        element: <FlexBox />,
      },
      {
        path: "/privacypolicy",
        element: <Privacypolicy />,
      },
      {
        path: "*",
        element: <Home />,
      },
    ],
  },
]);
