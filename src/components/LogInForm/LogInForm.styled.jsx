import styled from "styled-components";

export const Label = styled.label`
  color: black;
  margin-left: 5%;
`;

export const LabelRemember = styled.label`
  margin-left: 5%;
  font-size: 1.2em;
`;

export const CheckBox = styled.input`
  margin-right: 2%;
`;

export const InputsLogIn = styled.input`
  width: 90%;
  padding: 12px 20px;
  margin-left: 5%;
  margin-top: 1%;
  margin-bottom: 1%;
  font-size: 1.2em;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;

  @media (max-width: 450px) {
    width: 90%;
    padding: 12px 20px;
    margin-left: 5%;
    margin-top: 3%;
    margin-bottom: 3%;
    font-size: 1.2em;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
`;

export const BtnLogIn = styled.button`
  background-color: #000000;
  color: #ffffff;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 90%;
  margin-left: 5%;
  font-size: 1.2em;
  @media (max-width: 450px) {
    background-color: #000000;
    color: #ffffff;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 90%;
    margin-left: 5%;
    margin-top: 10%;
    font-size: 1.2em;
  }
`;

export const ImgContainer = styled.div`
  padding-top: 7%;
  text-align: center;
  @media (max-width: 450px) {
    text-align: center;
    padding-top: 25%;
    margin-bottom: 10%;
    background-color: #ffffff;
  }
`;

export const ButtonImg = styled.button`
  font-size: 4em;
  border-radius: 50%;
  color: #000000;
  background-color: transparent;
  border: none;
`;

export const Container = styled.div`
  width: 100%;
`;

export const SpanPsw = styled.span`
  float: left;
  margin-left: 5%;
  color: #000000;
  text-decoration: none;
  @media (max-width: 450px) {
    float: left;
    margin-left: 5%;
    padding-top: 6px;
    color: #000000;
    text-decoration: none;
  }
`;

export const BtnSignUp = styled.button`
  background-color: #000000;
  color: #ffffff;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 90%;
  margin-left: 5%;
  margin-top: 1%;
  font-size: 1.2em;
  @media (max-width: 450px) {
    background-color: #000000;
    color: #ffffff;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 90%;
    margin-left: 5%;
    margin-top: 5%;
    font-size: 1.2em;
  }
`;
