import React, { useState } from 'react'
//Functional component
export default function App() {
  /* todo el js que quieran */
  const soyUnaVariable = "Hola soy una variable"
  const listadoUsuarios = [
    {
      nombre: "nombre 1",
      precio: "1000"
    }, 
    {
      nombre: "nombre 2",
      precio: "1100"
    }, 
    {
      nombre: "nombre 3",
      precio: "1200"
    }
  ]

  // const listadoUsuariosJSX = listadoUsuarios.map( usuario => <p>{ usuario.nombre }</p> )
  // let contador = 0
  const [ contador, setContador ] = useState([])
  const [ email, setEmail ] = useState([])
  const [ user, setUser ] = useState([])
  const [ pass, setPass ] = useState([])

  function miFuncion(){
    setContador( contador + 1 )
    console.log("Me llamaron", contador)
  }

  function hadleChangeEmail(e){
    // setContador()
    console.log(e.target.value)
    setEmail(e.target.value)
  }

  function handleChangeUser(e){
    setUser(e.target.value)
  }

  function handleChangePass(e){
    setPass(e.target.value)
  }

  function decirHola(nombre){
    console.log("hola " + nombre)
  }

  function handleSubmit(e){
    e.preventDefault()
    console.log(e.target.email.value)
    console.log(e.target.user.value)
    console.log(e.target.pass.value)
  }

  /* */
  return (
      <>
        <h2>Email: {email}</h2> <br></br>
        <h2>User: {user}</h2> <br></br>
        <h2>Pass: {pass}</h2> <br></br>
        <h1>Valor de mi contador</h1>
        <h1 className="text-danger" >
          { listadoUsuarios.map( (usuario, indice) => <p key={ indice } >{ usuario.nombre } 
            <button onClick={ () => decirHola(usuario.nombre)  } >
              Click!
            </button> </p> ) }
        </h1>
        <form onSubmit={ handleSubmit }>
          <input type="text" onChange={ hadleChangeEmail } name='email'/>
          <input type="text" onChange={ handleChangeUser } name='user'/>
          <input type="text" onChange={ handleChangePass } name='pass'/>
          <button type='submit' >mostrar</button>
        </form>
        <p>
          Hola2
        </p>
        { contador }
        <button onClick={ miFuncion } >Click</button>
      </>)
}
//Arrow function component
// const App = () => {
//   return <h1>Hola!</h1>
// }

// export default App
// import React from 'react'
// class App extends React.Component{
//   render(){
//     return <h1>Hola!</h1>
//   }
// }

// export default App