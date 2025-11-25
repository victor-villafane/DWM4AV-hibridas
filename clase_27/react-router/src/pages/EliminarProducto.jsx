import React from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { useProducto } from '../hooks/Productos'
import { deleteProducto } from '../services/productos.services'

const EliminarProducto = () => {
    const params = useParams()
    const navigate = useNavigate()
    const id = params?.id

    const { producto, loading, error } = useProducto(id)

    if( loading ) return <div>Cargando...</div>

    if( error ) return <div>{error}</div>

    const handleDelete = () => {
        deleteProducto(id)
            .then( () => navigate('/listado') )
            .catch( (err) => console.log(err) )
    }

    return (
        <div>
            <h1 className='text-4xl'>Nombre: {producto.nombre}</h1>
            <p>Categoria: {producto.categoria}</p>
            <p>Precio: {producto.precio}</p>
            <button onClick={handleDelete} className='bg-red-600 text-white p-2 m-2 rounded-lg hover:bg-red-700 trasition duration-200' >Eliminar</button>
            <Link to="/listado">Volver</Link>
        </div>)
}

export default EliminarProducto