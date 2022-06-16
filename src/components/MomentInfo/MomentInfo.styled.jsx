import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10%;
  @media (max-width: 450px){
    padding-top: 30%;
  }
`;

export const MomentInfoCont = styled.div`
  padding-top: 25%;
  margin-top: 2%;
  border-style: solid;
  border-color: grey;
  display: flex;
  border-radius: 2vw;
  margin: 2%;
  padding: 2%;
  width: 70%;
  margin-left: 12%;
  box-shadow: 0 0 15px grey;
  @media (max-width: 450px){
    flex-direction: column;
    align-items: center;
    margin-bottom: 25%;
  }
`;

export const TextCont = styled.div`
  width: 50%;
  margin-right: 2%;
  @media (max-width: 450px){
    width:100%;
  margin-top: -8%;

  }

  
`;

export const ImageCont = styled.div`
  width: 50%;
  border-radius: 2vw;
  @media (max-width: 450px){
    width:100%;
  }
`;

export const ImageOfMoment = styled.img`
  width: 100%;
  border-radius: 2vw;
  box-shadow: 0 0 15px grey;
  @media (max-width: 450px){
    width:100%;
    height:100%;
  }
  
`;

export const TitleOfMoment = styled.h1`
  color: black;
`;

export const DescriptionOfMoment = styled.p`
  color: black;
  font-size: 1.1em;
  @media (max-width: 450px){
    margin-top: -8%;
  }
`;
