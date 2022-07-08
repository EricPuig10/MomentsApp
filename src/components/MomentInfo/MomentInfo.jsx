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
  CommentsDivInfo,
  Container,
  ContainerCol,
  ContainerRow,
  DescriptionOfMoment,
  ImageCont,
  ImageOfMoment,
  MomentInfoCont,
  PublishInfo,
  TextComment,
  TextCont,
  TitleOfMoment,
} from "./MomentInfo.styled";
import { commentsServices } from "../../services/commentsServices";
import InputEmojiWithRef from "react-input-emoji";

export const MomentInfo = () => {
  const [moment, setMoment] = useState({ comments: [] });
  const [isShorter, setIsShorter] = useState(false);
  const [comment, setComment] = useState(moment.comment);
  const [text, setText] = useState("");
  const [momentComments, setMomentComments] = useState(moment.commentsCount);
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(
    () => {
      getMomentById(id);
    }, // eslint-disable-next-line
    []
  );

  console.log(text);

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

  // const toggleExpand = () => {
  //   setIsShorter(!isShorter);
  // };

  const setLike = (newComment) => {
    let comment = newComment;

    if (comment.liked === false) comment.liked = true;
    else comment.liked = false;

    commentsServices.updateComment(comment.id, comment).then((res) => {
      return getMomentById(id);
    });
  };

  const addNewComment = (data) => {
    commentsServices.createComment(data).then((res) => {
      setComments([...comments, res]);
    });
  };

  const resetInput = () => {
    setText("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newComment = { comment: text, momentId: moment.id };
    if (newComment.comment.length > 0) {
      addNewComment(newComment);
      getMomentById(id);
      resetInput();
      setMomentComments(moment.commentsCount++);
    } else getMomentById(id);
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
            <CommentsDivInfo>
              <InputEmojiWithRef
                value={text}
                type="text"
                maxLength="60"
                onChange={setText}
                placeholder="Type a comment..."
              />
              <PublishInfo onClick={onSubmitHandler}>Publish</PublishInfo>
            </CommentsDivInfo>
            <CommentsDiv>
              {moment.comments.reverse().map((comment, key) => {
                return (
                  <Comment key={key}>
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
