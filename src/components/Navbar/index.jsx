import React from "react";
import { useNavigate } from "react-router";
import logo from "../../assets/pkmn_logo.svg";
import { NavContainer, Logo } from "./styled";

const Navbar = () => {

  const navigate = useNavigate()
  
  return (
    <NavContainer>
        <Logo 
          src={logo} 
          alt="pokeapi-logo"
          onClick={() => navigate("/")}
        />
    </NavContainer>
  );
};

export default Navbar;