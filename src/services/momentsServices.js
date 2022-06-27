import axios from "axios";
const baseURL = "http://localhost:8080";

export const momentsServices = {
  getAllMoments() {
    const moments = axios.get(baseURL + "/moments").then((res) => res.data);
    return moments;
  },

  deleteMoment(id) {
    const moment = axios.delete(baseURL + "/moments/" + id).then((res) => {
      return res.data;
    });
    return moment;
  },

  addMoment(data) {
    const moments = axios
      .post(baseURL + "/moments", data)
      .then((res) => res.data);
    return moments;
  },

  updateMoment(id, moment) {
    const updatedMoment = axios
      .put(baseURL + "/moments/" + id, moment)
      .then((res) => {
        return res.data;
      });
    return updatedMoment;
  },

  getMomentById(id) {
    const moments = axios
      .get(baseURL + "/moments/" + id)
      .then((res) => res.data);
    return moments;
  },

  getLikedMoments() {
    const moments = axios.get(baseURL + "/moments").then((res) => {
      return res.data.filter((newMoment) => newMoment.liked === true);
    });
    return moments;
  },
};

//Mockapi 

// import axios from "axios";
// const baseURL = "https://62863528f0e8f0bb7c1250fb.mockapi.io";

// export const momentsServices = {
//   getAllMoments() {
//     const moments = axios.get(baseURL + "/moments").then((res) => res.data);
//     return moments;
//   },

//   deleteMoment(id) {
//     const movies = axios
//       .delete(baseURL + "/moments/" + id)
//       .then((res) => res.data);
//     return movies;
//   },

//   addMoment(data) {
//     const moments = axios
//       .post(baseURL + "/moments", data)
//       .then((res) => res.data);
//     return moments;
//   },

//   updateMoment(id, newMoment) {
//     const moments = axios
//       .put(baseURL + "/moments/" + id, newMoment)
//       .then((res) => res.data);
//     return moments;
//   },

//   getMomentById(id) {
//     const moments = axios
//       .get(baseURL + "/moments/" + id)
//       .then((res) => res.data);
//     return moments;
//   },

//   getLikedMoments() {
//     const moments = axios.get(baseURL + "/moments").then((res) => {
//       return res.data.filter((newMoment) => newMoment.isLiked === true);
//     });
//     return moments;
//   },
//   };

/*
[
    {
        "title": "Day in the beach",
        "id": 1,
        "imgUrl": "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the daasasdasdas asda das dasdasdasdasdasdasdasdasc rbadksd",
        "ubication": "New York",
        "userName": "eric_puig",
        "liked": true,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "Treee",
        "id": 2,
        "imgUrl": "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        "description": "Definir el paisatge des del punt de vista geogràfic no és fàcil, perquè aquest és l'objecte d'estudi primordial i el document geogràfic bàsic a partir del qual es fa la geografia",
        "ubication": "Japan",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "Day in the mountains",
        "id": 3,
        "imgUrl": "https://cdn.pixabay.com/photo/2019/08/27/22/23/nature-4435421_960_720.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        "ubication": "Cadi",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "Ebre",
        "id": 4,
        "imgUrl": "https://cdn.pixabay.com/photo/2020/06/25/01/37/landscape-5338147_960_720.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        "ubication": "Ebre",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "Autumn photo",
        "id": 5,
        "imgUrl": "https://cdn.pixabay.com/photo/2019/10/22/14/33/landscape-4568942_960_720.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        "ubication": "Catalonia",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "Scary Photo",
        "id": 6,
        "imgUrl": "https://cdn.pixabay.com/photo/2020/07/09/15/20/fantasy-5387717_960_720.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        "ubication": "Transilvania",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "MoonLight",
        "id": 7,
        "imgUrl": "https://thumbs.dreamstime.com/b/paisaje-misterioso-de-la-noche-en-tonos-fr%C3%ADos-69412640.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        "ubication": "New York",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    },
    {
        "title": "SunSet",
        "id": 8,
        "imgUrl": "https://cdn.pixabay.com/photo/2019/04/07/11/24/landscape-4109455_960_720.jpg",
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
        "ubication": "Costa Brava",
        "userName": "eric_puig",
        "liked": false,
        "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y"
    }
 ]*/
