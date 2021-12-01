import styled from 'styled-components'
import theme from '../theme';
// import pbkballgroup from 'assets/pkball-group.png'

export const Name = styled.h3`
  font-weight: bold;
  text-transform: capitalize;
  margin-top: 0;
`
export const Id = styled.span`
  font-size: 10px;
  font-weight: bold;
  font-style: italic;
  padding: 3px;
  max-width: 50%;
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 15px;
  border: 3px solid red;
`
export const ImageContainer = styled.div`
  box-sizing: border-box;
  background-image: url("assets/pkball-group.png");
  /* background-color: ${theme.colors.light}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin: 15px auto;
  border-radius: 20px;
  padding: 40px;
`

export const Image = styled.img`
  max-width: 200px;
  opacity: 0.2;
`