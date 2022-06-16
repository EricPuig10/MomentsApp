import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { InfoMoment } from "../pages/InfoMoment";
import { LogInPage } from "../pages/LogInPage";
import { SignUpPage } from "../pages/SignUpPage";

export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moment-info/:id" element={<InfoMoment/>} />
        <Route path="/log-in" element={<LogInPage/>} />  
        <Route path="/sign-up" element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
