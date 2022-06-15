import styled from "styled-components";

export const Container = styled.div`
  padding-top: 10%;
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
  height: 360px;
  margin-left: 12%;
  box-shadow: 0 0 15px grey;
`;

export const TextCont = styled.div`
  width: 50%;
`;

export const ImageCont = styled.div`
  width: 50%;
  border-radius: 2vw;
`;

export const ImageOfMoment = styled.img`
  width: 100%;
  border-radius: 2vw;
  box-shadow: 0 0 15px grey;
`;

export const TitleOfMoment = styled.h1`
  color: black;
`;

export const DescriptionOfMoment = styled.p`
  color: black;
  font-size: 1.1em;
`;
