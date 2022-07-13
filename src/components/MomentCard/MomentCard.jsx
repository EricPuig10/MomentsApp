import { useEffect, useState } from "react";
import InputEmojiWithRef from "react-input-emoji";
import { Link } from "react-router-dom";
import {
  BtnCard,
  BtnCardComment,
  BtnCardCont,
  BtnCardContLeft,
  BtnCardContRight,
  BtnCardLiked,
  BtnCardUnLiked,
  ComentsDiv,
  CommentsCount,
  CommentsCountDiv,
  ImageUser,
  ImageUserDiv,
  ImgMoment,
  ImgMomentCont,
  MomentCardDiv,
  MomentDescription,
  NameUser,
  NameUserDiv,
  Publish,
  TextCont,
  TextMomentCont,
  TitleMoment,
  UbiMoment,
  UserMomentDiv,
} from "./MomentCard.styled";

export const MomentCard = (props) => {
  const [moment, setMoment] = useState(props.moment);
  // eslint-disable-next-line
  const [momentComments, setMomentComments] = useState(moment.commentsCount);
  const [comment, setComment] = useState("");

  // const handleChange = (e) => {
  //   setComment(comment)

  //   let charRemain = 40 - e.target.length;
  //   console.log(charRemain)

  // };

  useEffect(() => {
    setMoment(props.moment);
  }, [props.moment]);

  const ellipse = (element) => {
    if (element.length > 100) {
      element = element.substr(0, 100) + "...";
      return element;
    } else return element;
  };

  const resetInput = () => {
    setComment("");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let newComment = { comment: comment, momentId: moment.id };
    if (newComment.comment.length > 0) {
      props.addNewComment(newComment);
      resetInput();
      setMomentComments(moment.commentsCount++);
    } else return;
  };

  return (
    <MomentCardDiv>
      <UserMomentDiv>
        <ImageUserDiv>
          <Link to={`/users/${moment.creator.id}`}>
            <ImageUser src={moment.creator.userImg} />
          </Link>
        </ImageUserDiv>

        <NameUserDiv>
          <NameUser>{moment.creator.userName}</NameUser>
          <UbiMoment>{moment.ubication}</UbiMoment>
        </NameUserDiv>
      </UserMomentDiv>
      <ImgMomentCont>
        <ImgMoment src={moment.imgUrl} />
      </ImgMomentCont>

      <TextMomentCont>
        <BtnCardCont>
          <BtnCardContLeft>
            {moment.liked ? (
              <BtnCardLiked onClick={() => props.setLike(moment)}>
                <i className="fa-solid fa-heart fa-2xl"></i>
              </BtnCardLiked>
            ) : (
              <BtnCardUnLiked onClick={() => props.setLike(moment)}>
                <i className="fa-regular fa-heart fa-2xl"></i>
              </BtnCardUnLiked>
            )}

            <BtnCardComment onClick={() => console.log(moment.liked)}>
              <i className="fa-regular fa-comment-dots fa-2xl"></i>
            </BtnCardComment>

            <Link to={`/moment-info/${moment.id}`}>
              <BtnCard>
                <i className="fa-regular fa-eye fa-2xl"></i>
              </BtnCard>
            </Link>
          </BtnCardContLeft>

          <BtnCardContRight>
            <BtnCard onClick={() => props.deleteMoment(moment.id)}>
              <i className="fa-regular fa-trash-can fa-2xl"></i>
            </BtnCard>
            <BtnCard onClick={() => props.editMoment(moment.id)}>
              <i className="fa-regular fa-pen-to-square fa-2xl"></i>
            </BtnCard>
          </BtnCardContRight>
        </BtnCardCont>
        <TextCont>
          {moment.commentsCount > 0 ? (
            <Link
              to={`/moment-info/${moment.id}`}
              style={{ textDecoration: "none" }}
            >
              <CommentsCountDiv>
                <CommentsCount>
                  {" "}
                  Show {moment.commentsCount} comments
                </CommentsCount>
              </CommentsCountDiv>
            </Link>
          ) : (
            <CommentsCount>No comments yet</CommentsCount>
          )}
          <TitleMoment>{moment.title}</TitleMoment>
          <MomentDescription>{ellipse(moment.description)}</MomentDescription>
        </TextCont>
      </TextMomentCont>

      <ComentsDiv onSubmit={onSubmitHandler}>
        <InputEmojiWithRef
          value={comment}
          type="text"
          maxLength="60"
          onChange={setComment}
          placeholder="Type a comment..."
        />
        <Publish type="submit">Publish</Publish>
      </ComentsDiv>
    </MomentCardDiv>
  );
};
