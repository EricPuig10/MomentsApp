import { NavBar } from "../../components/NavBar/NavBar";

import { BtnLogIn, Container, InputsLogIn, Label } from "./SignUpForm.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { useState } from "react";
import { loginServices } from "../../services/loginServices";
import { Modal } from "../Modals/Modal";

export const SignUpForm = () => {
  const [errorMessage, setErrorMessage] = useState();
  const [user, setUser] = useState({ username: "", password: "", email:"" });
  const [isLogged, setIsLogged] = useState(false);
  
  const closeModal = () => {
    setErrorMessage(undefined);
  };

  const openModal = () =>{
    setErrorMessage(errorMessage);
  }

  const register = () => {
    loginServices.register(user).then((res) => {
      console.log(res);
      if (res.error) {
        openModal(res.error);

      }
    });
    resetInputs();
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
    register();
    setIsLogged(true);

  };

  const resetInputs = () => {
    setUser({
      username: "",
      password: "",
      email:""
    });
  };

  console.log(user);

  return (
    <div>
      <NavBar />
      {errorMessage !== undefined ? (
        <Modal msg={errorMessage} closeModal={closeModal} />
      ) : null}
      <div className="border">
        <form onSubmit={handleSubmit}>
          <Container>
            {/* <Label>
              <b>Name</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={user.name}
              type="text"
              placeholder="Enter name"
              name="name"
              required
            /> */}
            <Label>
              <b>Username</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={user.username}
              type="text"
              placeholder="Enter Username"
              name="username"
              required
            />

            <Label>
              <b>E-mail</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={user.email}
              type="text"
              placeholder="Enter E-mail"
              name="email"
              required
            />
            <Label>
              <b>Password</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={user.password}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
            {/* <Label>
              <b>Confirm password</b>
            </Label>

            <InputsLogIn
              onChange={onInputChange}
              value={newUser.password}
              type="password"
              placeholder="Confirm Password"
              name="password"
              required
            /> */}
            <BtnLogIn type="submit">Create Account </BtnLogIn>
          </Container>
        </form>
      </div>
      <NavBarDownMbl />
    </div>
  );
};
