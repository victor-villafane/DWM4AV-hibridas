import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { SessionContext, useLogin } from '../contexts/SessionContext'
import { authRegister } from '../services/auth.services'

const Register = () => {

    const navitate = useNavigate()

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [age, setAge] = useState(0)

    const [error, setError] = useState("")
    const [errores, setErrores] = useState({})
    
    const validateForm = () => {
        const errors = {}
        // const validateError = true
        if( !email ){
            errors.email = "El email es requerido"
            // validateError = false
        }

        if( !pass ){
            errors.pass = "La contraseña es requerida"
            // validateError = false

        }

        if( !passwordConfirm ){
            errors.passwordConfirm = "Es necesario confirmar la contraseña"
            // validateError = false
        
        }

        if( age && age < 0 ){
            errors.age = "La edad no puede ser negativa"
            // validateError = false
        
        }

        setErrores(errors)

        return  Object.keys( errors ).length == 0
    }

    const handleSubmit = () => {

        if( !validateForm() ){
            return
        }

        const payload = {
            email: email,
            password: pass,
            confirmPassword: passwordConfirm
        }

        if( age ){
            payload.age = age
        }

        authRegister(payload)
            .then(res => {
                if (!res.ok) throw new Error("Credenciales invalidas")
                return res.json()
            })
            .then(usuario => {
                setError("")
                setErrores({})
                navitate('/login')
            })
            .catch(err => {
                console.log(err)
                setError("Credenciales invalidas")
            })
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4' >
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    {error.length > 0 && <p className='text-center' >{error}</p>}
                    <div className="text-center mb-8">
                        <h1 className='text-3xl font-bold text-gray-800' >Bienvenido</h1>
                        <p className='text-gray-500 mt-2' >Crear cuenta</p>
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
                            { errores.email && <p className='text-red-600 text-sm mt-1' >{errores.email}</p> }
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
                            { errores.pass && <p className='text-red-600 text-sm mt-1' >{errores.pass}</p> }
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Confirmar Contraseña
                            </label>
                            <input
                                className='w-full pr-4 py-3 border rounded-lg focus-ring-2 focus:ring-purple-500 focus-border-trasparent outline-none transition'
                                onChange={(e) => setPasswordConfirm(e.target.value)}
                                type="password"
                            />
                            { errores.passwordConfirm && <p className='text-red-600 text-sm mt-1' >{errores.passwordConfirm}</p> }
                        </div>
                        <div>
                            <label className='block text-sm font-medium text-gray-700 mb-2'>
                                Edad
                            </label>
                            <input
                                className='w-full pr-4 py-3 border rounded-lg focus-ring-2 focus:ring-purple-500 focus-border-trasparent outline-none transition'
                                onChange={(e) => setAge(e.target.value)}
                                type="number"
                            />
                            { errores.age && <p className='text-red-600 text-sm mt-1' >{errores.age}</p> }
                        </div>                        
                    </div>
                    <button
                        className='mt-2'
                        onClick={handleSubmit}
                    >
                        Registrar cuenta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register