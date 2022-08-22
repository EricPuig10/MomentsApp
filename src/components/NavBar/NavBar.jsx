import { Link } from "react-router-dom";
import React, { useEffect } from "react";
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
  DivUserImg,
  UserImg,
  LogOutBtn,
} from "./NavBar.styled";
import { AuthService } from "../../services/AuthService";
import { LogOutButton } from "../MomentsList/MomentsList.styled";
import { loginServices } from "../../services/loginServices";
import { useState } from "react";

const initialUser = {
  username: "",
  img: "",
  id: "",
  error_list: [],
};

export const NavBar = (props) => {
  const [user, setUser] = useState(initialUser);

  const logout = () => {
    loginServices.logout();
  };

  const getUserData = () => {
    setUser(AuthService.getAuthUser());
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log(user);

  return (
    <nav>
      <NavBarDiv>
        <Title>
          <H1>InstaKg</H1>
        </Title>

        <BtnDiv>
          {AuthService.getAuthUser() ? <Link to={`/users/${user.id}`}>
              <BtnNavNotification>
                <UserImg src={user.img} />
              </BtnNavNotification>
            </Link> : (
            null
          )}

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
            <LogOutBtn onClick={logout}>
              <b>LogOut</b>
            </LogOutBtn>
          ) : (
            <Link to="/auth/signin">
              <LogInBtn>
                <i className="fa-regular fa-user fa-2xl"></i>
              </LogInBtn>
            </Link>
          )}
        </BtnDiv>
      </NavBarDiv>
    </nav>
  );
};
