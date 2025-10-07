import React from 'react'
// import 'archivo.css'

const Titulo = ({ titulo, subtitulo, tituloOpcional, ...res }) => {
  return (
    <>
      {  tituloOpcional ? <p>{tituloOpcional}</p> : "" }
      {  tituloOpcional && <p>{tituloOpcional}</p> }
      <h1 {...res} >
        {titulo}
        {subtitulo}
      </h1>
    </>
  )
}

export default Titulo