import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from "react-router";
import './index.css'
import App from './App.tsx'
import About from "./assets/components/about/About.tsx";
import Home from "./assets/components/home/Home.tsx";
import Something from "./assets/components/something/Something.tsx";



const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "something", element: <Something /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
