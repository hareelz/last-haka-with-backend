import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <div>
      <h2>Вы успешно зарегистрировались!</h2>
      <Link to="/login">
        <Button style={{ textAlign: "center" }}>Войти</Button>
      </Link>
    </div>
  );
};

export default RegisterSuccess;
