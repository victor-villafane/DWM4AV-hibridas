import express from "express"
import * as controller from "../controllers/productos.controller.js"

const route = express.Router()

route.get("/", controller.getProductos)

route.get("/nuevo", controller.nuevoProducto)
route.post("/nuevo", controller.guardarProducto)

route.get("/:id", controller.getProductosById)


export default route