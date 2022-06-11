import styled from "styled-components";
 
export const FormContainer = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url("https://static.displate.com/857x1200/displate/2017-07-17/8d6478c922db94adbfcca7ac135dc12c_749f94f81f1c4f54e98b617570112f9f.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  form {
    padding: 1rem;
    border-radius: .5rem;
    opacity: 0.8;

    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }

  input {
    font-size: 1.2rem;
    font-weight: 500;
  }

  label {
    font-size: 1.2rem;
    font-weight: 500;
  }

  button {
    opacity: 1;
  }

  p {
    color: red;
  }

  @media (min-width:768px) {
    input {
      font-size: 1.5rem;
  }

  label {
    font-size: 1.5rem;
  }
  }
`;