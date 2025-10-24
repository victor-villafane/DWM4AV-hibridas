import { MongoClient, ObjectId } from "mongodb"
import bcrypt from 'bcrypt'
const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")

export async function createUser(usuario){
    await client.connect()
    const exite = await db.collection("usuarios").findOne({ email: usuario.email })
    if( exite ) throw new Error("No se pudo crear el usuario")

    const usuarioNuevo = { ...usuario, confirmPassword: undefined }
    usuarioNuevo.password = await bcrypt.hash(usuario.password, 10)

    await db.collection("usuarios").insertOne(usuarioNuevo)
    return { ...usuario, password: undefined, confirmPassword: undefined }
}