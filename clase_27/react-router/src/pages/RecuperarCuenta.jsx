import { useState } from "react"
import { recuperarCuenta } from "../services/auth.services"

const RecuperarCuenta = () => {
    const [email, setEmail] = useState()

    const handleRecupear = () => {
        recuperarCuenta(email)
            .then( res => console.log(res) )
            .catch( err => console.log(err) )
    }

    return (
        <div>
            <label className="block" >Ingresar email para recuperar la cuenta</label>
            <input type="email" onChange={ (e) => setEmail(e.target.value) } />
            <button onClick={ handleRecupear } >Recuperar</button>
        </div>
    )
}

export default RecuperarCuenta