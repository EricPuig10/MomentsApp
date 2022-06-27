import styled from "styled-components";

export const NavBarDiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1%;
  height: 70px;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  z-index: 10000;
  position: fixed;
  top: 0%;
  border: 1px solid #dedede;
  @media (max-width: 450px) {
    height: 70px;
  }
`;

export const Title = styled.div`
  height: 100%;
  width: 10%;
  margin-left: 2%;
  font-size: 1.5em;
  display: flex;
  align-items: center;
  background-color: #ffffff;
`;
export const H1 = styled.h1`
  color: black;
  &:hover,
  :active,
  :link,
  :visited {
    text-decoration: none;
  }
`;

export const BtnDiv = styled.div`
  width: 30%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
`;

export const BtnNavHome = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  margin-top: 53%;
  margin-bottom: 2%;
  font-size: 1em;
  width: 10%;
  cursor: pointer;
  &:active,
  :hover {
    color: grey;
  }
  @media (max-width: 790px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const BtnNavSend = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 1em;
  width: 10%;
  cursor: pointer;
  &:active,
  :hover {
    cursor: pointer;
    color: grey;
  }
  @media (max-width: 650px) {
    margin-right: 12%;
  }
  @media (max-width: 450px) {
    margin-right: 1%;
  }
`;

export const BtnNavHeart = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  margin-top: 57%;
  margin-bottom: 2%;
  margin-left: 4%;
  font-size: 1em;
  width: 10%;
  cursor: pointer;
  &:active,
  :hover {
    color: #5b5b5b;
  }
  @media (max-width: 450px) {
    margin-left: 50%;
    margin-top: 56%;
  }
`;

export const BtnNavSearch = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  margin-top: 0%;
  margin-bottom: 2%;
  margin-right: 4%;
  font-size: 1em;
  width: 10%;
  cursor: pointer;
  &:focus,
  :hover {
    color: grey;
  }
  @media (max-width: 790px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const BtnNavAdd = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 2%;
  font-size: 1.1em;
  width: 10%;
  cursor: pointer;
  &:active,
  :hover {
    color: grey;
  }
  @media (max-width: 790px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const LogInBtn = styled.button`
  background-color: rgb(255, 255, 255);
  border-radius: 2vw;
  border: 3px solid black;
  color: black;
  font-weight: bold;
  margin-top: 36%;
  margin-right: 2%;
  font-size: 0.8em;
  padding-top: 22%;
  padding-bottom: 22%;
  cursor: pointer;
  &:active,
  :hover {
    color: grey;
    border: 3px solid grey;
  }
  @media (max-width: 790px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const InputDiv = styled.div`
  background-color: #dedede;
  width: 40%;
  height: 55%;
  border: none;
  border-radius: 1vw;
  display: flex;
  align-items: center;
  margin-left: 5%;
  @media (max-width: 790px) {
    display: none;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;
export const Lupa = styled.div`
  display: flex;
  width: 10%;
  margin-left: 4%;
  color: #838383;
`;

export const SearchInput = styled.input`
  background-color: #dedede;
  width: 120%;
  height: 95%;
  padding-left: 2%;
  border: transparent;
  border-radius: 1vw;
  font-size: 1.2em;
  &:focus {
    outline: none;
  }
`;
