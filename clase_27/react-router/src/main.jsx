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
import { SessionProvider } from './contexts/SessionContext.jsx'
import Logout from './pages/Logout.jsx'
import Register from './pages/register.jsx'
import RecuperarCuenta from './pages/RecuperarCuenta.jsx'
import RestablecerContrasena from './pages/RestablecerContrasena.jsx'
import EliminarProducto from './pages/EliminarProducto.jsx'
import AgregarProducto from './pages/AgregarProducto.jsx'
import EditarProducto from './pages/EditarProducto.jsx'
import AgregarProductoImagen from './pages/AgregarProductoImagen.jsx'
import Socket from './pages/Socket.jsx'

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
        path: "/nuevo-producto",
        element: <ProtectedRoute component={<AgregarProducto />} />
      },      
      {
        path: "/nuevo-producto/imagen",
        element: <ProtectedRoute component={<AgregarProductoImagen />} />
      },
      {
        path: "/producto/eliminar/:id",
        element: <ProtectedRoute component={<EliminarProducto />} />
      },
            {
        path: "/producto/editar/:id",
        element: <ProtectedRoute component={<EditarProducto />} />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/logout",
        element: <Logout />
      },
      {
        path: "/recuperar-cuenta",
        element: <RecuperarCuenta />
      },
      {
        path: "/restrablecer-pass/:email",
        element: <RestablecerContrasena />
      },
      {
        path: '/socket',
        element: <Socket />
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
