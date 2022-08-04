import { Link } from "react-router-dom";
import React from "react";
import {
  NavBarDiv,
  Title,
  H1,
  BtnDiv,
  LogInBtn,
  BtnNavHome,
  BtnNavHeart,
  BtnNavAdd,
  BtnNavSearch,
  BtnNavNotification,
} from "./NavBar.styled";
import { AuthService } from "../../services/AuthService";
import { LogOutButton } from "../MomentsList/MomentsList.styled";
import { loginServices } from "../../services/loginServices";

export const NavBar = (props) => {
  const logout = () => {
    loginServices.logout();
  };
  return (
    <nav>
      <NavBarDiv>
        <Title>
          <H1>InstaKg</H1>
        </Title>

        <BtnDiv>
          <BtnNavNotification>
            <i className="fa-solid fa-bell fa-2xl"></i>
          </BtnNavNotification>

          <Link to="/">
            <BtnNavHome>
              <i className="fa-solid fa-house-chimney fa-2xl"></i>
            </BtnNavHome>
          </Link>
          <Link to="/searcher">
            <BtnNavSearch>
              <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
            </BtnNavSearch>
          </Link>
          {/* <BtnNavSend>
            <i className="fa-regular fa-paper-plane fa-2xl"></i>
          </BtnNavSend> */}
          <BtnNavAdd onClick={props.showForm}>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnNavAdd>

          <Link to="/liked-moments">
            <BtnNavHeart>
              <i className="fa-regular fa-heart fa-2xl"></i>
            </BtnNavHeart>
          </Link>
          {AuthService.isLogged() ? (
            <Link to="/user">
              <BtnNavHeart onClick={logout}>
                Log Out
              </BtnNavHeart>
            </Link>
          ) : (
            <Link to="/auth/signin">
              <LogInBtn>
                <i className="fa-regular fa-user fa-2xl"></i>
              </LogInBtn>
              {/* <DivUserImg>
              <UserImg src='https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y'/>
            </DivUserImg> */}
            </Link>
          )}
        </BtnDiv>
      </NavBarDiv>
    </nav>
  );
};
