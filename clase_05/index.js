import express from "express"
import { createPage } from "./pages/utils.js"
import { readFile } from "node:fs/promises"

const app = express()

app.get("/", (req, res) => {
    readFile("./data/productos.json", "utf8")
        .then( (data) => JSON.parse(data) )
        .catch( err => console.error(err) )
        .then( (productos) => {
            let html = "<ul>"
            productos.forEach( producto => {
                html += `<li>${producto.id} - ${producto.nombre} <a href="/${producto.id}" >Ver</a></li>`
            } )
            html += "</ul>"
            res.send( createPage( "Productos", html ) )
        } )
} )

app.get("/:id", (req, res) => {
    const id = req.params.id
    const producto = productos.find( (p) => p.id == id )
    let html = ""
    if( producto ){
         html += `<p>${producto.id} - ${producto.nombre} - ${producto.precio}</p>`
         html += `<a href="/" >Volver</a>`
    }else{
        html += "<p>No se encontro el producto</p>"
    }

    res.send( createPage("Detalle producto", html) )
})

app.listen(2025, () => {
    console.log("funcionando")
})