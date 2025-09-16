import { readFile, writeFile } from "node:fs/promises"
import { MongoClient } from "mongodb"
import { type } from "node:os"

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")

export async function getProductos( eliminado = true ) {
    await client.connect()
    return db.collection("productos").find().toArray()
}

export function getProductosById(id) {
    console.log(typeof id)
    return db.collection("productos").findOne( { id: id } )
}

export function guardarProducto(producto){
    return getProductos().then( async productos => {

        producto.id = productos.length + 1

        productos.push(producto)

        await writeFile("./data/productos.json", JSON.stringify(productos))

        return producto
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
        return id
    } )
}
export function editarProductoParcial(producto){
    return getProductos().then( async productos => {
        
        const productosFiltrados = productos.map( p => {
            if( p.id == producto.id ){
                return {
                    id: p.id,
                    nombre: producto.nombre || p.nombre,
                    categoria: producto.categoria || p.categoria,
                    precio: producto.precio || p.precio
                }
            }
            return p
        } )

        await writeFile("./data/productos.json", JSON.stringify(productosFiltrados))

        return producto
    } )
}