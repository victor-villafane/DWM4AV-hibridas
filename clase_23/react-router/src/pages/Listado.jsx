import { Link } from 'react-router'
import { useProductos } from '../hooks/Productos.jsx'

const Listado = () => {

    const { productos, error, loading } = useProductos()

    if (loading) return <div>Cargando</div>

    if (error) return <div>{error}</div>

    return (
        <div className='p-6 bg-gray-50 min-h-screen' >
            <div className='max-w-7xl mx-auto' >
                <h1 className='text-2xl font-bold text-gray-900 mb-6' >Listado de productos</h1>
                <Link className='bg-blue-300 hover:bg-blue-400 text-white px-4 py-2 rounded-sm text-sm font-medium m-2' to={`/nuevo-producto`} >Nuevo producto</Link>
                <table className='min-w-full divide-y divide-gray-200' >
                    <thead className='bg-gray-50'>
                        <tr>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider' >Nombre</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Categoria</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Precio</th>
                            <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map(producto => (
                                <tr className='hover:bg-gray-100' >
                                    <td className='px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500' >{producto.nombre}</td>
                                    <td className='px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500' >{producto.categoria}</td>
                                    <td className='px-6 py-4 text-left whitespace-nowrap text-sm text-gray-500' >{producto.precio}</td>
                                    <td>
                                        <Link className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-sm text-sm font-medium m-1' to={`/listado/${producto._id}`} >Ver</Link>
                                        <Link className='bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-sm text-sm font-medium m-1' to={`/producto/editar/${producto._id}`} >Editar</Link>
                                        <Link className='bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-sm text-sm font-medium m-1' to={`/producto/eliminar/${producto._id}`} >Eliminar</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Listado