import { Link } from 'react-router'
import { useProductos } from '../hooks/Productos.jsx'

const Listado = () => {

    const { productos, error, loading } = useProductos()

    if (loading) return <div>Cargando</div>

    if (error) return <div>{error}</div>

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