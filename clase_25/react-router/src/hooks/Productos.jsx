import { useEffect, useState } from "react"
import { getProductoById, getProductos } from "../services/productos.services"

export function useProductos() {
    const [ productos, setProductos ] = useState([])
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getProductos()
            .then(products => {
                setProductos(products)
            })
            .catch(err => setError(err.message))
            .finally( () => setLoading(false) )
    }, [])

    return {productos, error, loading}
}

export function useProducto(id){
    const [ producto, setProducto ] = useState([])
    const [ error, setError ] = useState("")
    const [ loading, setLoading ] = useState(true)

    useEffect(() => {
        getProductoById(id)
            .then(product => {
                setProducto(product)
                console.log(product)
            })
            .catch(err => setError(err.message))
            .finally( () => setLoading(false) )
    }, [])

    return {producto, error, loading}
}