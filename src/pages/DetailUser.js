import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserID } from "../API/api";
import { Container } from "@mui/material";
import UserCard from "../components/Card";
import "../styles/button.scss";
import CustomButton from "../components/Button";

export default function DetailUser() {
  const params = useParams();
  const [user, setUser] = useState({});
  const fetchData = getUserID(params, setUser);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <main>
      <Container
        sx={{
          width: "max-content",
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <h1>Detail User</h1>
        <UserCard
          avatar={user.avatar}
          first_name={user.first_name}
          last_name={user.last_name}
          email={user.email}
        />
        <div className="button-spacing">
          <CustomButton onClick={() => window.history.back()}>
            Back
          </CustomButton>
        </div>
      </Container>
    </main>
  );
}
