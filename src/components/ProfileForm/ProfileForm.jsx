import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { userServices } from "../../services/userServices";
import {
  CancelButton,
  DivFormProfile,
  InputFormProfile,
  SaveChangesButton,
} from "./ProfileForm.styled";



export const ProfileForm = (props) => {
  const [user, setUser] = useState(props.user);

  const { id } = useParams();

  useEffect(() =>{
    getUser(id);
  },[])

  const getUser = (id) => {
    userServices.getUsersById(id).then((res) => {
      setUser(res);
    });
  };

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    props.updateUser(user);

    resetInputsForm();
  };

  const resetInputsForm = (e) => {
    setUser({
      user: {
        username: "",
        id:"",
        img: "",
        description: "",
        dateOfBirth: "",
        location: "",
      },
    });
  };

  console.log(user)
  return (
    <DivFormProfile onSubmit={onSubmitHandler}>
      <CancelButton onClick={props.showForm}>
        <i className="fa-solid fa-xmark fa-xl"></i>
      </CancelButton>
      <InputFormProfile
        type="text"
        placeholder="Enter username"
        onChange={onInputChange}
        name="username"
        value={user.username}
      />
      <InputFormProfile
        name="dateOfBirth"
        placeholder="Enter Date of birth"
        type="text"
        onChange={onInputChange}
        value={user.dateOfBirth}
      />
      <InputFormProfile
        placeholder="Enter living location"
        type="text"
        onChange={onInputChange}
        name="ubication"
        value={user.ubication}
      />
      <InputFormProfile
        type="text"
        onChange={onInputChange}
        name="description"
        placeholder="Enter a little description"
        value={user.description}
      />
      <InputFormProfile
        type="url"
        onChange={onInputChange}
        name="img"
        placeholder="Change your image"
        value={user.img}
      />
      <SaveChangesButton type="submit">
        <i className="fa-solid fa-check"></i>
      </SaveChangesButton>
    </DivFormProfile>
  );
};
