import { MongoClient, ObjectId } from "mongodb"

const client = new MongoClient("mongodb+srv://admin:admin@hibridas.2awt6xp.mongodb.net/")
const db = client.db("DWM4AV")

export async function getClientes( filter = {} ) {
    const filterMongo = { eliminado: { $ne: true } }

    await client.connect()
    return db.collection("clientes").find(filterMongo).toArray() 
}

export async function getClientesById(id) {
    await client.connect()
    return db.collection("clientes").findOne( { _id: new ObjectId(id) } )
}

export async function guardarCliente(cliente){
    await client.connect()
    return db.collection("clientes").insertOne(cliente)
}

export function editarCliente(cliente, id){
    return db.collection("clientes").replaceOne({ _id: new ObjectId(id) }, cliente)
}

export function eliminarClienteLogico(id){
    return db.collection("clientes").updateOne({ _id: new ObjectId(id) }, {
        $set: { eliminado: true }
    })
}
export function editarClienteParcial(cliente, id){
    return db.collection("clientes").updateOne({ _id: new ObjectId(id) }, {$set: cliente})
}

export function agregarACarrito(idCliente, producto){
    return db.collection("clientes").updateOne({ _id: new ObjectId(idCliente) }, {
        $addToSet: { carrito: { ...producto } } //No deja duplicados, $push les deja tener duplicados
    }, { upsert: true })
}