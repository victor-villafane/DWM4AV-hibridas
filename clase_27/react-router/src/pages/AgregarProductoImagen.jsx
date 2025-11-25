import React, { Activity, useState } from 'react'
import { createProducto } from '../services/productos.services'

const AgregarProductoImagen = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const file = e.target.file.files[0]
        
        const formData = new FormData()
        formData.append("file", file)

        fetch( "http://localhost:2025/upload", {
            method: "POST",
            body: formData
        } )
        .then((res) => res.json() )
        .then( data => console.log(data) )
        .catch( err => console.log(err) )
    }
    return (
        <div>
            <form onSubmit={handleSubmit} enctype='multipart/form-data'>
                <input type="file" name='file' />
                <button type='submit' >Guardar</button>
            </form>
        </div>
    )
}

export default AgregarProductoImagen