import { useState } from "react"
import { restablecerContrasena } from "../services/auth.services"
import { useNavigate, useParams } from "react-router"

const RestablecerContrasena = () => {

    const  [pass, setPass] = useState("")
    const params = useParams()
    const navigate = useNavigate()

    const handleRecuperar = () => {
        restablecerContrasena(params.email, pass)
            .then( () => navigate("/login") )
            .catch( (err) => console.error(err) )
    }

    return (
        <div>
            <label className="block">Ingresar nueva contraseña</label>
            <input className="block" type="text" onChange={ (e) => setPass(e.target.value) } />
            <button onClick={handleRecuperar} >Restablecer</button>
        </div>
    )
}

export default RestablecerContrasena