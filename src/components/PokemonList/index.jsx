import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Pagination from '../Pagination';
import { useNavigate } from "react-router";

const PokemonList = () => {

  const [ pokemonList, setPokemonList ] = useState(null)
  const [ loading, setLoading ] = useState(true)
  const [ currentPage, setCurrentPage ] = useState('https://pokeapi.co/api/v2/pokemon')
  const [ prevPage, setPrevPage ] = useState()
  const [ nextPage, setNextPage ] = useState()

  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(
      currentPage, 
      { cancelToken: new axios.CancelToken( canceler => cancel = canceler)}
    ).then( res => {
      setLoading(false)
      setPrevPage(res.data.previous)
      setNextPage(res.data.next)
      setPokemonList(res.data.results)
    })

    return () => cancel.cancel
  },[currentPage]);

  if (loading) return "loading..."

  const goToNextPage = () => setCurrentPage(nextPage)
  const goToPrevPage = () => setCurrentPage(prevPage)

  return (
    <div >
      <h1>Lista</h1>
      <div >
        <ul>
          { pokemonList && pokemonList.map( pkmn => (<li key={pkmn.url} onClick={ () => navigate(`/pokemon/${pkmn.name}`)}>{pkmn.name}</li>) )}
        </ul>
        <Pagination 
          goToPrevPage={prevPage ? goToPrevPage : null}
          goToNextPage={nextPage ? goToNextPage : null}
        />
      </div>
    </div>
  )

}

export default PokemonList