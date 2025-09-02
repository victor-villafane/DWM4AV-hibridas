import { writeFile } from "node:fs";
import { readFile } from "node:fs/promises"

export function getProductos() {
    return readFile("./data/productos.json", "utf8")
        .then((data) => JSON.parse(data))
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
        productos.push(producto)

        return writeFile("./data/productos.json", JSON.stringify(productos))
    } )
}