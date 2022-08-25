import styled from "styled-components";

export const DivFormProfile = styled.form`
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
align-self: center;
justify-self: center;
width: 70%;
height: 92%;
top: 9%;
background-color: #ffffff;
padding-left: 15%;
padding-right: 15%;
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
  color: black;
  margin-bottom: 2%;
  @media (max-width: 450px) {
    padding: 3%;
    margin-bottom: 2%;
    width: 90%;
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
`

export const CancelButton = styled.button`
width: 5%;
height: 5%;
display: flex;
align-self: flex-end;
align-items: center;
justify-content: center;
`