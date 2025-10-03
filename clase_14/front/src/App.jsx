import React, {useState} from 'react'

const App = () => {

  const [ tareas, setTareas ] = useState([
    { id: 1, texto: "Comprar pan", completada: false },
    { id: 2, texto: "Limpiar", completada: true },
    { id: 3, texto: "Revisar codigo", completada: false }
  ])
  const [ filtro, setFiltro ] = useState("todas")
  const [nuevaTarea, setNuevaTarea] = useState("")

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

  const handleNuevaTarea = () => {
    console.log("nueva tarea")
    // const auxTarea = [ ...tareas ]
    // auxTarea.push({ id: tareas.length + 1, texto: nuevaTarea, completada: false })
    setTareas([ ...tareas, { id: tareas.length + 1, texto: nuevaTarea, completada: false } ])
  }

  const handleEliminar = (id) => {
    setTareas( tareas.filter( tarea => tarea.id != id ) )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTareas([ ...tareas, { id: tareas.length + 1, texto: e.target.tarea_name.value, completada: false } ])
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <div>
        <input type="text" onChange={ (e) => setNuevaTarea(e.target.value) } placeholder='Nombre de la tarea'/>
        <button onClick={ handleNuevaTarea } >Nueva Tarea</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Nombre de la tarea' name='tarea_name'/>
        <button type='submit' >Nueva Tarea</button>
      </form>
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
            <button onClick={ () => handleEliminar(tarea.id) } >
              Eliminar
            </button>
          </div>
        ) )
      }
    </div>
  )
}



export default App