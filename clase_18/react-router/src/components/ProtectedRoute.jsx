import React from 'react'
import { Navigate } from 'react-router'

const ProtectedRoute = ({ component }) => {
    //Falta validar con la api o con la session

    const session = JSON.parse(localStorage.getItem("session"))
    console.log(session)

    if (session) return component
    
    return <Navigate to="/login" />

}

export default ProtectedRoute