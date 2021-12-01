import axios from 'axios'

const api = 'https://pokeapi.co/api/v2/'

export const pokeApi = axios.create({
  baseURL: api,
})

export const getAllPokemons = pokeApi.get('/pokemon')
export const getPokemon = (idOrName) => pokeApi.get(`/pokemon/${idOrName}`)