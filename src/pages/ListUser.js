import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { getList } from "../API/api";
import Card from "../components/Card";

export default function ListUser() {
  const [users, setUsers] = useState([]);
  const fetchData = getList(setUsers);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

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
      </Container>
    </main>
  );
}
