import React, { useState, useEffect } from 'react'
import Listado from './Listado'

const TestUseEffect = () => {

    const [usuarios, setUsuarios] = useState([])
    const [recargar, setRecargar] = useState(false)
    // if( usuarios.length == 0 ){
    //     setUsuarios( JSON.parse(localStorage.getItem("usuarios")) )
    // }

    useEffect(() => {
        //en el primer renderizado o cuando se actualiza una de las variables del array
        setUsuarios(JSON.parse(localStorage.getItem("usuarios")))

        const idIntervalo = setInterval(() => {
            setRecargar(!recargar)
            console.log("Recargar tabla de personajes")
        }, 1000)

        return () => {  //solo se ejecuta cuando el componente desaparece
            clearInterval(idIntervalo)
        }

    }, [recargar])

    return (
        <div>
            {/* <button onClick={ () =>  setRecargar(!recargar) } >recargar</button> */}
            {/* {
                usuarios.map(usuario => <p key={usuario.id}>{usuario.nombre}</p>)
            } */}
            <Listado personajes={usuarios} />
        </div>
    )
}

export default TestUseEffect