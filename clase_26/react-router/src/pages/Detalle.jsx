import { Link, useParams } from 'react-router'
import { useProducto } from '../hooks/Productos'

const Detalle = () => {
    const params = useParams()

    const { producto, loading, error } = useProducto(params.id)

    if (loading) return <div>Cargando...</div>

    if (error) return <div>{error}</div>

    return (
        <div className='max-w-7xl mx-auto p-6' >
            <h1 className='text-4xl font-bold mb-2'>Nombre: {producto.nombre}</h1>
            <p className='text-xl text-gray-600 mb-6' >Categoria: {producto.categoria}</p>
            <div className='space-y-3 mb-6' >
                <p className='font-semibold' >Precio: {producto.precio}</p>
            </div>
            <Link className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-sm text-sm font-medium m-1'  to="/listado">Volver</Link>
        </div>
    )
}

export default Detalle