
import { MomentsLikedList } from "../components/MomentsLikedList/MomentsLikedList";
import { NavBar } from "../components/NavBar/NavBar";
import { NavBarDownMbl } from "../components/NavBarDownMbl/NavBarDownMbl";

export const LikedMomentsPage = () => {
  return (
    <div>
      <NavBar/>
      <MomentsLikedList />
      <NavBarDownMbl/>
    </div>
  );
};
