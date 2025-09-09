import * as services from "../../services/productos.services.js"

export function getProductos(req, res){
    services.getProductos(false)
        .then( productos => res.status(200).json(productos) )
        .catch( err => res.status(500).json( {message: "error interno del servidor"} ) )
}

export function getProductosById(req, res){
    const id = req.params.id
    services.getProductosById(id)
        .then( producto => {
            if( producto ){
                res.status(200).json(producto)
            }else{
                res.status(404).json( {message: "Recurso no encontrado"} )
            }
        } )
        .catch( err => res.status(500).json( {message: "error interno del servidor"} ) )
}
