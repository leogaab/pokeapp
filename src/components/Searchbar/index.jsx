import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, InputContainer, Input, ButtonContainer, Button } from './styled'

const Searchbar = () => {
  const [ search, setSearch ] = useState("");
  const navigate = useNavigate()

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <Container className="searchbar-container">
      <InputContainer className="searchbar">
        <Input placeholder="Buscar pokemon..." onChange={onChange} />
      </InputContainer>
      <ButtonContainer>
        <Button onClick={() => navigate(`/pokemon/${search}`)}>Buscar</Button>
      </ButtonContainer>
      <h3>{search}</h3>
    </Container>
  );
};

export default Searchbar;