const http = require("http")

http.createServer( function(request, response){
    console.log( request.url )
    response.end("Hola termino el mensaje")
} ).listen(2025)
 //1000 - 65...        :3306 :80 :5173