import {createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Contact,Projects,Services,Technology,StructureLifo } from '../pages';


export const router = createBrowserRouter([
  
    {
      path: "/",
      element: (<App />),
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/Projects',
          element: <Projects />
        },
        {
          path: '/services',
          element: <Services />
        },
        {
          path: '/structurelifo',
          element: <StructureLifo />
        },
        {
          path: '/technology',
          element: <Technology />
        },
        {
          path: '*',
          element: <Home/>
        }
      ]
    },
  
  ]);