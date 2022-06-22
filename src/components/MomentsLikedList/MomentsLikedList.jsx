import { useEffect, useState } from "react";
import { NavBar } from "../NavBar/NavBar";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import {
  BtnCard,
  BtnCardCont,
  BtnCardContLeft,
  BtnCardFav,
  BtnCardLiked,
  BtnCardUnFav,
  BtnCardUnLiked,
  ImgMoment,
  ImgMomentCont,
  MomentCardDiv,
  MomentDescription,
  TextCont,
  TextMomentCont,
  TitleMoment,
} from "./MomentsLikedList.styled";
import { Link } from "react-router-dom";
import { ContainerMomentsFilm } from "../MomentsList/MomentsList.styled";
import { momentsServices } from "../../services/momentsServices";

export const MomentsLikedList = (props) => {
  const [likeList, setLikeList] = useState([]);


  useEffect(() => {

    getAllLikedMoments();
 
  }, []);

  const getAllLikedMoments = () => {
    momentsServices.getLikedMoments().then((res) => {
      setLikeList(res);
    });
  };
  const setLike = (newMoment) => {
    let moment = newMoment;

    if (moment.isLiked === false) moment.isLiked = true;
    else moment.isLiked = false;

    momentsServices.updateMoment(moment.id, moment).then((res) => {
      if (res) getAllLikedMoments();
    });

    addToLikeList(moment);
  };

  const addToLikeList = (newMoment) => {
    let moment = newMoment;

    if (moment.isLiked === true) {
      likeList.push(moment);
      showLikeList();
    } else {
      let likeIndex = likeList.findIndex(
        (moment) => moment.id === newMoment.id
      );
      likeList.splice(likeIndex, 1);
      showLikeList();
    }
    showLikeList();
  };

  const showLikeList = () => {
    momentsServices.getLikedMoments().then((res) => {
      setLikeList(res);
    });
  };

  const setFavorite = (newMoment) => {
    let moment = newMoment;

    if (moment.isFav === false) moment.isFav = true;
    else moment.isFav = false;

    momentsServices.updateMoment(moment.id, moment).then((res) => {
      if (res) getAllLikedMoments();
      showLikeList();
    });

    addToFavList(moment);
  };

  const addToFavList = (newMoment) => {
    let moment = newMoment;

    if (moment.isFav === true) {
      showLikeList();
    } else {
      showLikeList();
    }
    showLikeList();
  };

  const ellipse = (element) =>{
    if(element.length>30){
      element = element.substr(0,100) + "..."
      return element;
    } else return element

  }


  return (
    <>
      <NavBar />
      <ContainerMomentsFilm>
        {likeList.map((moment, key) => (
          <MomentCardDiv key={key}>
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
              </BtnCardCont>
              <TextCont>
                <TitleMoment>{moment.title}</TitleMoment>
                <MomentDescription>{ellipse(moment.description)}</MomentDescription>
              </TextCont>
            </TextMomentCont>
          </MomentCardDiv>
        ))}
      </ContainerMomentsFilm>
      <NavBarDownMbl />
    </>
  );
};