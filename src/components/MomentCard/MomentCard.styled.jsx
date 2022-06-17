import styled from "styled-components";

export const MomentCardDiv = styled.div`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  width: 20%;
  flex-direction: column;
  margin: 1%;
  margin-left: 3%;
  margin-bottom: 2%;
  @media (max-width: 1020px) {
    width: 25%;
  }
  @media (max-width: 790px) {
    width: 30%;
  }
  @media (max-width: 650px) {
    width: 80%;
  }
  @media (max-width: 450px) {
    width: 80%;
  }
`;

export const ImgMomentCont = styled.div`
  border: none;
  height: 300px;
  position: relative;
  @media (max-width: 450px) {
    height: 400px;
  }
`;

export const ImgMoment = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextMomentCont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2%;
  margin-left: 2%;
`;

export const BtnCardCont = styled.div`
  display: flex;
  margin-top: 2%;
`;
export const BtnCardContLeft = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-start;
`;
export const BtnCardContRight = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
`;

export const BtnCard = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const BtnCardLiked = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const BtnCardUnLiked = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const BtnCardFav = styled.button`
  color: yellow;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;

export const BtnCardUnFav = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-right: 2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
`;
export const TextCont = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleMoment = styled.h2`
  font-size: 1.2em;
  font-weight: bold;
  margin-left: 2%;
  color: black;
`;

export const MomentDescription = styled.p`
  font-size: 1em;
  margin-left: 2%;
  color: black;
  margin-top: -3%;
`;
