import React from "react"
import { useNavigate  } from "react-router-dom"
import { Container } from './styled'


const Home = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <h1>Tips para usar esta pokedex</h1>
      <h3>Ingresa tu pokemon favorito en nuestro buscador</h3>
      <h3>Consulta todos los pokemon disponibles en Kanto!</h3>
      <span onClick={() => navigate('/pokemon') }>»</span>
    </Container>
  )
}


export default Home