import styled from "styled-components";

export const NavBarDivMbl = styled.div`
  display: none;
  @media (max-width: 450px) {
    background-color: #d05f5f;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    width: 100%;
    z-index: 10000;
    position: fixed;
    top: 90.94%;
    border: 1px solid #dedede;
    margin-bottom: 3%;
  }
`;
export const BtnDivMbl = styled.div`
  display: none;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
  }
`;
export const BtnNavMbl = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 7%;
  font-size: 1em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
  }
`;

export const BtnNavAddMbl = styled.button`
  background-color: rgb(255, 255, 255);
  border-radius: 2vw;
  border: 3px solid grey;
  color: black;
  font-weight: bold;
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 7%;
  font-size: 1em;
  width: 15%;
  &:active,
  :hover {
    color: grey;
  }
`;

export const LogInBtnMbl = styled.button`
  @media (max-width: 450px) {
    background-color: rgb(255, 255, 255);
    text-align: center;
    border-radius: 50%;
    border: 3px solid black;
    color: black;
    font-weight: bold;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-right: 4%;
    font-size: 1em;
    width: 14%;
    margin-left: 7%;
    height: 70%;
    &:active,
    :hover {
      color: grey;
      border: 3px solid grey;
    }
  }
`;
