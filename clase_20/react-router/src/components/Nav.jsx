import React from 'react'
import { Link } from 'react-router'
import { useUsuario } from '../contexts/SessionContext'

const Nav = () => {
  const usuario = useUsuario()
  return (
    <header>
      <h1>{usuario?.email}</h1>
      <nav>
        <ul>
          <li><Link to="/" >Home</Link></li>
          {
            usuario?.email && <li><Link to="/listado" >Listado</Link></li>
          }
          {
            usuario?.email && <li><Link to="/logout" >Logout</Link></li>
          }
          {
            !usuario?.email && <li><Link to="/login" >Login</Link></li>
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav