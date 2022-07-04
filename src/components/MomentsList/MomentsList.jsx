import React, { useEffect, useState } from "react";
import { commentsServices } from "../../services/commentsServices";
import { momentsServices } from "../../services/momentsServices";
import { MomentCard } from "../MomentCard/MomentCard";
import { MomentForm } from "../MomentForm/MomentForm";
import { NavBar } from "../NavBar/NavBar";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { ContainerMoments } from "./MomentsList.styled";

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
  const [isLoading, setIsLoading] = useState(false);
  const [likeList, setLikeList] = useState([]);
  const [isPreview, setIsPreview] = useState(false);
  const [comments, setComments]  = useState(moments.comments)

  useEffect(() => {
    getAllMoments();
    showLikeList();
  }, []);

  const getAllMoments = () => {
    setIsLoading(true);
    momentsServices.getAllMoments().then((res) => {
      setMoments(res);
      setIsLoading(false);
    });
  };

  
  const showForm = () => {
    if (isShowForm) setIsShowForm(false);
    else setIsShowForm(true);
    resetInputsForm();
    setIsEditMode(false);
    setIsPreview(false);
  };

  const addNewComment = (data) =>{
    commentsServices.addComment(data).then((res) =>{
      setComments([...comments, res]);
    })
  }

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
      if (res.id === id) setMoments(filterMoments);
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
    momentsServices.updateMoment(newMoment.id, newMoment).then((res) => {
      let momentToEdit = moments.map((moment) =>
        moment.id === newMoment.id ? newMoment : moment
      );

      setMoments(momentToEdit);
    });
    showForm();
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

  const setLike = (newMoment) => {
    let moment = newMoment;

    if (moment.liked === false) moment.liked = true;
    else moment.liked = false;

    momentsServices.updateMoment(moment.id, moment).then((res) => {
      return getAllMoments();
    });

    addToLikeList(moment);
  };

  // const like = (moment) => {
  //   momentsServices.likeMoment(moment, moment.id).then((res) => {
  //     if (res) {
  //       getAllMoments();
  //     }
  //   });
  // };

  const addToLikeList = (newMoment) => {
    let moment = newMoment;

    if (moment.liked === true) {
      likeList.push(moment);
      showLikeList();
    } else {
      let likeIndex = likeList.findIndex(
        (moment) => moment.id === newMoment.id
      );
      likeList.splice(likeIndex, 1);
      showLikeList();
    }
  };

  const showLikeList = () => {
    momentsServices.getLikedMoments().then((res) => {
      setLikeList(res);
    });
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
            setLike={setLike}
            addNewComment={addNewComment}
          />
          
        ))}
      </ContainerMoments>

      <NavBarDownMbl showForm={showForm} />
    </section>
  );
};
