import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
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

export const LogInForm = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLogged, setIsLogged] = useState(false);

  const closeModal = () => {
    setErrorMessage();
  };

  const openModal = () =>{
    setErrorMessage(errorMessage);
  }


  const login = () => {
    loginServices.login(user).then((res) => {
      if (res.error) {
        openModal(res.error);

      }
      console.log(res);
    });
    resetInputs();
    openModal();
  };

  //form

  const onInputChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    login();
    setIsLogged(true);
  };

  const resetInputs = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  console.log(user);
  return (
    <div>
      <NavBar />

      {errorMessage !== undefined ? (
        <Modal msg={errorMessage} closeModal={closeModal} />
      ) : null}
      {isLogged ? (
        <BtnLogOut onClick={()=>setIsLogged(false)}>LogOut</BtnLogOut>
      ) : (
        <div className="border">
          <form onSubmit={handleSubmit}>
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
                value={user.username}
                onChange={onInputChange}
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
                onChange={onInputChange}
                value={user.password}
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
            <Link to="/sign-up">
              <BtnSignUp>SignUp</BtnSignUp>
            </Link>
          </form>
        </div>
      )}

      <NavBarDownMbl />
    </div>
  );
};
