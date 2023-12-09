import React, { useState } from "react";
import { Button, Container, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { login } from "../../store/actions/authActions";
import { loginFreeLance } from "../../store/actions/authActionsFreeLance";

const LoginFreelancer = () => {
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

      dispatch(loginFreeLance(newUser)).then(() => navigate("/"));
    }
  };

  return (
    <Container>
      <h2>Login Page Freelancer</h2>
      <FormControl
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        type="email"
      />
      <FormControl
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
      />

      <Button onClick={handleLogin}>Войти</Button>
    </Container>
  );
};

export default LoginFreelancer;
