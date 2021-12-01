import styled from 'styled-components'
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import Pokemon from './components/Pokemon';

const Container = styled.div`
  margin: 0 auto;
`;

function App() {
  return (
      <Container>
        <BrowserRouter>
          <Navbar />
          <Searchbar></Searchbar>
          <Routes>
            <Route exact path="/pokemon" element={<PokemonList />}></Route>
            <Route exact path="/pokemon/:id" element={<Pokemon />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Container>
  )
}

export default App;
