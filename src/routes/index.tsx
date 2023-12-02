import {createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Home, Contact,Projects,Services,Structure,Technology } from '../pages';


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
          path: '/structure',
          element: <Structure />
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