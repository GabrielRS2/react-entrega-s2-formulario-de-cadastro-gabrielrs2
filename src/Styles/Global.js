import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  *{
        box-sizing: border-box;
  }
  ul, ol{
      margin: 0;
      padding: 0;
      list-style: none;
  }
  button{
      cursor: pointer;
  }
`

export const ThemeButton = styled.button`
  padding: 1rem;


  border: none;
  border-radius: .5rem;

  background-image: url("https://i.pinimg.com/236x/9b/d6/2e/9bd62eb341dcd095bf01657f50d37257.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  font-size: 2rem;
  font-weight: 700;
  color: #ffffff;
`;