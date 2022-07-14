import styled from "styled-components";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }
`;

export const UserChooseDiv = styled.div`
  width: 100%;
  padding-top: 5%;
  height: 6vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid grey;
  position: fixed;
  z-index: 2;
  background-color: white;
  @media (max-width: 450px) {
    width:20%;
    /* background-color: red; */
    height: 2vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    margin-top:1.3%;
    margin-left: 50%;
    z-index: 10000;
    border-bottom: none;
  }
`;

export const UserName = styled.p`
  font-size: 2em;
  margin: 0;
  margin-left: 12%;
  margin-bottom: 1%;
  font-weight: 900;
  @media (max-width: 450px) {
    font-size: 2em;
    margin: 0;
    margin-left: 0%;
    font-weight: 900;
  }
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  margin-left: 22%;
  margin-right: 2%;
  padding-top: 4%;
  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    width: 90%;
    margin-left: 1%;
    margin-right: 0%;
    padding-top: 16%;
    
  }
`;

export const ProfileImgDiv = styled.div`
  display: flex;
  align-items: center;
  width: 20%;
  margin: 2%;
  margin-left: 2%;
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    width: 30%;
    margin: 2%;
    margin-left: 2%;
    /* background-color: yellow; */
  }
`;

export const ProfileImg = styled.img`
  width: 90%;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 450px) {
    width: 110%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ActivityInfoDiv = styled.div`
  /* background-color: blue; */
  display: flex;
  width: 80%;
  justify-content: space-around;
  @media (max-width: 450px) {
    /* background-color: blue; */
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin-left: 5%;
    
  }
`;

export const ActivityDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2%;
  margin-left: 2%;
  /* background-color: green; */
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 2%;
    margin-left: 2%;
    /* background-color: green; */
  }
`;

export const NumbersText = styled.p`
  font-size: 1.8em;
  margin-bottom: 0;
  font-weight: 900;
  @media (max-width: 450px) {
    font-size: 1.8em;
    margin-bottom: 0;
    font-weight: 900;
  }
`;

export const LettersText = styled.p`
  margin-top: 0;
  font-size: 1.4em;
  font-weight: 600;
  @media (max-width: 450px) {
    margin-top: 0;
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export const ProfileInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  margin-left: 4%;
  margin-right: 4%;
  margin-bottom: 2%;
  align-items: center;
  @media (max-width: 450px) {
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    /* background-color: #be0f0f; */
    margin-top: -3%;
    margin-bottom: 2%;  
    margin-left: 0%;
    padding-left: 2%;
    margin-right: 0%;
    width:96%;
  }
`;

export const TextInfoTitle = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.5em;
  font-weight: bolder;
  @media (max-width: 450px) {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5em;
    font-weight: bolder;
  }
`;

export const TextInfo = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.4em;
  font-weight: 600;
  @media (max-width: 450px) {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export const EditProfileBtn = styled.button`
  margin-top: 3%;
  width: 50%;
  height: 5vh;
  border-radius: 2vw;
  font-size: 1.4em;
  font-weight: 600;
  border: none;
  @media (max-width: 450px) {
    margin-top: 3%;
    width: 100%;
    height: 5vh;
    border-radius: 2vw;
    font-size: 1.4em;
    font-weight: 600;
    border: none;
  }
`;

export const StorysDiv = styled.div`
  display: flex;
  width: 40%;
  margin-left: 30%;
  height: 22vh;
  /* background-color: red; */
  justify-content: space-around;
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    height: 15vh;
    /* background-color: red; */
    justify-content: space-around;
    margin-left: 0%;
  }
`;

export const StoryDiv = styled.div`
  /* background-color: yellow; */
  width: 24%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4%;
  @media (max-width: 450px) {
    /* background-color: yellow; */
    width: 24%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 4%;
  }
`;

export const StoryImg = styled.img`
  width: 70%;
  height: 100%;
  border-radius: 50%;
  border: 4px solid grey;
  @media (max-width: 450px) {
    width: 80%;
    height: 80px;
    border-radius: 50%;
    border: 4px solid grey;
  }
`;
export const StoryTitle = styled.p`
  width: 100%;
  margin: 0;
  text-align: center;
  font-size: 1.2em;
  font-weight: 600;
  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export const ContentTypeDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  height: 10vh;
  margin-left: 20%;
  /* background-color: red; */
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    height: 7vh;
    margin-left: 0%;
    /* background-color: red; */
  }
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  /* background-color: yellow; */
  color: grey;
  &:active {
    border-bottom: 2px solid grey;
  }
  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.33%;
    /* background-color: yellow; */
    color: grey;
    &:active {
      border-bottom: 2px solid grey;
    }
  }
`;

export const Feed = styled.div`
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  width:80%;
  margin-left: 10%;
  @media (max-width: 450px) {
    /* background-color: red; */
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    padding-bottom: 20%;
    margin-left: 0%;
  }
`;

export const FeedImgDiv = styled.div`
  /* background-color: yellow; */
  height: 300px;
  width: 32.9%;
  margin: 0.2%;
  @media (max-width: 450px) {
    /* background-color: yellow; */
    height: 150px;
    width: 32.9%;
    margin: 0.2%;
  }
`;

export const FeedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2vw;
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
