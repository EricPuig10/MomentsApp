import { useEffect, useState } from "react";
import { ContainerMoments } from "../MomentsList/MomentsList.styled";
import { momentsServices } from "../../services/momentsServices";
import { MomentCard } from "../MomentCard/MomentCard";

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

    if (moment.liked === false) {
      moment.liked = true;
      moment.likes = moment.likes++;
    } else {
      moment.liked = false;
      moment.likes = moment.likes--;
    }

    momentsServices.likeMoment(moment.id, moment).then((res) => {
      return getAllLikedMoments();
    });

    addToLikeList(moment);
  };

  const addToLikeList = (newMoment) => {
    let moment = newMoment;

    if (moment.liked === true) {
      likeList.push(moment);
      showLikeList();
    } else {
      let likeIndex = likeList.findIndex(
        (moment) => moment.id === newMoment.id
      );
      likeList.splice(likeIndex, 1);
      showLikeList();
    }
  };

  
  const showLikeList = () => {
    momentsServices.getLikedMoments().then((res) => {
      setLikeList(res);
    });
  };

  return (
    <>
      <ContainerMoments>
        {likeList.map((moment, key) => (
          <MomentCard key={key} moment={moment} setLike={setLike} />
        ))}
      </ContainerMoments>
    </>
  );
};
