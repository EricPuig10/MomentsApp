import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import {
  Comment,
  CommentImageUser,
  CommentImageUserDiv,
  CommentNameUser,
  CommentNameUserDiv,
  CommentsDiv,
  Container,
  ContainerCol,
  ContainerRow,
  DescriptionOfMoment,
  ImageCont,
  ImageOfMoment,
  MomentInfoCont,
  TextComment,
  TextCont,
  TitleOfMoment,
} from "./MomentInfo.styled";
import { commentsServices } from "../../services/commentsServices";

export const MomentInfo = () => {
  const [moment, setMoment] = useState({ comments: [] });


  const { id } = useParams();

  useEffect(
    () => {
      getMomentById(id);
    }, // eslint-disable-next-line
    []
  );

  const getMomentById = (id) => {
    momentsServices.getMomentById(id).then((res) => {
      setMoment(res);
    });
  };





  // const getComments = () => {
  //   commentsServices.getAllComments().then((res)=> {
  //     setComments(res);
  //   })
  // }

  return (
    <div>
      <Container>
        <MomentInfoCont>
          <ContainerRow>
            <TextCont>
              <TitleOfMoment>{moment.title}</TitleOfMoment>
              <DescriptionOfMoment>{moment.description}</DescriptionOfMoment>
            </TextCont>

            <ImageCont>
              <ImageOfMoment src={moment.imgUrl} alt="momentfoto" />
            </ImageCont>
          </ContainerRow>
          <ContainerCol>
            <CommentsDiv>
              {moment.comments.map((comment, key) => {
                return (
                  <Comment>
                    <CommentImageUser src={moment.userImg} />
                    <CommentNameUser>{moment.userName}</CommentNameUser>
                    <TextComment key={key}>{comment.comment}</TextComment>
                  </Comment>
                );
              })}
            </CommentsDiv>
          </ContainerCol>
        </MomentInfoCont>
      </Container>
    </div>
  );
};
