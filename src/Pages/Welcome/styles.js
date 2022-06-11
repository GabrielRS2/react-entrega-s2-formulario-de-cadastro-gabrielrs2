import styled from "styled-components";

export const WelcomeContainer = styled.div`
  padding: 1rem;
  width: 100vw;
  height: 100vh;

  background-color: #f2ecec5e;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  p {
    color: #000000;
    font-size: 1.5rem;
    font-weight: 700;
  }

  div img {
    width: 400px;
    height: 500px;
    max-width: 100%;
    height: 100%;
  }
`;