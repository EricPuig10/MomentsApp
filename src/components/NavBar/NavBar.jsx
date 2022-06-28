import { Link } from "react-router-dom";
import React from "react";
import {
  NavBarDiv,
  Title,
  H1,
  BtnDiv,
  LogInBtn,
  BtnNavHome,
  BtnNavSend,
  BtnNavHeart,
  BtnNavAdd,
  BtnNavSearch,
} from "./NavBar.styled";


export const NavBar = (props) => {
  return (
    <nav>
      <NavBarDiv>
        <Title>
          <H1>InstaKg</H1>
        </Title>
        
        <BtnDiv>
          <Link to="/">
            <BtnNavHome>
              <i className="fa-solid fa-house fa-2xl"></i>
            </BtnNavHome>
          </Link>
          <Link to="/searcher">
          <BtnNavSearch>
            <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
          </BtnNavSearch>
          </Link>
          <BtnNavSend>
            <i className="fa-regular fa-paper-plane fa-2xl"></i>
          </BtnNavSend>
          <BtnNavAdd onClick={props.showForm}>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnNavAdd>

          <Link to="/liked-moments">
            <BtnNavHeart>
              <i className="fa-regular fa-heart fa-2xl"></i>
            </BtnNavHeart>
          </Link>

          <Link to="/log-in">
            <LogInBtn>
              <i className="fa-regular fa-user fa-2xl"></i>
            </LogInBtn>
          </Link>
        </BtnDiv>
      </NavBarDiv>
    </nav>
  );
};
