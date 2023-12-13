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

    <div className="main-block-register">
      <Container className="block-register-customer">
        <h2>Register Page Customer</h2>
        <FormControl
          className="form-cont-login"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          type="email"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          type="password"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="confirm password"
          type="password"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Frist Name"
          type="text"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          type="text"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone Number"
          type="number"
        />
        <Button className="btn-register-cust" onClick={handleRegister}>
          REGISTER
        </Button>
      </Container>
    </div>
  );
};

export default Register;
