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
    const moments = axios.get(baseURL + "/moments").then(res => {
      return res.data.filter(newMoment => newMoment.isLiked === true);
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
