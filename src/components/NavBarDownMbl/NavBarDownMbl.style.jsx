import styled from "styled-components";

export const NavBarDivMbl = styled.div`
  display: none;
  @media (max-width: 790px) {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 9vh;
    width: 100%;
    z-index: 10000;
    position: fixed;
    bottom:0%;
    border: 1px solid #dedede;
  }
`;
export const BtnDivMbl = styled.div`
  display: none;
  @media (max-width: 790px) {
    width: 90%;
    height: 100%;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-left: -5%;
  }
`;
export const BtnNavMbl = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  /* margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 4%; */
  font-size: 1.2em;
  width: 10%;
  /* margin-right: 7%; */
  &:active,
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

export const BtnSearcherMbl = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  /* margin-top: 52%;
  margin-bottom: 2%;
  margin-left: -20%; */
  font-size: 1.2em;
  width: 10%;
  /* margin-right: 7%; */
  &:active,
  :hover {
    color: grey;
    cursor: pointer;
  }
`;
export const BtnNavHomeMbl = styled.button`
  background-color: rgb(255, 255, 255);
  border: none;
  color: black;
  font-weight: bold;
  /* margin-top: 52%;
  margin-bottom: 2%;
  margin-left: -50%;
  margin-right: 5%; */
  font-size: 1.1em;
  width: 10%;
  &:active,
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

export const BtnNavAddMbl = styled.button`
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  border: 3px solid black;
  color: black;
  font-weight: bold;
  /* margin-top: 3%; */
  font-size: 1em;
  /* margin-left: 0%;
  margin-right: 1%; */
  width: 15%;
  height: 70%;
  &:active,
  :hover {
    color: grey;
    cursor: pointer;
  }
`;

export const LogInBtnMbl = styled.button`
  @media (max-width: 790px) {
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    border: 3px solid black;
    color: black;
    font-weight: bold;
    /* margin-top: 30%;
    margin-bottom: 2%;
    margin-left: 20%; */
    padding-top: 30%;
    padding-bottom: 30%;
    width:122%;
    font-size: 1em;
    &:active,
    :hover {
      color: grey;
      border: 3px solid grey;
      cursor: pointer;
    }
  }
`;
