import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  return (

    <div className="block-success">
      <h2 className="title-success">Вы успешно зарегистрировались!</h2>
      <Link to="/login">
        <Button className="btn-succcess">Войти</Button>
      </Link>
    </div>
  );
};

export default RegisterSuccess;
