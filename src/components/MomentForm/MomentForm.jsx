import { useState, useEffect } from "react";
import { MomentCardWithoutFunctions } from "../MomentCard/MomentCardWithoutFunctions";
import {
  BackGroundForm,
  CloseBtn,
  CloseCont,
  FormCont,
  Input,
  InputsCont,
  SubmitBtnForm,
  TextArea,
} from "./MomentForm.styled";

export const MomentForm = (props) => {
  const [newMoment, setNewMoment] = useState(props.momentToEdit);
  const [isEditMode] = useState(props.isEditMode);
  const [isPreview, setIsPreview] = useState(props.isPreview);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (newMoment.title.length > 0) {
      !isEditMode
        ? props.addNewMoment(newMoment)
        : props.updateMoment(newMoment);
    }

    resetInputsForm();
  };

  const resetInputsForm = (e) => {
    setNewMoment({
      moment: {
        title: "",
        id: "",
        imgUrl: "",
        description: "",
      },
    });
  };

  const onInputChange = (e) => {
    setIsPreview(true);
    const name = e.target.name;
    const value = e.target.value;
    setNewMoment({ ...newMoment, [name]: value });
  };

  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.showForm();
    }
  };

  useEffect(
    () => {
      document.body.addEventListener("keydown", closeOnEscapeKeyDown);
      return function cleanup() {
        document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
      };
    },
    // eslint-disable-next-line
    []
  );
  return (
    <div>
      <BackGroundForm onClick={() => props.showForm()}></BackGroundForm>
      <div>
        <form onSubmit={onSubmitHandler}>
          <FormCont>
            <MomentCardWithoutFunctions
              newMoment={newMoment}
              isPreview={isPreview}
            />
            <InputsCont>
              <Input
                onChange={onInputChange}
                value={newMoment.imgUrl}
                name="imgUrl"
                type="url"
                placeholder="Paste img url here..."
              ></Input>
              <Input
                onChange={onInputChange}
                value={newMoment.ubication}
                name="ubication"
                type="text"
                placeholder="Ubication..."
              ></Input>
              <Input
                onChange={onInputChange}
                value={newMoment.title}
                name="title"
                type="text"
                placeholder="Title..."
              ></Input>
              <TextArea
                rows="5"
                cols="10"
                onChange={onInputChange}
                value={newMoment.description}
                name="description"
                placeholder="Add description..."
              ></TextArea>
              {isEditMode ? (
                <SubmitBtnForm type="submit" className="submitBtn">
                  <i className="fa-solid fa-pen-to-square fa-xl"></i>
                </SubmitBtnForm>
              ) : (
                <SubmitBtnForm type="submit" className="submitBtn">
                  <i className="fa-solid fa-plus fa-xl"></i>
                </SubmitBtnForm>
              )}
            </InputsCont>

            <CloseCont>
              <CloseBtn onClick={() => props.showForm()}>
                <i className="fa-solid fa-xmark fa-xl"></i>
              </CloseBtn>
            </CloseCont>
          </FormCont>
        </form>
      </div>
    </div>
  );
};
