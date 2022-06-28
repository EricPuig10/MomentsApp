import styled from "styled-components";

export const MainSearcher = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const ContainerMomentsSearcher = styled.div`
  background-color: #ffffff;
  border: 1px solid #dedede;
  display: flex;
  flex-wrap: wrap;
  padding-top: 6%;
  width: 80%;
  @media (max-width: 450px) {
    padding-top: 20%;
    padding-bottom: 25%;
    margin: 0;
    width:100%;
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
  margin-bottom: 2%;

  @media (max-width: 450px) {
    width: 90%;
    left: 2%;
    top: 1%;
    z-index: 10000;
    height: 70vh;
    padding-bottom: 30%;
    padding-top: 10%;
    flex-direction: column;
  }
`;

export const Lupa = styled.div`
  display: flex;
  width: 10%;
  margin-top: 3.5%;
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
padding-left: 4%;

`

export const ContainerSearchedMoments = styled.div`
border: 1px solid grey;
display: flex;
justify-content: center;
width:100%;
margin-top:2%;
`

export const DivWithoutSearchingResults = styled.div`
display: flex;
justify-content: center;

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
    width: 100%;
    border-color: white;
    margin: 0;
    margin-bottom: 0%;
  }
`;

export const ImgMomentContSearched = styled.div`
  border: none;
  height: 150px;
  position: relative;
  
  @media (max-width: 450px) {
    height: 400px;
  }
`;

export const ImgMomentSearched = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 1.5vw; 
  object-fit: cover;
`;