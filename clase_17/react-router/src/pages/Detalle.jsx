import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const Detalle = () => {
    const [personaje, setPersonaje] = useState(null)
    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        // fetch("https://hp-api.onrender.com/api/character/" + params.id)
        fetch("https://pokeapi.co/api/v2/pokemon/" + params.id)
            .then((res) => res.json())
            .then(data => setPersonaje(data))
            .catch(err => console.log(err))
    }, [])

    console.log(personaje)

    if( personaje == null ){
        return <div>Cargando...</div>
    }

    return (
        <div>
            <h1>{personaje.name}</h1>
            <img src={personaje.sprites.front_default} width="200px" alt="" />
            <Link to="/listado">Volver</Link>
        </div>
    )
}

export default Detalle