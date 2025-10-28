import { MongoClient, ObjectId } from "mongodb"
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken"
import { crearToken } from "./tokens.services.js"

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")

const SECRET_KEY = "dwm4av"

export async function createUser(usuario){
    await client.connect()
    const exite = await db.collection("usuarios").findOne({ email: usuario.email })
    if( exite ) throw new Error("No se pudo crear el usuario")

    const usuarioNuevo = { email: usuario.email, password: usuario.password }
    if( usuario.age ) usuarioNuevo.age = usuario.age
    usuarioNuevo.password = await bcrypt.hash(usuario.password, 10)

    await db.collection("usuarios").insertOne(usuarioNuevo)
    return { ...usuario, password: undefined, confirmPassword: undefined }
}

export async function login(usuario){
    await client.connect()
    const exite = await db.collection("usuarios").findOne({ email: usuario.email })
    if( !exite ) throw new Error("Credenciales invalidas")
    const token = await crearToken(exite)
    
    const esValido = await bcrypt.compare( usuario.password, exite.password )
    if( !esValido ) throw new Error("Credenciales invalidas")
    
    return { ...exite, password: undefined, confirmPassword: undefined, token: token }
}