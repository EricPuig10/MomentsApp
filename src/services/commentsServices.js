import axios from "axios";
const baseURL = "http://localhost:8080";

export const commentsServices = {
  getAllComments() {
    const comments = axios.get(baseURL + "/comments").then((res) => res.data);
    return comments;
  },

  createComment(data) {
    const comment = axios
      .post(baseURL + "/comments", {...data, userId:1})
      .then((res) => res.data);
    return comment;
  },

  getCommentsByMoment(id) {
    const comments = axios
      .get(baseURL + "/moments/" + id + "/comments")
      .then((res) => {
        return res.data;
      });
    return comments;
  },

  likeComment(id, comment) {
    const commentToLike = axios
      .patch(baseURL + "/comments/" + id + "/like", comment)
      .then((res) => {
        return res.data;
      });
    return commentToLike;
  },

  
};
