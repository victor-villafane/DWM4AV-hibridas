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

export function editarFormulario(req, res){
    const id = req.params.id
    service.getProductosById(id)
        .then( producto => res.send( view.editarFormulario(producto) ) )
    
}

export function editarProducto(req, res){
    const id = req.params.id
    const producto = {
        id: id,
        nombre: req.body.nombre,
        precio: req.body.precio
    }
    service.editarProducto( producto )
        .then( productoEditado => res.send( view.createProductDetail(productoEditado) ) )
}

export function eliminarFormulario(req, res){
    const id = req.params.id
    service.getProductosById( id )
        .then( producto => res.send( view.eliminarFormulario(producto) ) )    
}

export function eliminarProducto(req, res){
    const id = req.params.id
    service.eliminarProductoLogico( id )
        .then( producto => res.send( view.eliminarExito() ) )
}