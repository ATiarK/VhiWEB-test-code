import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getList } from "../API/api";
import CustomButton from "../components/Button";
import ListUserAvatar from "../components/List";
import { useNavigate } from "react-router-dom";
import "../styles/button.scss";

export default function ListUser() {
  document.title = "List User";
  const [users, setUsers] = useState([]);
  const fetchData = getList(setUsers);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData();
    if (!token) {
      alert("You must login first");
      navigate("/");
    }
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <main>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <Container
          sx={{
            width: "max-content",
            backgroundColor: "white",
            borderRadius: "10px",
          }}
        >
          <h1>List User</h1>
          {users.map((user) => (
            <ListUserAvatar
              key={user.id}
              avatar={user.avatar}
              first_name={user.first_name}
              last_name={user.last_name}
              email={user.email}
              onClick={() => navigate(`/users/${user.id}`)}
            />
          ))}
          <div className="button-spacing">
            <CustomButton onClick={logout}>Logout</CustomButton>
          </div>
        </Container>
      )}
    </main>
  );
}
