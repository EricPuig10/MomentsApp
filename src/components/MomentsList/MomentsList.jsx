import React, { useEffect, useState } from "react";
import { momentsServices } from "../../services/momentsServices";
import { MomentCard } from "../MomentCard/MomentCard";
import { MomentForm } from "../MomentForm/MomentForm";
import { NavBar } from "../NavBar/NavBar";
import { NavBarDownMbl } from "../NavBarDownMbl/NavBarDownMbl";
import { ContainerMomentsFilm } from "./MomentsList.styled";

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
  const [favList, setFavList] = useState([]);
  const [likeList, setLikeList] = useState([]);
  //const [isPreview, setIsPreview] = useState(false);

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
    //setIsPreview(false);
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
      if (res.id === id) setMoments(filterMoments);
    });
  };

  //opcio 2 de delete
  // const deleteMovie = (id) => {
  //   movieServices.deleteMovie(id).then((res) => {
  //     getAllMovies();
  //   });
  // };

  const editMoment = (id) => {
    showForm();
    let momentToEdit = moments.find((moment) => moment.id === id);
    setMomentToEdit(momentToEdit);
    setIsEditMode(true);
    //setIsPreview(true);
  };

  const updateMoment = (newMoment) => {
    momentsServices.updateMoment(newMoment.id, newMoment).then((res) => {
      let momentToEdit = moments.map((moment) =>
        moment.id === newMoment.id ? newMoment : moment
      );

      // let movieToEditIndex = newMoviesState.findIndex(
      //   (movie) => movie.id === newMovie.id
      // );

      // newMoviesState[movieToEditIndex] = res;
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
    });
  };

  const setFavorite = (newMoment) => {
    let moment = newMoment;

    if (moment.isFav === false) moment.isFav = true;
    else moment.isFav = false;

    momentsServices.updateMoment(moment.id, moment).then((res) => {
      if (res) getAllMoments();
    });
  };

  const setLike = (newMoment) => {
    let moment = newMoment;

    if (moment.isLiked === false) moment.isLiked = true;
    else moment.isLiked = false;

    momentsServices.updateMoment(moment.id, moment).then((res) => {
      if (res) getAllMoments();
    });

    addToLikeList(moment);
  };

  const addToLikeList = (newMoment) => {
    let moment = newMoment;

    if(moment.isLiked === true){
      likeList.push(moment);
      showLikeList();
    } else {
      let likeIndex=likeList.findIndex((moment)=> moment.id === newMoment.id);
      likeList.splice(likeIndex,1);
      showLikeList();
    }
  }

  const showLikeList = () =>{
    setIsLoading(true);
    momentsServices.getLikedMoments().then((res) => {
      setLikeList(res);
      setIsLoading(false);
    });
  }

  return (
    <section>
      <NavBar showForm={showForm}
              setFavorite={setFavorite}
              setLike={setLike} />

      {isShowForm ? (
        <MomentForm
          addNewMoment={addNewMoment}
          momentToEdit={momentToEdit}
          updateMoment={updateMoment}
          isEditMode={isEditMode}
          isShowForm={isShowForm}
          showForm={showForm}
        />
      ) : (
        ""
      )}
      {isLoading ? (
        ""
      ) : (
        <ContainerMomentsFilm>
          {moments.map((moment, key) => (
            <MomentCard
              moment={moment}
              key={key}
              deleteMoment={deleteMoment}
              editMoment={editMoment}
              setFavorite={setFavorite}
              setLike={setLike}
            />
          ))}
        </ContainerMomentsFilm>
      )}

      <NavBarDownMbl showForm={showForm} />
    </section>
  );
};
