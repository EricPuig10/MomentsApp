import { useEffect, useState } from "react";
import { ContainerMoments } from "../MomentsList/MomentsList.styled";
import { momentsServices } from "../../services/momentsServices";
import { MomentCard } from "../MomentCard/MomentCard";
import { favServices } from "../../services/favServices";
import { DivWithoutSearchingResults } from "../Searcher/Searcher.styled";

export const MomentsLikedList = (props) => {
  const [likeList, setLikeList] = useState([]);

  useEffect(() => {
    getAllLikedMoments();
  }, []);

  const getAllLikedMoments = () => {
    momentsServices.getUserLikes().then((res) => {
      setLikeList(res);
    });
  };

  const fav = (data) => {
    favServices.fav(data.id).then((res) => {
      if (!res) getAllLikedMoments();
      getAllLikedMoments();
    });
    getAllLikedMoments();
  };

  return (
    <>
      <ContainerMoments>
        {likeList.length < 1 ? (
          <DivWithoutSearchingResults>
            You havent liked any moment.
          </DivWithoutSearchingResults>
        ) : (
          <>
            {likeList.map((moment, key) => (
              <MomentCard key={key} moment={moment} fav={fav} />
            ))}
          </>
        )}
      </ContainerMoments>
    </>
  );
};
