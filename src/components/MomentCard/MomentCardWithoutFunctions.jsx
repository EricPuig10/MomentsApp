import { useEffect, useState } from "react";
import {
  ImgMomentCont,
  ImgMomentMbl,
  MomentCardDivMbl,
  MomentDescription,
  TextCont,
  TextMomentCont,
  TitleMoment,
} from "./MomentCard.styled";

export const MomentCardWithoutFunctions = (props) => {
  // eslint-disable-next-line
  const [moment, setMoment] = useState(props.moment);

  useEffect(() => {
    setMoment(props.moment);
  }, [props.moment]);

  const ellipse = (element) => {
    if (element.length > 30) {
      element = element.substr(0, 30) + "...";
      return element;
    } else return element;
  };

  return (
    <MomentCardDivMbl>
      {props.isPreview ? (
        <ImgMomentCont style={{ height: 300 }}>
          <ImgMomentMbl src={props.newMoment.imgUrl} />
        </ImgMomentCont>
      ) : (
        <ImgMomentCont style={{ height: 300 }}></ImgMomentCont>
      )}

      <TextMomentCont>
        <TextCont>
          <TitleMoment>{props.newMoment.title}</TitleMoment>
          <MomentDescription>
            {ellipse(props.newMoment.description)}
          </MomentDescription>
        </TextCont>
      </TextMomentCont>
    </MomentCardDivMbl>
  );
};
