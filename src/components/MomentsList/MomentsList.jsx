import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthService } from "../../services/AuthService";
import { commentsServices } from "../../services/commentsServices";
import { favServices } from "../../services/favServices";
import { loginServices } from "../../services/loginServices";
import { momentsServices } from "../../services/momentsServices";
import { UserContext } from "../../UserContext";
import { Modal } from "../Modals/Modal";
import { MomentCard } from "../MomentCard/MomentCard";
import { MomentForm } from "../MomentForm/MomentForm";
import { NavBar } from "../NavBar/NavBar";
import { BtnNavNotification, UserImg } from "../NavBar/NavBar.styled";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { ContainerMoments, LogOutButton } from "./MomentsList.styled";

export const MomentsList = () => {
  const [moments, setMoments] = useState([]);
  const [isShowForm, setIsShowForm] = useState(false);
  const [momentToEdit, setMomentToEdit] = useState({
    title: "",
    id: "",
    imgUrl: "",
    description: "",
  });
  const [isEditMode, setIsEditMode] = useState(false);
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false);
  const [isPreview, setIsPreview] = useState(false);
  const [comments, setComments] = useState([]);
  const [msg, setMsg] = useState();


  useEffect(() => {
    getAllMoments();
    // loginServices.logout();
    //showLikeList();
  }, []);

  const getAllMoments = () => {
    setIsLoading(true);
    momentsServices.getAllMoments().then((res) => {
      setMoments(res);
      setIsLoading(false);
    });
  };

  const openModal = (msg) => {
    setMsg(msg);
  };

  const closeModal = () => {
    setMsg();
  };

  const showForm = () => {
    if (isShowForm) setIsShowForm(false);
    else setIsShowForm(true);
    resetInputsForm();
    setIsEditMode(false);
    setIsPreview(false);
  };

  const addNewComment = (data) => {
    commentsServices.createComment(data).then((res) => {
      setComments([...comments, res]);
    });
  };

  const addNewMoment = (data) => {
    momentsServices.addMoment(data).then((res) => {
      setMoments([...moments, res]);
    });
    setIsShowForm(false);
  };

  const deleteMoment = (id) => {
    let momentToDelete = moments.filter((moment) => moment.id === id);
    let deleteConfirmed = window.confirm(
      `Really remove ${momentToDelete[0].title} from the list?`
    );
    if (!deleteConfirmed) return;
    let filterMoments = moments.filter((moment) => moment.id !== id);
    console.log(filterMoments);

    momentsServices.deleteMoment(parseInt(id)).then((res) => {
      if (!res) return;
      if (res.error) {
        openModal(res.error);

        return;
      }
      setMoments(filterMoments);
    });
  };

  const editMoment = (id) => {
    showForm();
    let momentToEdit = moments.find((moment) => moment.id === id);
    setMomentToEdit(momentToEdit);
    setIsEditMode(true);
    setIsPreview(true);
  };

  const updateMoment = (newMoment) => {
    momentsServices.updateMoment(newMoment).then((res) => {
      // let momentToEdit = moments.map((moment) =>
      //   moment.id === newMoment.id ? newMoment : moment
      // );
      if (!res) return;
      setMomentToEdit();
      getAllMoments();
    });
    showForm();
    getAllMoments();
  };

  const resetInputsForm = (e) => {
    setMomentToEdit({
      title: "",
      id: "",
      imgUrl: "",
      description: "",
      ubication: "",
    });
  };

  const fav = (data) => {
    favServices.fav(data.id).then((res) => {
      if (!res) return;
      getAllMoments();
    });
    getAllMoments();
  };

  const logout = () => {
    loginServices.logout();
  };



  
  return (
    <section>
      <NavBar showForm={showForm} />

      {isShowForm ? (
        <MomentForm
          addNewMoment={addNewMoment}
          momentToEdit={momentToEdit}
          updateMoment={updateMoment}
          isEditMode={isEditMode}
          isShowForm={isShowForm}
          showForm={showForm}
          isPreview={isPreview}
        />
      ) : (
        ""
      )}
      <ContainerMoments>
        {moments.map((moment, key) => (
          <MomentCard
            moment={moment}
            key={key}
            deleteMoment={deleteMoment}
            editMoment={editMoment}
            fav={fav}
            addNewComment={addNewComment}
          />
        ))}
      </ContainerMoments>
      {msg !== undefined ? <Modal msg={msg} closeModal={closeModal} /> : null}

      <NavBarDownMbl showForm={showForm} />
    </section>
  );
};
