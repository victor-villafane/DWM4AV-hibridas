import express from "express"
import { readFile } from "fs"

const app = express()

app.use( "/", express.static("public") )

app.get("/home", (req, res) => {
    console.log(req.query)
    const nombre = req.query.nombre
    const apellido = req.query.apellido
    res.send("Hola " + nombre + " " + apellido)
})

app.post("/home", (req, res) => {
    console.log(req.body)
    res.send("Esto es un post")
})

app.listen(2025, () => console.log("Funcionando"))