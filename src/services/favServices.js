import axios from "axios";
const baseURL = "http://localhost:8080";

export const favServices = {
  fav(id) {
    const fav = axios
      .post(baseURL + "/favs", { momentId: id, faverId: 1 })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        window.alert("Cant like your own moment");
      });
    return fav;
  },

  favComment(id) {
    const fav = axios
      .post(baseURL + "/favs", { commentId: id, faverId: 1 })
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        window.alert("Cant like your own comment");
      });
    return fav;
  },
};
