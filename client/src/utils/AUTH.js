import axios from "axios";

export default {
  getUser: function() {
    return axios.get("/auth/user");
  },
  logout: function() {
    return axios.post("/auth/logout");
  },
  login: function(email, password) {
    return axios.post("/auth/login", { email, password });
  },
  register: function (userData) {
    return axios.post("/auth/register", userData);
  }
};