import styled from "styled-components";


export const MainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerMomentsFilm = styled.div`
  background-color: #ffffff;
  border: 1px solid #dedede;
  padding-top: 2%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 6%;
  width: 100%;
  justify-content: center;
  @media (max-width: 450px) {
    padding-top: 25%;
    padding-bottom: 25%;
  }
`;
