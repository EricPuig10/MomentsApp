import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Searcher } from "../components/Searcher/Searcher";
import { Home } from "../pages/Home";
import { InfoMoment } from "../pages/InfoMoment";
import { LikedMomentsPage } from "../pages/LikedMomentsPage";
import { LogInPage } from "../pages/LogInPage";
import { SearchPage } from "../pages/SearchPage";
import { SignUpPage } from "../pages/SignUpPage";

export default function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moment-info/:id" element={<InfoMoment />} />
        <Route path="/log-in" element={<LogInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/liked-moments" element={<LikedMomentsPage />} />
        <Route path="/searcher" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}
