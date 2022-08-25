import styled from "styled-components";

export const DivFormProfile = styled.form`
position: fixed;
z-index: 100;
display: flex;
flex-direction: column;
align-items: center;
align-self: center;
justify-self: center;
width: 70%;
height: 92%;
top: 9%;
background-color: #ffffff;
padding-left: 15%;
padding-top: 5%;
padding-right: 15%;
@media (max-width: 450px) {
    padding-top: 20%;
  }
`
export const InputFormProfile = styled.input`
  padding: 1%;
  background-color: rgb(190, 190, 190);
  padding: 1.5%;
  border-radius: 1vw;
  border-style: solid;
  border-color: white;
  font-size: 0.9em;
  width: 40%;
  height: 1%;
  color: black;
  margin-bottom: 2%;
  @media (max-width: 450px) {
    padding: 3%;
    margin-top: 5%;
    margin-bottom: 5% ;
    width: 90%;
    height: 4%;
    font-size: 1.2em;
    border-radius: 2vw;
  }
`
export const SaveChangesButton = styled.button`
width: 5%;
height: 5%;
display: flex;
align-self: flex-end;
align-items: center;
justify-content: center;
position: absolute;
z-index: 300;
top:2.5%;
left: 80%;
width: 10%;
@media (max-width: 450px) {
position: absolute;
z-index: 300;
top:2.5%;
left: 80%;
width: 10%;
  }
`

export const CancelButton = styled.button`
position: absolute;
z-index: 200;
top:2.5%;
left: 5%;
width: 5%;
height: 5%;
display: flex;
align-self: flex-end;
align-items: center;
justify-content: center;
@media (max-width: 450px) {
position: absolute;
z-index: 200;
top:2.5%;
left: 5%;
width: 10%;
  }


`