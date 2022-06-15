import React from "react";
import { MomentInfo } from "../components/MomentInfo";
import { NavBar } from "../components/NavBarDownMbl";
import { NavBarDownMbl } from "../components/NavBarDownMbl/NavBarDownMbl";

export const InfoMoment = () => {
  return <section> 
      <NavBar/>
      <MomentInfo />
      <NavBarDownMbl/>
      </section>;
};
