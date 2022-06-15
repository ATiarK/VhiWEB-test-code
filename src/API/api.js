import axios from "axios";

const API = "https://reqres.in/api";

export function submitThis(email, password) {
  axios
    .post(`${API}/login`, { email, password })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function getList(setUsers) {
  return () => {
    axios.get(`${API}/users`).then((res) => {
      setUsers(res.data.data);
    });
  };
}

export default API;
