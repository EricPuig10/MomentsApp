import styled from "styled-components";

export const NavBarDiv = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1%;
  height: 9vh;
  width: 80%;
  padding-left: 10%;
  padding-right: 10%;
  z-index: 10000;
  position: fixed;
  top: 0%;
  left:0%;
  border: 1px solid #dedede;
  @media (max-width: 450px) {
    height: 8vh;
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
  width: 40%;
  height: 100%;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const BtnNavHome = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
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
export const BtnNavNotification = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  font-size: 1em;
  width: 10%;
  cursor: pointer;
  &:active,
  :hover {
    color: grey;
  }
  @media (max-width: 450px) {
    margin-left: 60%;
  }
`;

export const BtnNavSend = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
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
  font-size: 1em;
  width: 10%;
  cursor: pointer;
  &:active,
  :hover {
    color: #5b5b5b;
  }
  @media (max-width: 450px) {
    display: none;
  }
`;

export const BtnNavSearch = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
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

export const LogInBtn = styled.button`
  background-color: rgb(255, 255, 255);
  border-radius: 2vw;
  border: 3px solid black;
  color: black;
  font-weight: bold;
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
export const DivUserImg = styled.button`
width:20%;
background-color: transparent;
border: none;

`

export const UserImg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
border-radius: 50%;

`




