import { useState, useEffect } from "react";
import { MomentCardWithoutFunctions } from "../MomentCard/MomentCardWithoutFunctions";
import {
  BackGroundForm,
  CloseBtn,
  CloseCont,
  FormCont,
  Input,
  InputsCont,
  RowDiv,
  SubmitBtnForm,
  TextArea,
} from "./MomentForm.styled";
import { cloudinaryService } from "../../services/cloudinaryService";


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

  const onFileChangeHandler = (e) => {
    console.log(e.target.name, e.target.files[0]);
    let data = { ...newMoment, file: e.target.files[0] };
    uploadImg(data);
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

  const uploadImg = (data) => {
    let { file, ...inputsData } = data;
    console.log(inputsData)
    cloudinaryService.uploadImage(file).then((res) => {
      console.log(res)
      setNewMoment({ ...inputsData, imgUrl: res.url });
    });
  };

  return (
    <div>
      <BackGroundForm onClick={() => props.showForm()}></BackGroundForm>
      <div>
        <form
          onSubmit={onSubmitHandler}
          noValidate
          encType="multipart/form-data"
        >
          <FormCont>
            <MomentCardWithoutFunctions
              newMoment={newMoment}
              isPreview={isPreview}
            />
            <InputsCont>
              <Input
                onChange={onInputChange}
                value={newMoment.imgUrl}
                aria-label="imgUrl"
                name="imgUrl"
                type="url"
                placeholder="Paste img url here..."
              ></Input>
              <RowDiv>
                <Input
                  onChange={onFileChangeHandler}
                  // value={newMoment.imgUrl}
                  aria-label="imgUrl"
                  name="imgUrl"
                  type="file"
                  accept="image/png, image/jpeg, image/gif"
                  placeholder="Search in your pc..."
                ></Input>
                {/* <UploadButton type="button">
                  Upload to Cloudinary and copy the url
                </UploadButton> */}
              </RowDiv>

              <Input
                onChange={onInputChange}
                value={newMoment.ubication}
                aria-label="ubication"
                name="ubication"
                type="text"
                placeholder="Ubication..."
              ></Input>
              <Input
                onChange={onInputChange}
                value={newMoment.title}
                aria-label="title"
                name="title"
                type="text"
                placeholder="Title..."
              ></Input>
              <TextArea
                rows="5"
                cols="10"
                onChange={onInputChange}
                aria-label="description"
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
