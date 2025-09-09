import express from "express"
import * as controllers from "../controllers/productos.api.controllers.js"

const route = express.Router()

route.get( "/", controllers.getProductos )
route.get( "/:id", controllers.getProductosById )

export default route