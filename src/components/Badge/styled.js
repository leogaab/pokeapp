import styled from "styled-components";
import theme from "../theme"

export const BadgeContainer = styled.div`
  border: 3px solid ${ ({type}) => theme.colors[type] };
  border-radius: 30px;
  padding: 10px;
  /* width: 60px; */
  height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const Type = styled.label`
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
`

export const Icon = styled.svg`
  max-width: 100px;
  box-shadow: -1px 1px 61px 2px rgba(0,0,0,0.66);
  -webkit-box-shadow: -1px 1px 61px 2px rgba(0,0,0,0.66);
  -moz-box-shadow: -1px 1px 61px 2px rgba(0,0,0,0.66);
  border: 2px solid red;
`