import React, { useState } from "react";
import { Button, Container, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { login } from "../../store/actions/authActions";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      alert("Заполните все поля!");
    } else {
      const newUser = {
        email,
        password,
      };

      dispatch(login(newUser)).then(() => navigate("/"));
    }
  };

  return (

    <Container className="login-cust">
      <h2>Login Page Customer</h2>
      <FormControl
        className="form-cont-login"
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <FormControl
        className="form-cont-login"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />

      <Button className="btn-login-cust" onClick={handleLogin}>
        LOGIN
      </Button>
    </Container>
  );
};

export default Login;
