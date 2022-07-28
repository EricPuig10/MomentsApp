import axios from "axios";
const baseURL = "http://localhost:8080";

export const userServices = {
  getAllUsers() {
    const users = axios.get(baseURL + "/users").then((res) => res.data);
    return users;
  },

  getUsersById(id) {
    const users = axios.get(baseURL + "/users/" + id).then((res) => res.data);
    return users;
  },

  addUser(data) {
    const user = axios.post(baseURL + "/users", data).then((res) => res.data);
    return user;
  },

  logUser(req) {
    const logged = axios.put(`${baseURL}/users/log`, req).then(res => res.data);
    return logged;
}


};
