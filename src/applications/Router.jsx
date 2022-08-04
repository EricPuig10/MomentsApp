import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { InfoMoment } from "../pages/InfoMoment";
import { LikedMomentsPage } from "../pages/LikedMomentsPage";
import { LogInPage } from "../pages/LogInPage";
import { ProfilePage } from "../pages/ProfilePage";
import { SearchPage } from "../pages/SearchPage";
import { SignUpPage } from "../pages/SignUpPage";

export default function Router(props) {
  const AuthRoute = ({ children }) => {
    if (localStorage.getItem("auth_token")) {
      return <Navigate to="/" />;
    }
    return children;
  };

  const AuthCrud = ({ children }) => {
    if (!localStorage.getItem("auth_token")) {
      return <Navigate to="/auth/signin" />;
    }
    return children;
  };
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <AuthCrud>
              <Home />
            </AuthCrud>
          }
        />
        <Route path="/moment-info/:id" element={<InfoMoment />} />
        <Route
          path="/auth/signin"
          element={
            <AuthRoute>
              <LogInPage />
            </AuthRoute>
          }
        />
        <Route
          path="/auth/signup"
          element={
            <AuthRoute>
              <SignUpPage />
            </AuthRoute>
          }
        />
        <Route
          path="/liked-moments"
          element={
            <AuthCrud>
              <LikedMomentsPage />
            </AuthCrud>
          }
        />
        <Route
          path="/searcher"
          element={
            <AuthCrud>
              <SearchPage />
            </AuthCrud>
          }
        />
        <Route
          path="/users/:id"
          element={
            <AuthCrud>
              <ProfilePage />
            </AuthCrud>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
