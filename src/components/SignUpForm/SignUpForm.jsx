import { NavBar } from "../../components/NavBar/NavBar";

import { BtnLogIn, Container, InputsLogIn, Label } from "./SignUpForm.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { useState } from "react";
import { loginServices } from "../../services/loginServices";
import { Modal } from "../Modals/Modal";
import { AuthService } from "../../services/AuthService";
import axios from "axios";

const initialRegister = {
  username: "",
  email:"",
  password: "",
  error_list: [],
};

export const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [register, setRegister] = useState(initialRegister);
  const [isLogged, setIsLogged] = useState(false);
  const closeModal = () => {
    setErrorMessage(undefined);
  };

  const openModal = () =>{
    setErrorMessage(errorMessage);
  }

  const handleInput = (e) => {
    e.persist();
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: register.username,
      email: register.email,
      password: register.password,
    };

    axios.post("/auth/signup", data).then((res)=> {
      console.log(res);
      if(!res) openModal(errorMessage)

      window.location = "/auth/signin"
    })
  };


  return (
    <div>
      <NavBar />
      {errorMessage !== undefined ? (
        <Modal msg={errorMessage} closeModal={closeModal} />
      ) : null}
      <div className="border">
        <form onSubmit={registerSubmit}>
          <Container>

            <Label>
              <b>Username</b>
            </Label>
            <InputsLogIn
              onChange={handleInput}
              value={register.username}
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />

            <Label>
              <b>E-mail</b>
            </Label>
            <InputsLogIn
              onChange={handleInput}
              value={register.email}
              type="text"
              placeholder="Enter E-mail"
              name="email"
              required
            />
            <Label>
              <b>Password</b>
            </Label>
            <InputsLogIn
              onChange={handleInput}
              value={register.password}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
            <BtnLogIn type="submit">Create Account </BtnLogIn>
          </Container>
        </form>
      </div>
      <NavBarDownMbl />
    </div>
  );
};
