import styled from "styled-components";

export const MainDiv = styled.div`
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
  }
`;

export const UserChooseDiv = styled.div`
  @media (max-width: 450px) {
    width: 100%;
    height: 6vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid grey;
    position: fixed;
    z-index: 2;
    background-color: white;
  }
`;

export const UserName = styled.p`
  @media (max-width: 450px) {
    font-size: 2em;
    margin: 0;
    margin-left: 4%;
    font-weight: 900;
  }
`;

export const TopDiv = styled.div`
  @media (max-width: 450px) {
    display: flex;
    justify-content: center;
    width: 94%;
    margin-left: 2%;
    margin-right: 2%;
    padding-top:10%;
  }
`;

export const ProfileImgDiv = styled.div`
  @media (max-width: 450px) {
    display: flex;
    align-items: center;
    width: 20%;
    margin: 2%;
    margin-left: 2%;
    /* background-color: yellow; */
  }
`;

export const ProfileImg = styled.img`
  @media (max-width: 450px) {
    width: 110%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const ActivityInfoDiv = styled.div`
  @media (max-width: 450px) {
    /* background-color: blue; */
    display: flex;
    width: 80%;
    justify-content: space-around;
  }
`;

export const ActivityDiv = styled.div`
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
  @media (max-width: 450px) {
    font-size: 1.8em;
    margin-bottom: 0;
    font-weight: 900;
  }
`;

export const LettersText = styled.p`
  @media (max-width: 450px) {
    margin-top: 0;
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export const ProfileInfoDiv = styled.div`
  @media (max-width: 450px) {
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    margin-left: 4%;
    margin-right: 4%;
    margin-top: -3%;
    margin-bottom: 2%;
  }
`;

export const TextInfoTitle = styled.p`
  @media (max-width: 450px) {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.5em;
    font-weight: bolder;
  }
`;

export const TextInfo = styled.p`
  @media (max-width: 450px) {
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.4em;
    font-weight: 600;
  }
`;

export const EditProfileBtn = styled.button`
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
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    height: 15vh;
    /* background-color: red; */
    justify-content: space-around;
  }
`;

export const StoryDiv = styled.div`
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
  @media (max-width: 450px) {
    width: 80%;
    height: 80px;
    border-radius: 50%;
    border: 4px solid grey;
  }
`;
export const StoryTitle = styled.p`
  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
    text-align: center;
    font-size: 1.2em;
    font-weight: 600;
  }
`;

export const ContentTypeDiv = styled.div`
  @media (max-width: 450px) {
    display: flex;
    width: 100%;
    height: 7vh;
    /* background-color: red; */
  }
`;

export const ContentDiv = styled.div`
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
  @media (max-width: 450px) {
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 20%;
  }
`;

export const FeedImgDiv = styled.div`
  @media (max-width: 450px) {
    /* background-color: yellow; */
    height: 150px;
    width: 32.9%;
    margin: 0.2%;
  }
`;

export const FeedImg = styled.img`
  @media (max-width: 450px) {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
