import { useEffect, useState } from "react";
import InputEmojiWithRef from "react-input-emoji";
import { Link } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { DivHideEmoji } from "../MomentInfo/MomentInfo.styled";
import {
  BtnCard,
  BtnCardComment,
  BtnCardCont,
  BtnCardContLeft,
  BtnCardContRight,
  BtnCardLiked,
  BtnCardUnLiked,
  ComentsDiv,
  DivLikes,
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
  // eslint-disable-next-line
  const [user, setUser] = useState();
  const [userId, setUserId] = useState("");
  // const handleChange = (e) => {
  //   setComment(comment)

  //   let charRemain = 40 - e.target.length;
  //   console.log(charRemain)

  // };

  useEffect(() => {
    setMoment(props.moment);
    setUser(props.moment.creator);
    setUserId(props.moment.creator.id);
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
            <ImageUser src={moment.creator.img} />
          </Link>
        </ImageUserDiv>

        <NameUserDiv>
          <NameUser>{moment.creator.username}</NameUser>
          <UbiMoment>{moment.ubication}</UbiMoment>
        </NameUserDiv>
      </UserMomentDiv>
      <ImgMomentCont>
        <Link to={`/moment-info/${moment.id}`}>
          <ImgMoment src={moment.imgUrl} />
        </Link>
      </ImgMomentCont>

      <TextMomentCont>
        <BtnCardCont>
          <BtnCardContLeft>
            {moment.faved ? (
              <>
                <DivLikes>{moment.favsCount}</DivLikes>

                <BtnCardLiked onClick={() => props.fav(moment)}>
                  <i className="fa-solid fa-heart fa-2xl"></i>
                </BtnCardLiked>
              </>
            ) : (
              <>
                <DivLikes>{moment.favsCount}</DivLikes>
                <BtnCardUnLiked onClick={() => props.fav(moment)}>
                  <i className="fa-regular fa-heart fa-2xl"></i>
                </BtnCardUnLiked>
              </>
            )}

            <DivLikes>{moment.commentsCount}</DivLikes>
            <Link
              to={`/moment-info/${moment.id}`}
              style={{ textDecoration: "none" }}
            >
              <BtnCardComment>
                <i className="fa-regular fa-comment-dots fa-2xl"></i>
              </BtnCardComment>
            </Link>

            {/* <Link to={`/moment-info/${moment.id}`}>
              <BtnCard>
                <i className="fa-regular fa-eye fa-2xl"></i>
              </BtnCard>
            </Link> */}
          </BtnCardContLeft>
          {!AuthService.isAuthor(userId) && !AuthService.isAdmin() ? null : (
            <BtnCardContRight>
              <BtnCard onClick={() => props.deleteMoment(moment.id)}>
                <i className="fa-regular fa-trash-can fa-2xl"></i>
              </BtnCard>
              <BtnCard onClick={() => props.editMoment(moment.id)}>
                <i className="fa-regular fa-pen-to-square fa-2xl"></i>
              </BtnCard>
            </BtnCardContRight>
          )}
        </BtnCardCont>
        <TextCont>
          <Link
            to={`/moment-info/${moment.id}`}
            style={{ textDecoration: "none" }}
          ></Link>

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
        <DivHideEmoji></DivHideEmoji>
        <Publish type="submit">Publish</Publish>
      </ComentsDiv>
    </MomentCardDiv>
  );
};
