import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Listado = () => {

    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        fetch("http://localhost:2025/api/productos")
            .then(res => res.json())
            .then(products => {
                setProductos(products)
                console.log(products)
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div>
            <ul>
                {
                    productos.map(producto =>
                        <li key={producto.nombre} >
                            {producto.nombre} - <Link to={`/listado/${producto.id}`} >Ver</Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Listado