import Form from "../components/Form";
import "../styles/layout.scss";

function Login() {
  document.title = "Login Page";
  return (
    <main className="center-content">
      <div className="border-form">
        <Form />
      </div>
    </main>
  );
}

export default Login;
