import { useEffect, useState } from "react";
import Form from "../components/Form";
import { submitThis } from "../API/api";
import "../styles/layout.scss";
import { useNavigate } from "react-router-dom";

function Login() {
  document.title = "Login Page";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      submitThis(email, password, navigate);
    }
  };

  return (
    <main className="center-content">
      <div className="border-form">
        <Form
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          onSubmit={handleSubmit}
        />
      </div>
    </main>
  );
}

export default Login;
