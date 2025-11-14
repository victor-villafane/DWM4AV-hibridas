import { call } from "./api.services"

const uri = "http://localhost:2025/api/usuarios"
export function authLogin(credenciales) {
    return fetch( uri + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credenciales)
    })
}

export function authRegister(credenciales){
    return fetch( uri , {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(credenciales)
    })
}

export function recuperarCuenta(email){
    return call({ uri: 'usuarios/recuperar-cuenta', method: "POST", body: {email: email} })
}

export function restablecerContrasena(token, pass){
    return call({ uri: 'usuarios/restablecer', method: "POST", body: { token, password: pass } })
}