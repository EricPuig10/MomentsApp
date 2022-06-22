import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import {
  Container,
  DescriptionOfMoment,
  ImageCont,
  ImageOfMoment,
  MomentInfoCont,
  TextCont,
  TitleOfMoment,
} from "./MomentInfo.styled";

export const MomentInfo = () => {
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
  );
};
