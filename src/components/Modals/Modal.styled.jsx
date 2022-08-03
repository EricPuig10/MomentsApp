import styled from "styled-components";

export const BackgroundModal = styled.div`
  width: 100%;
  height: 300vh;
  position: absolute;
  top: 0%;
  background-color: transparent;
  z-index: 100;
`;

export const DivModal = styled.dialog`
  width: 25%;
  position: fixed;
  height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  z-index: 100000;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0.75rem;
  padding: 2.5%;
  margin-top: 10%;
  @media (max-width: 450px) {
    width: 90%;
    margin: 0;
    margin-top: 50%;
  }
`;

export const TextModal = styled.p`
  font-size: 2em;
  @media (max-width: 450px) {
    font-size: 2.5em;
  }
`;

export const CloseModalBtn = styled.button`
  height: 20px;
  width: 20px;
  margin: 2.5%;
  background-color: #ffffff;
  box-shadow: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
