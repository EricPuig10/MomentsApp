import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ContainerMomentsFilm = styled.div`
  background-color: #ffffff;
  border: 1px solid #dedede;
  display: flex;
  flex-wrap: wrap;
  padding-top: 6%;
  width: 99.8%;
  justify-content: center;
  @media (max-width: 450px) {
    padding-top: 20%;
    padding-bottom: 25%;
    margin: 0;
    
  }
`;
