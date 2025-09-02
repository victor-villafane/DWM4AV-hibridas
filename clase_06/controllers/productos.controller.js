import * as service from "../services/productos.services.js";
import * as view from "../views/productos.view.js";

export function getProductos(req, res){
    service.getProductos()
        .then( (productos) => res.send(  view.createProductPage(productos)) )
}

export function getProductosById(req, res){
    const id = req.params.id
    service.getProductosById(id)
        .then( producto => res.send( view.createProductDetail(producto)) )
}

export function nuevoProducto(req, res){
    res.send( view.nuevoProducto() )
}

export function guardarProducto(req, res){
    console.log(req.body)
    service.guardarProducto( respuesta => {
        res.send(respuesta)
    } )
}