import express from "express"
import ProductosRoute from "./routes/productos.route.js"

const app = express()

app.use( express.urlencoded({extended: true}) )

app.use( "/productos",ProductosRoute )

app.listen(2025, () => {
    console.log("funcionando")
})