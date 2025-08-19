const http = require("http") //importamos usando commonjs
//import http from "http" -> necesitamos mas configuracion

const listado = [
    {
        id: 1,
        nombre: "Café Expreso",
        precio: 123
    },
    {
        id: 2,
        nombre: "Cafe Latte",
        precio: 200
    },
    {
        id: 3,
        nombre: "Cafe Americano",
        precio: 150
    }
]

const server = http.createServer( function(request, response){
    console.log(request.url)
    response.write(`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Mi espectacular pagina web</title></head><body>`) //alt + 96
    response.write("<h1>Mi espectacular pagina web!</h1>")
    // response.write("<br>")
    switch(request.url){
        case "/":
            response.write("Juan Perez")
            break
        case "/materia":
            response.write("Aplicaciones Hibridas")
            break
        case "/profesor":
            response.write("Pepe perez")
            break            
        case "/productos":
            response.write("<ul>")
            listado.forEach( producto => {
                response.write(`<li>${producto.id} - ${producto.nombre} - ${producto.precio}</li>`)
            } )
            response.write("</ul>")
            break
        default:
            response.write("No se encontro")
            break
    }
    response.write("</body></html>")
    response.end()
} )

server.listen( 2023, () => {
    console.log("Todo funcionando en en puerto 2023")
})