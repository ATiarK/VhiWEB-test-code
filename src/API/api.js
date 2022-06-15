import axios from "axios";

const API = "https://reqres.in/api";

export function getList(setUsers) {
  return () => {
    axios.get(`${API}/users`).then((res) => {
      setUsers(res.data.data);
    });
  };
}

export default API;
