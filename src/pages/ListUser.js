import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getList } from "../API/api";
import CustomButton from "../components/Button";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  document.title = "List User";
  const [users, setUsers] = useState([]);
  const fetchData = getList(setUsers);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <main>
      <Container sx={{ width: "max-content" }}>
        <h1>List User</h1>
        {users.map((user) => (
          <Card
            key={user.id}
            avatar={user.avatar}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
          />
        ))}
        <div style={{ marginTop: "20px" }}>
          <CustomButton onClick={logout}>Logout</CustomButton>
        </div>
      </Container>
    </main>
  );
}
