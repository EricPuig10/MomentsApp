import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  BtnCard,
  BtnCardCont,
  BtnCardContLeft,
  BtnCardContRight,
  ImgMoment,
  ImgMomentCont,
  MomentCardDiv,
  MomentDescription,
  TextCont,
  TextMomentCont,
  TitleMoment,
} from "./MomentCard.styled";

export const MomentCard = (props) => {
  const [moment, setMoment] = useState(props.moment);

  useEffect(() => {
    setMoment(props.moment);
  }, [props.moment]);

  return (
    <MomentCardDiv>
      <ImgMomentCont>
        <ImgMoment src={moment.imgUrl} />
      </ImgMomentCont>

      <TextMomentCont>
        <BtnCardCont>
          <BtnCardContLeft>
            <BtnCard>
              <i className="fa-regular fa-heart fa-2xl"></i>
            </BtnCard>
            <BtnCard>
              <i className="fa-regular fa-star fa-2xl"></i>
            </BtnCard>
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
