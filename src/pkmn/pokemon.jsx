import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pokemon = () => {
  const api = 'https://pokeapi.co/api/v2/'

  const [ pkmn, setPokemon ] = useState(null) 

  useEffect( () => {
    axios.get(api + 'pokemon/9').then(
      res => {
        setPokemon(res.data)
        console.log(res.data)
        console.log(res.data.sprites.front_default)
        console.log(res.data.types)
        console.log(res.data.sprites.versions.yellow)
      }
    )
  }, [])

  return (
    <div>
      <h3>{ pkmn && pkmn.name }</h3>
      <img src={ pkmn && pkmn.sprites.front_default } alt={ pkmn && pkmn.name }/>
      <img src={ pkmn && pkmn.sprites.back_default } alt={ pkmn && pkmn.name }/>
      <img src={ pkmn && pkmn.sprites.other.dream_world.front_default } alt={ pkmn && pkmn.name }/>
      {/* <img src={ pkmn && pkmn.sprites.versions.yellow.front_default } alt={ pkmn && pkmn.name }/> */}
      <span> { pkmn && Object.keys(pkmn.types).map( (res, index) => {
        <div>
          <em>{res}</em>
          <strong>{index}</strong>
        </div>
      } )} </span>
    </div>
  )
}

export default Pokemon