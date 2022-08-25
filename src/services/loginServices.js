import axios from "axios";
const baseUrl = "http://localhost:8080";

export const loginServices = {
  login(req) {
    const auth = axios
      .post(`${baseUrl}/auth/signin`, req)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });

    return auth;
  },

  register(req) {
    console.log(req);
    const auth = axios
      .post(`${baseUrl}/auth/signup`, req)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return { error: err.response.data.message };
      });
    return auth;
  },

  logout() {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    localStorage.removeItem("auth_id");
    localStorage.removeItem("auth");

    window.location = "/auth/signin";
  },
};
