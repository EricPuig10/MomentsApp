import axios from "axios";
const baseUrl = "http://localhost:8080";

export const loginServices = {
  login(req) {
    console.log(req);
    const auth = axios.post(`${baseUrl}/auth/signin`, req).then((res) => {
      return res.data;
    });
    return auth;
  },
  
  register(req) {
    console.log(req);
    const auth = axios.post(`${baseUrl}/auth/signup`, req).then((res) => {
      return res.data;
    });
    return auth;
  },
};
