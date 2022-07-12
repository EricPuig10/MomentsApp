import { NavBar } from "../../components/NavBar/NavBar";

import { BtnLogIn, Container, InputsLogIn, Label } from "./SignUpForm.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { userServices } from "../../services/userServices";
import { useState } from "react";

export const SignUpForm = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    userName: "",
    password: "",
    email: "",
  });

  const addNewUser = (data) => {
    userServices.addUser(data).then((res) => {
      setUsers([...users, res]);
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewUser();
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNewUser({ ...newUser, [name]: value });
  };

  console.log(newUser);

  return (
    <div>
      <NavBar />
      <div className="border">
        <form onSubmit={onSubmitHandler}>
          <Container>
            <Label>
              <b>Name</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={newUser.name}
              type="text"
              placeholder="Enter name"
              name="name"
              required
            />
            <Label>
              <b>Username</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={newUser.userName}
              type="text"
              placeholder="Enter Username"
              name="userName"
              required
            />

            <Label>
              <b>E-mail</b>
            </Label>
            <InputsLogIn
              onChange={onInputChange}
              value={newUser.email}
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
              value={newUser.password}
              type="password"
              placeholder="Enter Password"
              name="password"
              required
            />
            <Label>
              <b>Confirm password</b>
            </Label>

            <InputsLogIn
              onChange={onInputChange}
              value={newUser.password}
              type="password"
              placeholder="Confirm Password"
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
