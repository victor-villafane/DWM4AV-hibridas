import React from 'react'
import Item from './Item'

const Listado = ({ personajes }) => {
  return (
    <ul>
        {
            personajes.map( personaje => <Item key={personaje.id} nombre={personaje.nombre} /> )
        }
    </ul>
  )
}

export default Listado