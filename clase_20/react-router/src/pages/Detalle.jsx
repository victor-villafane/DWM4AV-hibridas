import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'

const Detalle = () => {
    const [producto, setProducto] = useState(null)
    const params = useParams()
    console.log(params.id)

    useEffect(() => {
        // fetch("https://hp-api.onrender.com/api/character/" + params.id)
        fetch("http://localhost:2025/api/productos/" + params.id)
            .then((res) => res.json())
            .then(data => setProducto(data))
            .catch(err => console.log(err))
    }, [])

    console.log(producto)

    if( producto == null ){
        return <div>Cargando...</div>
    }

    return (
        <div>
            <h1 className='text-4xl'>Nombre: {producto.nombre}</h1>
            <p>Categoria: {producto.categoria}</p>
            <p>Precio: {producto.precio}</p>
            <Link to="/listado">Volver</Link>
        </div>
    )
}

export default Detalle