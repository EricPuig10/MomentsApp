import {
  BackgroundModal,
  CloseModalBtn,
  DivModal,
  TextModal,
} from "./Modal.styled";

export const Modal = ({ msg, closeModal, index }) => {
  return (
    <BackgroundModal index={index} onClick={closeModal}>
      <DivModal>
        <TextModal>{msg}</TextModal>
        <CloseModalBtn onClick={closeModal}>
          <i className="fa-solid fa-xmark fa-2xl"></i>
        </CloseModalBtn>
      </DivModal>
    </BackgroundModal>
  );
};
