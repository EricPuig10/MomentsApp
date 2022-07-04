import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { commentsServices } from "../../services/commentsServices";
import { Comment, TextComment } from "../MomentInfo/MomentInfo.styled";
import {
  AddCommentInput,
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
  Emote,
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
  const [newComment, setNewComment] = useState(moment.comments.comment)
  const [momentComments, setMomentComments] = useState (moment.comments)

  useEffect(() => {
    setMoment(props.moment);
  }, [props.moment]);

  const ellipse = (element) => {
    if (element.length > 100) {
      element = element.substr(0, 100) + "...";
      return element;
    } else return element;
  };


  
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.addNewComment(newComment)
    }



  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewComment({ ...newComment, [name]: value });
  };

  console.log(newComment)
  return (
    <MomentCardDiv>
      <UserMomentDiv>
        <ImageUserDiv>
          <ImageUser src={moment.userImg} />
        </ImageUserDiv>
        <NameUserDiv>
          <NameUser>{moment.userName}</NameUser>
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
          {momentComments.length > 0 ? (
            <Link to={`/moment-info/${moment.id}`} style={{ textDecoration: 'none' }}>
              <CommentsCountDiv>
                <CommentsCount>
                  {" "}
                  Show {momentComments.length} comments
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

      <ComentsDiv>
        <Emote>
          <i className="fa-regular fa-face-grin fa-xl"></i>
        </Emote>
        <AddCommentInput onChange={onInputChange} value={newComment} name="comments" placeholder="Add a comment..." />
        <Publish onClick={onSubmitHandler}>Publish</Publish>
      </ComentsDiv>
    </MomentCardDiv>
  );
};

