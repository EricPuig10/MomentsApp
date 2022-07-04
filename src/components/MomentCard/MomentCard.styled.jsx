import styled from "styled-components";

export const MomentCardDiv = styled.div`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  width: 26%;
  flex-direction: column;
  margin: 1%;
  margin-left: 5%;
  margin-bottom: 2%;
  position: relative;
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

export const MomentCardDivMbl = styled.div`
  border-color: #dedede;
  border-style: solid;
  display: flex;
  width: 20%;
  flex-direction: column;
  margin: 1%;
  margin-left: 3%;
  margin-bottom: 2%;
  position: relative;
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
    width: 95%;
    border-color: white;
    margin: 0;
    margin-bottom: 0%;
    top: 10%;
    left: 2%;
  }
`;

export const UserMomentDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 7.7%;
  margin: 1%;
  @media (max-width: 450px) {
    height: 8.3%;
  }
`;

export const NameUser = styled.p`
  font-size: 1.15em;
  font-weight: bold;
  margin: 0;
  margin-bottom: -4%;
`;
export const UbiMoment = styled.p`
  font-size: 1em;
  color: black;
  margin: 0;
`;

export const ImageUserDiv = styled.div`
  width: 14%;
  margin: 1%;
  height: 100%;
  border-radius: 50%;
`;

export const ImageUser = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
export const NameUserDiv = styled.div`
  margin-left: 2%;
  margin-top: 1%;
  display: flex;
  flex-direction: column;
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

export const ImgMomentMbl = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.3vw;
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

export const BtnCardComment = styled.button`
  color: #000000;
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
  padding-bottom: 10%;
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

export const ComentsDiv = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #dedede;
  height: 45px;
  width: 100%;
  position: absolute;
  top: 91.5%;
  @media (max-width: 450px) {
    border-bottom: 2px solid #dedede;
  }
`;

export const Emote = styled.div`
  margin-left: 4%;
`;

export const AddCommentInput = styled.input`
  background-color: #ffffff;
  width: 50%;
  height: 60%;
  padding-left: 2%;
  border: transparent;
  font-size: 1em;
  &:focus {
    outline: none;
  }
`;

export const Publish = styled.button`
  width: 20%;
  margin-right: 5%;
  height: 90%;
  color: #1385ff;
  font-size: 0.95em;
  font-weight: bold;
  background-color: transparent;
  border: none;
  text-decoration: none;
`;

export const CommentsCountDiv  = styled.div`
width:60%;
`

export const CommentsCount = styled.p`
  margin-left: 2%;
  margin-bottom: 0%;
  &:link {
    text-decoration: none;
  }
  
`;
