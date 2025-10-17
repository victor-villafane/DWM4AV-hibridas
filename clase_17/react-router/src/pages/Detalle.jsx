import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const Detalle = () => {
    const [personaje, setPersonaje] = useState(null)
    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        fetch("https://hp-api.onrender.com/api/character/" + params.id)
            .then((res) => res.json())
            .then(data => setPersonaje(data[0]))
            .catch(err => console.log(err))
    }, [])

    console.log(personaje)

    if( personaje == null ){
        return <div>Cargando...</div>
    }

    return (
        <div>
            <h1>{personaje.name}</h1>
            <img src={personaje.image} width="200px" alt="" />
            <Link to="/listado">Volver</Link>
        </div>
    )
}

export default Detalle