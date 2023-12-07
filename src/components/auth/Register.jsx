import React, { useState } from "react";
import { Button, Container, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import { register } from "../../store/actions/authActions";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim()
    ) {
      alert("заполните все поля");
    } else {
      const newUser = {
        email,
        password,
        password_confirm: passwordConfirm,
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
      };
      dispatch(register(newUser)).then(() => navigate("/register-success"));
    }
  };

  return (
    <Container>
      <h2>Register Page Customer</h2>
      <FormControl
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        type="email"
      />
      <FormControl
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        type="password"
      />
      <FormControl
        onChange={(e) => setPasswordConfirm(e.target.value)}
        placeholder="confirm password"
        type="password"
      />
      <FormControl
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="Frist Name"
        type="text"
      />
      <FormControl
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        type="text"
      />
      <FormControl
        onChange={(e) => setPhone(e.target.value)}
        placeholder="Phone Number"
        type="number"
      />
      <Button onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default Register;
