import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import {
  Comments,
  Container,
  ContainerCol,
  ContainerRow,
  DescriptionOfMoment,
  ImageCont,
  ImageOfMoment,
  MomentInfoCont,
  TextComment,
  TextCont,
  TitleOfMoment,
} from "./MomentInfo.styled";
import { commentsServices } from "../../services/commentsServices";
//import commentsData from "../../services/commentsServices.json";

export const MomentInfo = () => {
  const [moment, setMoment] = useState({});
  // const [comments, setComments] = useState([]);
  const { id } = useParams();

  useEffect(
    () => {
      getMomentById(id);
      // getComments();
    }, // eslint-disable-next-line
    []
  );

  const getMomentById = (id) => {
    //setIsLoading(true);
    momentsServices.getMomentById(id).then((res) => {
      setMoment(res);
      
      console.log(res);
      console.log(moment.comments);
      //setIsLoading(false);
    });
  };

  // const getComments = () => {
  //   commentsServices.getAllComments().then((res)=> {
  //     setComments(res);
  //   })
  // }

  console.log(moment.comments); 
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
            <Comments>
              <TextComment>Comment: Hola</TextComment>
              <TextComment>
                Comment2: Hola2aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaa
              </TextComment>
              {/* <p>{moment.comments}</p> */}
              {/* {moment.comments.map((comment, key) => {
                return <TextComment key={key}>{comment}</TextComment>;
              })} */}
            </Comments>
          </ContainerCol>
        </MomentInfoCont>
      </Container>
    </div>
  );
};
