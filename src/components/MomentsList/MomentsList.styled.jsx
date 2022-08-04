import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ContainerMoments = styled.div`
  background-color: #ffffff;
  /* border: 1px solid #dedede; */
  display: flex;
  flex-wrap: wrap;
  padding-top: 6%;
  margin-left: 10%;
  width: 80%;
  @media (max-width: 450px) {
    padding-top: 18%;
    padding-bottom: 25%;
    margin: 0;
    width:100%;
  }
`;

export const LogOutButton = styled.button `
position: fixed;
top:40%;
left:90%;
width:10%;
background-color: green;
z-index:1000000;


`
