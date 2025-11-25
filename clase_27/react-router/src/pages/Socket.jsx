import React, { useEffect } from 'react'

import { io } from 'socket.io-client'

const socket = io("http://localhost:2025/")

const Socket = () => {
    useEffect(() => {
        socket.on('connect', () => {
            console.log(socket.id)
        })
        socket.on('individual', (data) => {
            console.log("REcibi cosas del back yo solo", data)
        })
        socket.on('todos', ()=>{
            console.log("Recibido todos")
        })
    }, [])

    const handleEmit = () => {
        socket.emit("hola", {
            id: 1,
            usuario: "hola",
            masCosas: [1, 2, 3, 4]
        })
    }

    const handleTodos = () => {
        socket.emit("notificar")
    }

    return (
        <div>
            <button onClick={handleEmit} >click</button>
            <button onClick={handleTodos} >notificar a todos</button>
        </div>
    )
}

export default Socket