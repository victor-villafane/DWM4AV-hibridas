import express from "express"
import ProductosRoute from "./routes/productos.route.js"
import ProductosApiRoute from "./api/routes/productos.api.routes.js"
import ClientesApiRoute from "./api/routes/clientes.api.routes.js"
import swaggerFile from './swagger.output.json' with { type: 'json' }
import swaggerUI from 'swagger-ui-express'

const app = express()

app.use( express.urlencoded({extended: true}) )
app.use( express.json() )
//app.use( express.static("/public") )
app.use( '/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerFile) )

app.use( "/productos",ProductosRoute )
app.use( "/api/productos",ProductosApiRoute )
app.use("/api/clientes", ClientesApiRoute)

app.listen(3000, () => {
    console.log("funcionando")
})