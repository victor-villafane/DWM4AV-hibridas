import Titulo from './Titulo'
import Layout from './Layout'

const Props = () => {
    return (
        <Layout 
            component={ 
                <Titulo 
                    titulo="Hola soy un titulo prop" 
                    subtitulo="soy un subtitulo prop" 
                    className="text-center" 
                    style={{ color: "green" }} 
                /> 
            } 
        />
    )
}

export default Props