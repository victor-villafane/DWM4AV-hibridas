import express from "express"
import ProductosRoute from "./routes/productos.route.js"
import ProductosApiRoute from "./api/routes/productos.api.routes.js"

const app = express()

app.use( express.urlencoded({extended: true}) )
app.use( express.json() )
//app.use( express.static("/public") )

app.use( "/productos",ProductosRoute )
app.use( "/api/productos",ProductosApiRoute )

app.listen(2025, () => {
    console.log("funcionando")
})