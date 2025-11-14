import React, { Activity, useState } from 'react'
import { createProducto } from '../services/productos.services'

const AgregarProducto = () => {
    const [errores, setErrores] = useState({})
    const [success, setSuccess] = useState(null)

    const validateForm = (payload) => {
        const error = {}
        if (!payload.nombre) error.nombre = 'El nombre es un campo requerido'
        if (!payload.categoria) error.categoria = 'El categoria es un campo requerido'
        if (!payload.precio) error.precio = 'El precio es un campo requerido'
        setErrores(error)
        return Object.keys(error).length == 0
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const payload = {
            nombre: e.target.nombre.value,
            categoria: e.target.categoria.value,
            precio: e.target.precio.value
        }

        if (!validateForm(payload)) return

        createProducto(payload)
            .then((res) => {
                setSuccess('OK')
                e.target.nombre.value = ''
                e.target.categoria.value = ''
                e.target.precio.value = ''
            })
            .catch((err) => console.log(err))
    }
    return (
        <div>
            <Activity mode={ success == 'OK' ? 'visible' : 'hidden' } >
                <p className='text-center text-xl' >Producto agregado exitosamente</p>
            </Activity>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Nombre:</label>
                    <input className='m-2 border border-gray-300 rounded-lg p-2' type='text' name='nombre' />
                    <Activity mode={errores.nombre ? 'visible' : 'hidden'}>
                        <p className='text-center text-sm' >{errores.nombre}</p>
                    </Activity>
                </div>
                <div>
                    <label>Categoria:</label>
                    <input type='text' className='m-2 border border-gray-300 rounded-lg p-2' name='categoria' />
                    <Activity mode={errores.categoria ? 'visible' : 'hidden'}>
                        <p className='text-center text-sm' >{errores.categoria}</p>
                    </Activity>
                </div>
                <div>
                    <label>Precio:</label>
                    <input type='number' className='m-2 border border-gray-300 rounded-lg p-2' name='precio' />
                    <Activity mode={errores.precio ? 'visible' : 'hidden'}>
                        <p className='text-center text-sm' >{errores.precio}</p>
                    </Activity>
                </div>
                <button type='submit' >Guardar</button>
            </form>
        </div>
    )
}

export default AgregarProducto