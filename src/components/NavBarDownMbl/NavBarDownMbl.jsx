import { Link } from "react-router-dom";
import React from "react";
import {
  BtnDivMbl,
  BtnNavAddMbl,
  BtnNavHomeMbl,
  BtnNavMbl,
  BtnNavMblLogged,
  BtnSearcherMbl,
  LogInBtnMbl,
  NavBarDivMbl,
} from "./NavBarDownMbl.style";
import { AuthService } from "../../services/AuthService";
import { UserImg } from "../NavBar/NavBar.styled";
import { useState } from "react";
import { useEffect } from "react";

const initialUser = {
  username: "",
  img: "",
  id: "",
  error_list: [],
};
export const NavBarDownMbl = (props) => {
  const [user, setUser] = useState(initialUser);


  const getUserData = () => {
    setUser(AuthService.getAuthUser());
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <nav>
      <NavBarDivMbl>
        <BtnDivMbl>
          <Link to="/">
            <BtnNavHomeMbl>
              <i className="fa-solid fa-house-chimney fa-2xl"></i>
            </BtnNavHomeMbl>
          </Link>
          <Link to="/searcher">
            <BtnSearcherMbl>
              <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
            </BtnSearcherMbl>
          </Link>
          <BtnNavAddMbl onClick={props.showForm}>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnNavAddMbl>
          <Link to="/liked-moments">
            <BtnNavMbl>
              <i className="fa-solid fa-heart fa-2xl"></i>
            </BtnNavMbl>
          </Link>
          {AuthService.getAuthUser() ? (
            <Link to={`/users/${user.id}`}>
              <BtnNavMblLogged>
                <UserImg src={user.img} />
              </BtnNavMblLogged>
            </Link>
          ) : (
            <Link to="/auth/signin">
              <LogInBtnMbl>
                <i className="fa-regular fa-user fa-2xl"></i>
              </LogInBtnMbl>
            </Link>
          )}
        </BtnDivMbl>
      </NavBarDivMbl>
    </nav>
  );
};
