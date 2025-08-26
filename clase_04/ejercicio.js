// const http = require("http") //importamos usando commonjs
// //import http from "http" -> necesitamos mas configuracion
// const listado = require("./data/productos.js")
// const pages = require("./pages/utils.js")

import http from "http"
import listado from "./data/productos.js"
import { createProductList, createPage } from "./pages/utils.js"
import { readFile } from "fs"

const server = http.createServer( function(request, response){
    console.log(request.url)

    switch(request.url){
        case "/":
            response.write( createPage("Home", "Juan Perez") )
            break
        case "/materia":
            response.write( createPage("Materia", "Aplicaciones Hibridas") )
            break
        case "/profesor":
            response.write( createPage("Profesor", "Pepe perez") )
            break            
        case "/productos":
            response.write( createPage("Listado de productos", createProductList(listado)) )
            break
        case "/home":
            readFile('./public/home.html',"utf-8", (err, data) => {
                if (err) throw err;
                response.write(data)
                response.end()
            });     
            break
        case "/contacto":
            readFile('./public/contacto.html',"utf-8", (err, data) => {
                if (err) throw err;
                response.write(data)
                response.end()
            });     
            break            
        case "/style.css":
            readFile('./public/style.css',"utf-8", (err, data) => {
                if (err) throw err;
                    response.write(data)
                    response.end()
                });     
            break    
        case "/img/1.png":
            readFile('./public/img/1.png', (err, data) => {
                if (err) throw err;
                    response.write(data)
                    response.end()
                });     
            break                   
        default:
            response.write( createPage("Materia", "No se encontro") )
            break
    }
    // response.end()
} )

server.listen( 2023, () => {
    console.log("Todo funcionando en en puerto 2023")
})