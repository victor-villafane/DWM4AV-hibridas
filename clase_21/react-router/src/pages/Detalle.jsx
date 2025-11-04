import { Link, useParams } from 'react-router'
import { useProducto } from '../hooks/Productos'

const Detalle = () => {
    const params = useParams()

    const { producto, loading, error } = useProducto(params.id)

    if( loading ) return <div>Cargando...</div>

    if( error ) return <div>{error}</div>

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