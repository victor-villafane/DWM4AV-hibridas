import React, {useState} from 'react'

const App = () => {
  const [ tareas, setTareas ] = useState([
    { id: 1, texto: "Comprar pan", completada: false },
    { id: 2, texto: "Limpiar", completada: true },
    { id: 3, texto: "Revisar codigo", completada: false }
  ])
  const [ filtro, setFiltro ] = useState("todas")

  const handleToggle = (id) => {
    // const tareasAux = [...tareas]
    // tareas.forEach( tarea => {
    //   if( tarea.id == id ){
    //     tarea.completada = !tarea.completada
    //   }
    // } )
    // setTareas( tareasAux )
    setTareas( tareas.map( tarea => {
      if( tarea.id == id ){
        tarea.completada = !tarea.completada
      }
      return tarea
    } ) )
  } 

  const tareasFiltradas = tareas.filter( tarea => {
    if( filtro == "completadas" ) return tarea.completada
    if( filtro == "pendientes" ) return !tarea.completada
    return true
  } )

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <button onClick={ () => setFiltro("todas") } >Todas</button>
        <button onClick={ () => setFiltro("completadas") } >Completadas</button>
        <button onClick={ () => setFiltro("pendientes") }>Pendientes</button>
      </div>
      {
        tareasFiltradas.map( tarea => (
          <div className='' key={tarea.id} >
            <span>
              {tarea.texto}
            </span>
            <button onClick={ () => handleToggle(tarea.id) } >
              {tarea.completada ? 'Desmarcar' : 'Completar'}
            </button>
            <button>
              Eliminar
            </button>
          </div>
        ) )
      }
    </div>
  )
}

export default App