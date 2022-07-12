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

  return (
    <>
      <ContainerMoments>
        {likeList.map((moment, key) => (
          <MomentCard key={key} moment={moment} />
        ))}
      </ContainerMoments>
    </>
  );
};
