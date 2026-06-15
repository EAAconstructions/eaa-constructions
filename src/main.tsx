import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'

import { Services } from './components/Services.tsx';
import { About } from './components/About.tsx';
import { Hvac } from './components/Pages/Hvac.tsx';
import { Drywall } from './components/Pages/Drywall.tsx';
import { Electric } from './components/Pages/Electric.tsx';
import { Painting } from './components/Pages/Painting.tsx';
import { Plumbing } from './components/Pages/Plumbing.tsx';
import { Tiling } from './components/Pages/Tiling.tsx';

const router = createBrowserRouter([
  {path: '/', element: <App />},
  {path: '/services', element: <Services />},
  {path: '/about', element: <About />},
  {path: '/Plumbing', element: <Plumbing />},
  {path: '/Electric', element: <Electric />},
  {path: '/HVAC', element: <Hvac />},
  {path: '/Tiling', element: <Tiling />},
  {path: '/Painting', element: <Painting />},
  {path: '/Drywall', element: <Drywall />},
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
