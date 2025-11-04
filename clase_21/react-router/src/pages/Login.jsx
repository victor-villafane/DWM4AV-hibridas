import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { SessionContext, useLogin } from '../contexts/SessionContext'
import { authLogin } from '../services/auth.services'
const Login = () => {

    const navitate = useNavigate()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [ error, setError ] = useState("")

    const login = useLogin()

    const handleSubmit = () => {
        console.log(email, pass)
        authLogin({ email, password: pass })
            .then( res => {
                if( !res.ok ) throw new Error("Credenciales invalidas")
                return res.json()
            } )
            .then( usuario => {
                login(usuario)
                setError("")
                navitate('/listado')
            } )
            .catch( err => setError("Credenciales invalidas") )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4' >
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    { error.length > 0 && <p className='text-center' >{error}</p>}
                    <div className="text-center mb-8">
                        <h1 className='text-3xl font-bold text-gray-800' >Bienvenido</h1>
                        <p className='text-gray-500 mt-2' >Ingresar Cuenta</p>
                    </div>
                    <div className='space-y-6' >
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Email
                            </label>
                            <input
                                className='w-full pr-4 py-3 border rounded-lg focus-ring-2 focus:ring-purple-500 focus-border-trasparent outline-none transition'
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                            />
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Contraseña
                            </label>
                            <input
                                className='w-full pr-4 py-3 border rounded-lg focus-ring-2 focus:ring-purple-500 focus-border-trasparent outline-none transition'
                                onChange={(e) => setPass(e.target.value)}
                                type="password"
                            />
                        </div>
                    </div>
                    <button
                        className='' 
                        onClick={handleSubmit} 
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login