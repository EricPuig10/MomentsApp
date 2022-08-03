import { Link } from "react-router-dom";
import React from "react";
import {
  BtnDivMbl,
  BtnNavAddMbl,
  BtnNavHomeMbl,
  BtnNavMbl,
  BtnSearcherMbl,
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
          <Link to="/auth/signin">
            <LogInBtnMbl>
              <i className="fa-solid fa-user fa-2xl"></i>
            </LogInBtnMbl>
          </Link>
        </BtnDivMbl>
      </NavBarDivMbl>
    </nav>
  );
};
