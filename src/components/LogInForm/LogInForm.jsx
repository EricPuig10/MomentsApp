import { NavBar } from "../../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import { loginServices } from "../../services/loginServices";
import {
  BtnLogIn,
  BtnLogOut,
  BtnSignUp,
  ButtonImg,
  CheckBox,
  Container,
  ImgContainer,
  InputsLogIn,
  Label,
  LabelRemember,
  SpanPsw,
} from "./LogInForm.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { useState } from "react";
import { Modal } from "../Modals/Modal";
import axios from "axios";
import { AuthService } from "../../services/AuthService";

const initialLogin = {
  username: "",
  password: "",
  error_list: [],
};

export const LogInForm = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [login, setLogin] = useState(initialLogin);
  const [isLogged, setIsLogged] = useState(false);

  const closeModal = () => {
    setErrorMessage();
  };

  const openModal = () => {
    setErrorMessage(errorMessage);
  };

  //form

  const handleInput = (e) => {
    e.persist();
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const loginSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: login.username,
      password: login.password,
    };

    axios.post("/auth/signin", data).then((res) => {
      console.log(res);
      if (!res) openModal(errorMessage);
      const authUser = {
        token: res.data.accessToken,
        username: res.data.username,
        id: res.data.id,
        img: res.data.img
      };
      localStorage.setItem("auth_token", res.data.accessToken);
      localStorage.setItem("auth_user", res.data.username);
      localStorage.setItem("auth_id", res.data.id);
      localStorage.setItem("auth_img", res.data.img);

      AuthService.saveAuthUser(authUser);
      console.log(authUser)
      window.location = "/";
      
    });
  };

  console.log(login);
  return (
    <div>
      <NavBar />

      {errorMessage !== undefined ? (
        <Modal msg={errorMessage} closeModal={closeModal} />
      ) : null}

      <div className="border">
        <form onSubmit={loginSubmit}>
          <ImgContainer>
            <ButtonImg>
              <i className="fa-solid fa-user text-red"></i>
            </ButtonImg>
          </ImgContainer>

          <Container>
            <Label>
              <b>Username</b>
            </Label>
            <InputsLogIn
              type="text"
              placeholder="Enter Username"
              value={login.username}
              onChange={handleInput}
              name="username"
              required
            />

            <Label>
              <b>Password</b>
            </Label>
            <InputsLogIn
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              value={login.password}
              required
            />
            <SpanPsw>Forgot password?</SpanPsw>
            <LabelRemember>
              <CheckBox type="checkbox" name="remember" />
              Remember me
            </LabelRemember>
            <BtnLogIn type="submit">Login </BtnLogIn>
          </Container>
          <SpanPsw>Don't you have an account?</SpanPsw>
          <Link to="/auth/signup">
            <BtnSignUp>SignUp</BtnSignUp>
          </Link>
        </form>
      </div>

      <NavBarDownMbl />
    </div>
  );
};
