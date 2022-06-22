import axios from "axios";
const baseURL = "https://62863528f0e8f0bb7c1250fb.mockapi.io";

export const momentsServices = {
  getAllMoments() {
    const moments = axios.get(baseURL + "/moments").then((res) => res.data);
    return moments;
  },

  deleteMoment(id) {
    const movies = axios
      .delete(baseURL + "/moments/" + id)
      .then((res) => res.data);
    return movies;
  },

  addMoment(data) {
    const moments = axios
      .post(baseURL + "/moments", data)
      .then((res) => res.data);
    return moments;
  },

  updateMoment(id, newMoment) {
    const moments = axios
      .put(baseURL + "/moments/" + id, newMoment)
      .then((res) => res.data);
    return moments;
  },

  getMomentById(id) {
    const moments = axios
      .get(baseURL + "/moments/" + id)
      .then((res) => res.data);
    return moments;
  },

  getLikedMoments() {
    const moments = axios.get(baseURL + "/moments").then((res) => {
      return res.data.filter((newMoment) => newMoment.isLiked === true);
    });
    return moments;
  },

  /*
  getSearch(data) {
    const search = axios.get(`${baseURL}/moments`).then(res => {
        return res.data.filter(movie => {
            let cut = data.length;
            return movie.name.slice(0, cut) === data;
        })
    })
    return search;
}*/
};

/*
[
  {
   "ubication": "Norway",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "Snowy Day",
   "imgUrl": "http://1.bp.blogspot.com/-PDPkawVpiEM/USKdvazIKFI/AAAAAAAAPoQ/3GunEMDjljY/s1600/bp00.jpg",
   "description": "I was very excited from being there and could feel the freezing cold of Norway",
   "id": "1",
   "isLiked": true
  },
  {
   "ubication": "Ireland",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "Green Day",
   "imgUrl": "https://static3.leonoticias.com/www/multimedia/202107/06/media/MM-senderismo-asturias/oddle-1-ksRC--1350x900@El%20Comercio.jpg",
   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been theI was very excited from being there and could feel the freezing cold of NorwayI was very excited from being there and could feel the freezing cold of Norway",
   "id": "2",
   "isLiked": true
  },
  {
   "ubication": "New York",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "SunRise",
   "imgUrl": "https://i.pinimg.com/550x/05/12/06/05120683bf99b82b418d6368a37e3e42.jpg",
   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...I was very excited from being there and could feel the freezing cold of NorwayI was very excited from being there and could feel the freezing cold of NorwayI was very excited from being there and could feel the freezing cold of Norway",
   "id": "3",
   "isLiked": true
  },
  {
   "ubication": "Pantà de Sau",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "Chilli'n",
   "imgUrl": "https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg",
   "description": "I was very excited from being there and could feel the freezing cold of NorwayI was very excited from being there and could feel the freezing cold of NorwayI was very excited from being there and could feel the freezing cold of NorwayI was very excited from being there and could feel the freezing cold of Norway",
   "id": "4",
   "isLiked": true
  },
  {
   "ubication": "New York",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "title 5",
   "imgUrl": "https://www.nippon.com/es/ncommon/contents/japan-data/1331263/1331263.jpg",
   "description": "description 5",
   "id": "5",
   "isLiked": false
  },
  {
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "title 10",
   "imgUrl": "http://1.bp.blogspot.com/-PDPkawVpiEM/USKdvazIKFI/AAAAAAAAPoQ/3GunEMDjljY/s1600/bp00.jpg",
   "description": "description 10",
   "id": "10",
   "isLiked": false,
   "ubication": "Norway"
  },
  {
   "ubication": "New York",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "title 11",
   "imgUrl": "http://1.bp.blogspot.com/-PDPkawVpiEM/USKdvazIKFI/AAAAAAAAPoQ/3GunEMDjljY/s1600/bp00.jpg",
   "description": "description 11",
   "id": "11",
   "isLiked": false
  },
  {
   "ubication": "New York",
   "user": "eric_puig",
   "userImg": "https://media-exp2.licdn.com/dms/image/C4D03AQG17WUfd78sgA/profile-displayphoto-shrink_400_400/0/1587477510501?e=1661385600&v=beta&t=lxPzlDjTbmYs0vSz-B7ef95gRfs-T5Dxj_RTLrcSO8Y",
   "title": "Day in the beach",
   "imgUrl": "https://img.freepik.com/foto-gratis/playa-tropical_74190-188.jpg?w=2000",
   "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the",
   "id": "12",
   "isLiked": true
  }
 ]*/