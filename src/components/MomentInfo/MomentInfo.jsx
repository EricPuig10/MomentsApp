import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import {
  BtnCommentLiked,
  BtnCommentUnLiked,
  Comment,
  CommentImageUser,
  CommentNameUser,
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
  const [isShorter, setIsShorter] = useState(false);
  const [comment, setComment] = useState(moment.comment);

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

  // const ellipse = (element, n) => {
  //   if (element.length > n) {
  //     element = element.substr(0, n) + "...";
  //     return element;
  //   } else return element;
  // };

  const toggleExpand = () => {
    setIsShorter(!isShorter);
  };

  const setLike = (newComment) => {
    let comment = newComment;

    if (comment.liked === false) comment.liked = true;
    else comment.liked = false;

    commentsServices.updateComment(comment.id, comment).then((res) => {
      return getMomentById(id);
    });

  
  };

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
                  <Comment key={key} onClick={toggleExpand}>
                    <CommentImageUser src={moment.creator.userImg} />
                    <CommentNameUser>
                      {moment.creator.userName}:
                    </CommentNameUser>

                    <TextComment>{comment.comment}</TextComment>
                    {comment.liked ? (
                      <BtnCommentLiked onClick={setLike}>
                        <i className="fa-solid fa-heart fa-lg"></i>
                      </BtnCommentLiked>
                    ) : (
                      <BtnCommentUnLiked onClick={setLike}>
                        <i className="fa-regular fa-heart fa-lg"></i>
                      </BtnCommentUnLiked>
                    )}
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
