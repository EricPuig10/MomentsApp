import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import {
  Comments,
  Container,
  DescriptionOfMoment,
  ImageCont,
  ImageOfMoment,
  MomentInfoCont,
  TextCont,
  TitleOfMoment,
} from "./MomentInfo.styled";
import commentsData from "../../services/commentsServices.json"

export const MomentInfo = () => {
  const [comments, setComments] = useState(commentsData);
  const [moment, setMoment] = useState([]);
  const { id } = useParams();

  useEffect(
    () => {
      getMomentById(id);
    }, // eslint-disable-next-line
    []
  );

  const getMomentById = (id) => {
    //setIsLoading(true);
    momentsServices.getMomentById(id).then((res) => {
      setMoment(res);
      console.log(res);
      //setIsLoading(false);
    });
  };

  return (
    <div>
    <Container>
      <MomentInfoCont>
        <TextCont>
          <TitleOfMoment>{moment.title}</TitleOfMoment>
          <DescriptionOfMoment>{moment.description}</DescriptionOfMoment>
        </TextCont>

        <ImageCont>
          <ImageOfMoment src={moment.imgUrl} alt="momentfoto" />
        </ImageCont>
      </MomentInfoCont>
    </Container>

    <Container>
      <Comments/>
    </Container>

    </div>
  );
};
