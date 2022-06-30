import styled from "styled-components";

export const MainSearcher = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerMomentsSearcher = styled.div`
  background-color: #ffffff;
  padding-left: 8%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2%;
  width: 80%;
  @media (max-width: 450px) {
    padding-top: 8%;
    padding-bottom: 25%;
    margin: 0;
    width:100%;
    margin-right: 4%;
  }
`;

export const FormContSearcher = styled.div`
  width: 50%;
  display: flex;
  border-style: solid;
  border-color: grey;
  height:6vh;
  border-radius: 1.5vw;
  justify-content: center;
  background-color: white;
  margin-top: 6%;
  position:relative;
  @media (max-width: 1100px) {
    margin-top: 10%;
    width: 90%;
    border-radius: 10vw;
  }
  @media (max-width: 450px) {
    margin-top: 25%;
    width: 90%;
    border-radius: 10vw;
  }
`;

export const BtnDiv = styled.div`
  display: flex;
  width: 10%;
  align-items: center;
    margin-left: 4%;
  color: #838383;
`;

export const SearchInput = styled.input`
  background-color: #dedede;
  width: 110%;
  height: 95%;
  padding-left: 2%;
  border: transparent;
  border-radius: 1vw;
  font-size: 1.2em;
  border-radius: 2vw;
  z-index: 2;
  &:focus {
    outline: none;
  }
  @media (max-width: 450px) {
    width:70%;
    margin-left: -2%;
    border-radius: 10vw;
  }
`;

export const ButtonSubmit = styled.button`
display: flex;
background-color: #e7e7e7;
width:15%;
border-top-right-radius:1.5vw;
border-bottom-right-radius:1.5vw;
border: none;
position: absolute;
top:0%;
left:85%;
height: 100%;
align-items: center;
font-size:1em;
padding-left: 6%;
cursor: pointer;
@media (max-width: 450px) {
    border-top-right-radius:10vw;
    border-bottom-right-radius:10vw;
    padding-left: 2%;
    width:20%;
    left:80%;
    padding-left: 5%;
  }

`


export const DivWithoutSearchingResults = styled.div`
display: flex;
justify-content: center;
width: 90%;

`

export const MomentCardDivSearched = styled.div`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  width: 15%;
  flex-direction: column;
  margin: 1%;
  margin-left: 5%;
  margin-bottom: 2%;
  border-radius: 1.5vw;
  @media (max-width: 1020px) {
    width: 25%;
    border-color: white;
  }
  @media (max-width: 790px) {
    width: 30%;
    border-color: white;
  }
  @media (max-width: 650px) {
    width: 80%;
    border-color: white;
  }
  @media (max-width: 450px) {
    width: 20%;
    border-color: white;
    margin: 0;
    margin-bottom: 0%;
    margin-left:2%;
  }
`;

export const ImgMomentContSearched = styled.div`
  border: none;
  height: 150px;
  position: relative;
  
  
  @media (max-width: 450px) {
    height: 100px;
  }
`;

export const ImgMomentSearched = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5vw; 
  object-fit: cover;
`;

export const CancelBtn = styled.button`
  margin-top: 1%;
  background: transparent;
  padding: 0.5%;
  width:5%;
  position: absolute;
  top:0%;
  z-index: 4;
  left:83%;
  font-size: 1em;
  border: none;
  cursor: pointer;
  @media (max-width:450px){
    top:20%;
    left:75%;
  }

`