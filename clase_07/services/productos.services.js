import { readFile, writeFile } from "node:fs/promises"

export function getProductos( eliminado = true ) {
    return readFile("./data/productos.json", "utf8")
        .then((data) => JSON.parse(data))
        .then( productos => productos.filter( p => p.eliminado != eliminado ) )
        .catch(err => {
            console.error(err)  //logs
            return [];
        })
}

export function getProductosById(id) {
    return getProductos().then((productos) => {
        const producto = productos.find((p) => p.id == id)
        return producto
    })
}

export function guardarProducto(producto){
    return getProductos().then( productos => {

        producto.id = productos.length + 1

        productos.push(producto)

        return writeFile("./data/productos.json", JSON.stringify(productos))
    } )
}

export function editarProducto(producto){
        return getProductos().then( async productos => {
        
        const productosFiltrados = productos.filter( p => p.id != producto.id )
        productosFiltrados.push(producto)

        await writeFile("./data/productos.json", JSON.stringify(productosFiltrados))

        return producto
    } )
}

export function eliminarProductoFisica(id){
    return getProductos().then( async productos => {
        
        const productosFiltrados = productos.filter( p => p.id != id )

        await writeFile("./data/productos.json", JSON.stringify(productosFiltrados))

    } )
}

export function eliminarProductoLogico(id){
    return getProductos().then( async productos => {
        
        const productosModificado = productos.map( p => {
            if( p.id == id ){
                p.eliminado = true
            }
            return p
        } )

        await writeFile("./data/productos.json", JSON.stringify(productosModificado))

    } )
}