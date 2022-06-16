import axios from "axios";

const API = "https://reqres.in/api";

export function submitThis(email, password, navigate) {
  axios
    .post(`${API}/login`, { email, password })
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      navigate("/users");
    })
    .catch((err) => {
      alert(err.response.data.error);
    });
}

export function getList(setUsers) {
  return async () => {
    await axios.get(`${API}/users`).then((res) => {
      setUsers(res.data.data);
    });
  };
}

export function getUserID(params, setUser) {
  return async () => {
    const { id } = params;
    await axios
      .get(`${API}/users/${id}`)
      .then((res) => {
        setUser(res.data.data);
        document.title = res.data.data.first_name;
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  };
}

export default API;
