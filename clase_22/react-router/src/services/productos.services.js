import { call } from "./api.services"

export function getProductos() {
    return call({ uri: "productos", method: "GET" })
}

export function getProductoById(id) {
    return call({ uri: `productos/${id}`, method: "GET" })
}

export function createProducto(payload){
    return call( {uri: "productos", method: "POST", body: payload} )
}

export function editProducto(id, payload){
    return call({uri: `productos/${id}`, method: "PUT", body: payload})
}

export function deleteProducto(id){
    return call( {uri: `productos/${id}`, method: "DELETE" } )
}