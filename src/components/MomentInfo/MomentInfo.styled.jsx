import styled from "styled-components";

export const Container = styled.div`
  padding-top: 5%;
  @media (max-width: 450px) {
    padding-top: 22%;
  }
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const ContainerCol = styled.div`
display: flex;
padding: 1%;
margin: 0%;
width:98%;
border-radius: 2vw;
flex-direction: column;
align-items: flex-start;
border: 2px solid grey;
margin-top:3%;
`

export const MomentInfoCont = styled.div`
  padding-top: 25%;
  margin-top: 2%;
  border-style: solid;
  border-color: grey;
  border-radius: 2vw;
  margin: 2%;
  padding: 2%;
  width: 70%;
  margin-left: 12%;
  box-shadow: 0 0 15px grey;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25%;
    width: 89%;
    margin-left: 0%;
    padding-top: 4%;
    padding: 4%;
  }
`;

export const TextCont = styled.div`
  width: 50%;
  margin-right: 2%;
  @media (max-width: 450px) {
    width: 100%;
    margin-top: -8%;
  }
`;

export const ImageCont = styled.div`
  width: 50%;
  height: 60vh;
  border-radius: 2vw;
  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const ImageOfMoment = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2vw;
  box-shadow: 0 0 15px grey;
  object-fit: cover;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
  }
`;

export const TitleOfMoment = styled.h1`
  color: black;
  margin-bottom: 0%;
  margin-top: 0%;
  @media (max-width: 450px) {
    margin-bottom: 6%;
    margin-top: 5%;
  }
`;

export const DescriptionOfMoment = styled.p`
  color: black;
  font-size: 1.2em;
  margin-top: 0%;
  @media (max-width: 450px) {
    margin-top: -8%;
  }
`;

export const CommentsDiv = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
width:100%;
height: 300px;
overflow-y: scroll;
::-webkit-scrollbar {
  width: 12px;          /* width of the entire scrollbar */
}
&::-webkit-scrollbar-track {
  background: rgb(255, 255, 255);        /* color of the tracking area */
}
&::-webkit-scrollbar-thumb {
  background-color: rgb(138, 138, 138);    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  border: 3px solid rgb(255, 255, 255);  /* creates padding around scroll thumb */
}

`;

export const TextComment = styled.p`
color: black;
margin-top: 0.6%;
font-size: 1.2em;
@media (max-width:450px){
margin-top: 0.9%;
}
`

export const Comment = styled.div`
display: flex;
justify-content: flex-start;
align-items: flex-start;
width: 100%;
margin-bottom: 0.5%;
position: relative;
`

export const CommentNameUser = styled.p`
  font-size: 1.15em;
  font-weight: bold;
  margin: 0;
  margin-right: 1.2%;
  margin-top: 0.6%;
  @media (max-width:450px){

}
`;


export const CommentImageUser = styled.img`
  width: 4%;
  height: 45px;
  border-radius: 50%;
  margin-right: 1%;
  @media (max-width:450px){
  width:12%;
  height:40px;
  margin-right: 2.5%;
}
`;


export const BtnCommentLiked = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  margin-top:1%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
  @media (max-width:450px){
    margin-top: 3%;
  }
`;

export const BtnCommentUnLiked = styled.button`
  color: black;
  background-color: transparent;
  border: none;
  margin-top:1.2%;
  cursor: pointer;
  &:hover {
    color: grey;
  }
  @media (max-width:450px){
    margin-top: 3%;
  }
`;

export const CommentsDivInfo = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  width: 100%;
  margin-bottom: 2%;
  @media (max-width: 450px) {
    margin-top: 2%;
  }
  
`;

export const PublishInfo = styled.button`
  width: 20%;
  height: 90%;
  color: #1385ff;
  font-size: 0.95em;
  font-weight: bold;
  background-color: transparent;
  border: none;
  text-decoration: none;
`;