import React, { useState } from 'react'
import { useNavigate } from 'react-router'
const Login = () => {

    const navitate = useNavigate()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const handleSubmit = () => {
        console.log(email, pass)
        //TODO llamar a la api
        localStorage.setItem("session", JSON.stringify({email: email, pass: pass}))
        navitate('/listado')
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4' >
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
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