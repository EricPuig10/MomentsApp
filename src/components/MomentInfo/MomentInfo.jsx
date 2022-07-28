import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
  DivHideEmoji,
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
import { favServices } from "../../services/favServices";


export const MomentInfo = () => {
  const [moment, setMoment] = useState({ comments: [] });
  // eslint-disable-next-line
  const [comment, setComment] = useState();
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  useEffect(
    () => {
      getMomentById(id);
      getCommentsByMoment(id);
    }, // eslint-disable-next-line
    []
  );



  console.log(text);

  const getMomentById = (id) => {
    momentsServices.getMomentById(id).then((res) => {
      setMoment(res);
    });
  };

  const getCommentsByMoment = (id) => {
    commentsServices.getCommentsByMoment(id).then((res) => {
      setComments(res);
    });
  };

  const favComment = (comment) => {
    favServices.favComment(comment.id).then((res) => {
      if (!res) return;
      getCommentsByMoment(id);
    });
    getCommentsByMoment(id);
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
    if (text.length < 1) {
      return;
    }
    addNewComment(newComment);
    getMomentById(id)
    getCommentsByMoment(id);
    resetInput();
    moment.commentsCount = moment.commentsCount++;
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
              <DivHideEmoji></DivHideEmoji>

              <PublishInfo onClick={onSubmitHandler}>Publish</PublishInfo>
            </CommentsDivInfo>
            <CommentsDiv>
              {comments.map((comment, key) => {
                return (
                  <Comment key={key}>
                    <Link to={`/users/${comment.creator.id}`}>
                    <CommentImageUser src={comment.creator.userImg} />
                    </Link>
                    <CommentNameUser>
                      {comment.creator.userName}:
                    </CommentNameUser>

                    <TextComment>{comment.comment}</TextComment>
                    {comment.faved ? (
                      <BtnCommentLiked onClick={()=>favComment(comment)}>
                        <i className="fa-solid fa-heart fa-lg"></i>
                      </BtnCommentLiked>
                    ) : (
                      <BtnCommentUnLiked onClick={()=>favComment(comment)}>
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
