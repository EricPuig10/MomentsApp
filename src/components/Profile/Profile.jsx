import {
  ActivityDiv,
  ActivityInfoDiv,
  ContentDiv,
  ContentTypeDiv,
  EditProfileBtn,
  Feed,
  FeedImg,
  FeedImgDiv,
  LettersText,
  MainDiv,
  NumbersText,
  ProfileImg,
  ProfileImgDiv,
  ProfileInfoDiv,
  StoryDiv,
  StoryImg,
  StorysDiv,
  StoryTitle,
  TextInfo,
  TextInfoTitle,
  TopDiv,
} from "./Profile.styled";
import { Link, useParams } from "react-router-dom";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { NavBar } from "../NavBar/NavBar";
import { userServices } from "../../services/userServices";
import { useEffect, useState } from "react";
import { momentsServices } from "../../services/momentsServices";

export const Profile = () => {
  const [user, setUser] = useState({});
  const [moments, setMoments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    getUser(id);
    getMomentsByUser(id);
  }, [id]);

  const getUser = (id) => {
    userServices.getUsersById(id).then((res) => {
      setUser(res);
    });
  };

  const getMomentsByUser = (id) => {
    momentsServices.getMomentsByUser(id).then((res) => {
      setMoments(res);
    });
  };


  return (
    <>
      <NavBar />
      <MainDiv>
        {/* <UserChooseDiv>
          <UserName>{user.userName}</UserName>
        </UserChooseDiv> */}
        <TopDiv>
          <ProfileImgDiv>
            <ProfileImg src={user.img} />
          </ProfileImgDiv>
          <ActivityInfoDiv>
            <ActivityDiv>
              <NumbersText>{user.momentsCount}</NumbersText>
              <LettersText>Moments</LettersText>
            </ActivityDiv>
            <ActivityDiv>
              {" "}
              <NumbersText>{user.followers}</NumbersText>
              <LettersText>Followers</LettersText>
            </ActivityDiv>
            <ActivityDiv>
              {" "}
              <NumbersText>{user.following}</NumbersText>
              <LettersText>Following</LettersText>
            </ActivityDiv>
          </ActivityInfoDiv>
        </TopDiv>
        <ProfileInfoDiv>
          <TextInfoTitle>{user.username}</TextInfoTitle>
          <TextInfo>{user.dateOfBirth}</TextInfo>
          <TextInfo>{user.ubication}</TextInfo>
          <TextInfo>{user.description}</TextInfo>
          <EditProfileBtn>Edit profile</EditProfileBtn>
        </ProfileInfoDiv>
        <StorysDiv>
          <StoryDiv>
            <StoryImg src="https://cdn.culturagenial.com/es/imagenes/torre-eiffel-cke.jpg" />
            <StoryTitle>París</StoryTitle>
          </StoryDiv>
          <StoryDiv>
            <StoryImg src="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/12/23/16402475676640.jpg" />
            <StoryTitle>Budapest</StoryTitle>
          </StoryDiv>
          <StoryDiv>
            <StoryImg src="https://a.cdn-hotels.com/gdcs/production40/d811/5e89ad90-8f10-11e8-b6b0-0242ac110007.jpg?impolicy=fcrop&w=800&h=533&q=medium" />
            <StoryTitle>Rome</StoryTitle>
          </StoryDiv>
          <StoryDiv>
            <StoryImg src="https://tripkay.com/destination-guides/wp-content/uploads/2016/03/Panoramica-Ciutadella-de-Menorca.jpg" />
            <StoryTitle>Menorca</StoryTitle>
          </StoryDiv>
        </StorysDiv>
        <ContentTypeDiv>
          <ContentDiv>
            <i className="fa-solid fa-table-cells fa-2xl"></i>
          </ContentDiv>
          <ContentDiv>
            <i className="fa-solid fa-play fa-2xl"></i>
          </ContentDiv>
          <ContentDiv>
            <i className="fa-solid fa-id-card-clip fa-2xl"></i>
          </ContentDiv>
        </ContentTypeDiv>
      </MainDiv>
      <Feed>
        {moments.map((moment, key) => (
          <FeedImgDiv key={key}>
            <Link to={`/moment-info/${moment.id}`}>
              <FeedImg src={moment.imgUrl} />
            </Link>
          </FeedImgDiv>
        ))}
        {/* <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2020/02/13/22/36/landscape-4847020_960_720.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297__340.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2015/05/18/20/05/rainbow-772815_960_720.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2019/04/07/11/24/landscape-4109455_960_720.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"/>
        </FeedImgDiv>
        <FeedImgDiv>
          <FeedImg src="https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_960_720.jpg"/>
        </FeedImgDiv> */}
      </Feed>
      <NavBarDownMbl />
    </>
  );
};
