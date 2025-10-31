import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router"
import { RouterProvider } from "react-router/dom"
import Home from './pages/Home.jsx'
import Listado from './pages/Listado.jsx'
import Layout from './components/Layout.jsx'
import Detalle from './pages/Detalle.jsx'
import Login from './pages/Login.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin.jsx'
import {  SessionProvider } from './contexts/SessionContext.jsx'
import Logout from './pages/Logout.jsx'

//https://tailwindcss.com/docs/installation/using-vite

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listado",
        element: <ProtectedRoute component={<Listado />} />,
      },
      {
        path: "/listado/:id",
        element: <ProtectedRoute component={<Detalle />} />
      },
      {
        path: "/login",
        element: <Login />
      },  
      {
        path: "/logout",
        element: <Logout />
      }    
    ]
  },
  {
    path: '/admin',
    element: <ProtectedRouteAdmin component={<div>Esto seria toda la seccion de administracion</div>} />,
    children: []
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SessionProvider >
      <RouterProvider router={router} />
    </SessionProvider>
  </StrictMode>,
)
