import axios from "axios";
const baseURL = "http://localhost:8080";

export const commentsServices = {
  getAllComments() {
    const comments = axios.get(baseURL + "/comments").then((res) => res.data);
    return comments;
  },

  createComment(data){
    const comment = axios.post(baseURL + "/comments", data).then((res)=> res.data);
    return comment;
  },

  updateComment(id, comment) {
    const updatedComment = axios
      .put(baseURL + "/comments/" + id, comment)
      .then((res) => {
        return res.data;
      });
    return updatedComment;
  },

  /*
  deleteComment(id) {
    const comment = axios.delete(baseURL + "/comments/" + id).then((res) => {
      return res.data;
    });
    return comment;
  },

  addComment(data) {
    const comment = axios
      .post(baseURL + "/comments", data)
      .then((res) => res.data);
    return comment;
  },

  updateComment(id, comment) {
    const updatedComment = axios
      .put(baseURL + "/comments/" + id, comment)
      .then((res) => {
        return res.data;
      });
    return updatedComment;
  },

  getCommentById(id) {
    const comment = axios
      .get(baseURL + "/comments/" + id)
      .then((res) => res.data);
    return comment;
  },

  getLikedComments() {
    const moments = axios.get(baseURL + "/moments").then((res) => {
      return res.data.filter((newMoment) => newMoment.liked === true);
    });
    return moments;
  },



  searchComment(search) {
    const comments = axios.get(`${baseURL}/comments?search=${search}`).then((res) => {
      return res.data;
    });
    return comments;
  },
  */
};
