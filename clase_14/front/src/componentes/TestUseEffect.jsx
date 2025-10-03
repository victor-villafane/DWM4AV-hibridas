import React, { useState, useEffect } from 'react'

const TestUseEffect = () => {

    const [usuarios, setUsuarios] = useState([])
    const [recargar, setRecargar] = useState(false)
    const [posicionActual, setPosicionActual] = useState({})
    const [ idWatch, setWatch ] = useState(0)
    // if( usuarios.length == 0 ){
    //     setUsuarios( JSON.parse( localStorage.getItem("usuarios") ) )
    // }

    useEffect(() => {
        //componentDidMount
        // setUsuarios( JSON.parse( localStorage.getItem("usuarios") ) )
        // console.log("LLAMARON AL USEEFFECT")
        // const idIntervalo = setInterval( () => {
        //     setRecargar( !recargar )
        // }, 1000 )
        // return () => {
        //     //componentDidUnmount
        //     console.log("Adios.....")
        //     clearInterval( idIntervalo )
        // }
        const idIntervalo = setInterval( () => {
            const idNavigator = navigator.geolocation.watchPosition((posicion) => {
                setPosicionActual({
                    latitud: posicion.coords.latitude,
                    longitude: posicion.coords.longitude,
                })
            })
            setWatch(idNavigator)
            console.log("consulta ubicacion")
        }, 1000 )
        return () => {
            navigator.geolocation.clearWatch(idWatch)
            clearInterval(idIntervalo)
        }
    }, [recargar])//componentDidUpdate

    // clearInterval(idIntervalo)
    // const idTimeOut = setTimeout( () => {}, 1000 )

    return (
        <div>
            <span>{posicionActual.latitud},</span>
            <span>{posicionActual.longitude}</span>
            {
                usuarios.map(usuario => <p key={usuario.id} > {usuario.nombre} </p>)
            }
            <button onClick={() => setRecargar(!recargar)} >Recargar</button>
        </div>
    )
}

export default TestUseEffect