const http = require("http") //importamos usando commonjs
//import http from "http" -> necesitamos mas configuracion

const listado = [
    {
        id: 1,
        nombre: "Juan",
        apellido: "Perez"
    },
    {
        id: 2,
        nombre: "Ana",
        apellido: "Gomez"
    },
    {
        id: 3,
        nombre: "Luis",
        apellido: "Martinez"
    }
]

const server = http.createServer( function(request, response){
    console.log(request.url)
    response.write("<h1>Mi espectacular pagina web!</h1>")
    // response.write("<br>")
    switch(request.url){
        case "/":
            response.write("Estoy en home")
            break
        case "/usuarios":
            response.write("Estoy en /usuarios")
            response.write("<ul>")
            listado.forEach( usuario => {
                response.write(`<li>${usuario.id} - ${usuario.nombre} - ${usuario.apellido}</li>`)
            } )
            response.write("</ul>")
            break
        default:
            response.write("No se encontro")
            break
    }
    response.end()
} )

server.listen( 3000, () => {
    console.log("Todo funcionando")
})