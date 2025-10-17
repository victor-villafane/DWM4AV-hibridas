import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const Listado = () => {

    const [personajes, setPersonajes] = useState([])
    const [ next, setNext ] = useState("") 
    const [ previous, setPrevious ] = useState("") 
    const [ url, setUrl ] = useState("https://pokeapi.co/api/v2/pokemon?limit=20")
    useEffect(() => {
        // fetch("https://hp-api.onrender.com/api/characters")
        fetch(url)
            .then(res => res.json())
            .then(characters => {
                setPersonajes(characters.results)
                setNext(characters.next)
                setPrevious(characters.previous)
            })
            .catch(err => console.log(err.message))
    }, [url])

    return (
        <div>
            <ul>
                {
                    personajes.map(personaje =>
                        <li key={personaje.name} >
                            {personaje.name} - <Link to={`/listado/${personaje.name}`} >Ver</Link>
                        </li>)
                }
            </ul>
            { previous?.length > 0 && <button onClick={ () => setUrl(previous) } >Prev</button>}
            { next?.length > 0 && <button onClick={ () => setUrl(next) } >Next</button>}
        </div>
    )
}

export default Listado