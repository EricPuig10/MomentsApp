import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BtnCard,
  BtnCardCont,
  BtnCardContLeft,
  BtnCardContRight,
  BtnCardFav,
  BtnCardLiked,
  BtnCardUnFav,
  BtnCardUnLiked,
  ImageUser,
  ImageUserDiv,
  ImgMoment,
  ImgMomentCont,
  MomentCardDiv,
  MomentDescription,
  NameUser,
  NameUserDiv,
  TextCont,
  TextMomentCont,
  TitleMoment,
  UbiMoment,
  UserMomentDiv,
} from "./MomentCard.styled";

export const MomentCard = (props) => {
  const [moment, setMoment] = useState(props.moment);
  const setFavorite = (moment) => {
    props.setFavorite(moment);
  };
  const setLike = (moment) => {
    props.setLike(moment);
  };

  useEffect(() => {
    props.moment.description = ellipse(props.moment.description);
    setMoment(props.moment);
  }, [props.moment, props.moment.description]);

  const ellipse = (element) => {
    if (element.length > 100) {
      element = element.substr(0, 100) + "...";
      return element;
    } else return element;
  };

  return (
    <MomentCardDiv>
      <UserMomentDiv>
        <ImageUserDiv>
          <ImageUser src={moment.userImg} />
        </ImageUserDiv>
        <NameUserDiv>
          <NameUser>{moment.user}</NameUser>
          <UbiMoment>Ubicacion</UbiMoment>
        </NameUserDiv>
      </UserMomentDiv>
      <ImgMomentCont>
        <ImgMoment src={moment.imgUrl} />
      </ImgMomentCont>

      <TextMomentCont>
        <BtnCardCont>
          <BtnCardContLeft>
            {moment.isLiked ? (
              <BtnCardLiked onClick={() => setLike(moment)}>
                <i className="fa-solid fa-heart fa-2xl"></i>
              </BtnCardLiked>
            ) : (
              <BtnCardUnLiked onClick={() => setLike(moment)}>
                <i className="fa-regular fa-heart fa-2xl"></i>
              </BtnCardUnLiked>
            )}
            {moment.isFav ? (
              <BtnCardFav onClick={() => setFavorite(moment)}>
                <i className="fa-solid fa-star fa-2xl"></i>
              </BtnCardFav>
            ) : (
              <BtnCardUnFav onClick={() => setFavorite(moment)}>
                <i className="fa-regular fa-star fa-2xl"></i>
              </BtnCardUnFav>
            )}
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
          <TitleMoment>{moment.title}</TitleMoment>
          <MomentDescription>{moment.description}</MomentDescription>
        </TextCont>
      </TextMomentCont>
    </MomentCardDiv>
  );
};
