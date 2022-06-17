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
} from "./LogInForm.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";

export const LogInForm = () => {
  return (
    <div>
      <NavBar />
      <div className="border">
        <form /*action="action_page.php" */ method="post">
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
              className="inputlogin"
              type="text"
              placeholder="Enter Username"
              name="uname"
              required
            />

            <Label>
              <b>Password</b>
            </Label>
            <InputsLogIn
              className="inputlogin"
              type="password"
              placeholder="Enter Password"
              name="psw"
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
      <NavBarDownMbl />
    </div>
  );
};
