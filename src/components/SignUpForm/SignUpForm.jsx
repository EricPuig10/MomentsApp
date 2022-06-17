import { NavBar } from "../../components/NavBar/NavBar";
import { Link } from "react-router-dom";
import {
  BtnLogIn,
  BtnSignUp,
  ButtonImg,
  CancelBtn,
  CheckBox,
  Container,
  ImgContainer,
  InputsLogIn,
  Label,
  LabelRemember,
  SpanPsw,
} from "./SignUpForm.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";

export const SignUpForm = () => {
  return (
    <div>
      <NavBar />
      <div className="border">
        <form /*action="action_page.php" */ method="post">
          <Container>
            <Label>
              <b>Name</b>
            </Label>
            <InputsLogIn
              type="text"
              placeholder="Enter name"
              name="name"
              required
            />
            <Label>
              <b>Username</b>
            </Label>
            <InputsLogIn
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <Label>
              <b>E-mail</b>
            </Label>
            <InputsLogIn
              type="text"
              placeholder="Enter E-mail"
              name="email"
              required
            />
            <Label>
              <b>Password</b>
            </Label>
            <InputsLogIn
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />
            <Label>
              <b>Confirm password</b>
            </Label>

            <InputsLogIn
              type="password"
              placeholder="Confirm Password"
              name="confirmpsw"
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
