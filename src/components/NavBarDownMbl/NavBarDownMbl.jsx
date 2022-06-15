import { Link } from "react-router-dom";
import React from "react";
import {
  BtnDivMbl,
  BtnNavAddMbl,
  BtnNavMbl,
  LogInBtnMbl,
  NavBarDivMbl,
} from "./NavBarDownMbl.style";

export const NavBarDownMbl = (props) => {
  return (
    <nav>
      <NavBarDivMbl>
        <BtnDivMbl>
          <BtnNavMbl>
            <i className="fa-solid fa-house fa-2xl"></i>
          </BtnNavMbl>
          <BtnNavMbl>
            <i className="fa-solid fa-magnifying-glass fa-xl"></i>
          </BtnNavMbl>
          <BtnNavAddMbl>
            <i className="fa-solid fa-plus fa-2xl"></i>
          </BtnNavAddMbl>
          <BtnNavMbl>
            <i className="fa-regular fa-star fa-2xl"></i>
          </BtnNavMbl>
          <LogInBtnMbl>
            <i className="fa-regular fa-user fa-2xl"></i>
          </LogInBtnMbl>
        </BtnDivMbl>
      </NavBarDivMbl>
    </nav>
  );
};
