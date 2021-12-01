import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Badge from '../Badge'
import { getPokemon } from '../../Utils/utils'
import { Name, Container, Image, ImageContainer, TextContainer, Id } from "./styled"

const Pokemon = () => {

  const params = useParams()

  const [ pkmn, setPokemon ] = useState(null)

  useEffect( () => {
    getPokemon(params.id).then(
      res => setPokemon(res.data)
    )
  }, [params.id])

  console.log('pkmn', pkmn);

  return (
    <Container>
      <ImageContainer>
        <Image src={ pkmn && pkmn.sprites.other.dream_world.front_default } alt={ pkmn && pkmn.name }/>
      </ImageContainer>
      <TextContainer>
        <Id>#{pkmn?.id}</Id>
        <Name>{ pkmn?.name }</Name>
      </TextContainer>
      { pkmn && pkmn.types.map( (res) => <Badge key={res.slot} type={res.type.name}>{res.type.name} </Badge> )}
    </Container>
  )
}

export default Pokemon