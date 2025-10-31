import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router'
import { SessionContext, useToken } from '../contexts/SessionContext'

const Listado = () => {

    const [productos, setProductos] = useState([])
    const token = useToken()
    useEffect(() => {
        fetch("http://localhost:2025/api/productos", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(res => {
                if( !res.ok ) throw new Error("Fetch error")
                return res.json()
            })
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
                        <li key={producto._id} >
                            {producto.nombre} - <Link to={`/listado/${producto._id}`} >Ver</Link>
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Listado