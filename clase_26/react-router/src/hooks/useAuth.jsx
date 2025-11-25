import { useState } from "react"
import { authLogin } from "../services/auth.services"

export function useAuth(credenciales) {
    const [error, setError] = useState("")
    const { usuario, setUsuario } = useState({})

    authLogin(credenciales)
        .then(res => {
            if (!res.ok) throw new Error("Credenciales invalidas")
            return res.json()
        })
        .then(usuario => {
            setError("")
            setUsuario(usuario)
        })
        .catch(err => setError("Credenciales invalidas"))

    return { error, usuario }
}