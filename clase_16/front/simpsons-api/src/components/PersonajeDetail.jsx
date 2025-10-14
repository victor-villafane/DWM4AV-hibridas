import React from 'react'

const PersonajeDetail = ({selectedUser}) => {
    return (
        <div>
            <h1>Nombre: {selectedUser.name}</h1>
            <p>Trabajo: {selectedUser.occupation}</p>
            <p>Edad: {selectedUser.age}</p>
        </div>
    )
}

export default PersonajeDetail