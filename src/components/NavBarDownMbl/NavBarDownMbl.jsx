import { Link } from "react-router-dom";
import React from "react";
import {
  BtnDivMbl,
  BtnNavAddMbl,
  BtnNavHomeMbl,
  BtnNavMbl,
  LogInBtnMbl,
  NavBarDivMbl,
} from "./NavBarDownMbl.style";

export const NavBarDownMbl = (props) => {
  return (
    <nav>
      <NavBarDivMbl>
        <BtnDivMbl>
          <Link to="/">
            <BtnNavHomeMbl>
              <i className="fa-solid fa-house fa-2xl"></i>
            </BtnNavHomeMbl>
          </Link>
          <BtnNavMbl>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </BtnNavMbl>
          <BtnNavAddMbl onClick={props.showForm}>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnNavAddMbl>
          <BtnNavMbl>
            <i className="fa-regular fa-star fa-2xl"></i>
          </BtnNavMbl>
          <Link to="/log-in">
            <LogInBtnMbl>
              <i className="fa-regular fa-user fa-2xl"></i>
            </LogInBtnMbl>
          </Link>
        </BtnDivMbl>
      </NavBarDivMbl>
    </nav>
  );
};
