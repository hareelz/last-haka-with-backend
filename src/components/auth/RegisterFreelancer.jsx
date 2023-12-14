import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, FormSelect } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import {
  getCategories,
  registerFreelance,
} from "../../store/actions/authActionsFreeLance";
import Footer from "../Footer";

const RegisterFreelancer = () => {
  const { categories } = useSelector((state) => state.authFreeLancer);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [can, setCan] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [profession, setProfession] = useState("");
  const [avatar, setAvatar] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleRegister = () => {
    if (
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim() ||
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !can.trim() ||
      !city.trim() ||
      !category.trim()
    ) {
      alert("Заполните все поля!");
    } else {
      const newUserFree = {
        email,
        password,
        password_confirm: passwordConfirm,
        first_name: firstName,
        last_name: lastName,
        phone_number: phone,
        what_i_can: can,
        city: city,
        category: category,
        profession,
        avatar,
      };
      dispatch(registerFreelance(newUserFree)).then(() =>
        navigate("/register-success")
      );
    }
  };

  return (
    <div className="main-block-register">
      <Container className="block-register-freelancer">
        <h2>Register Page Freelancer</h2>
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
        <FormControl
          className="form-cont-login"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          placeholder="Confirm Password"
          type="password"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
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
        <FormControl
          className="form-cont-login"
          onChange={(e) => setCan(e.target.value)}
          placeholder="What can you?"
          type="text"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          type="text"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setProfession(e.target.value)}
          placeholder="Profession"
          type="text"
        />
        <FormControl
          className="form-cont-login"
          onChange={(e) => setAvatar(e.target.value)}
          placeholder="Avatar"
          type="file"
        />
        <FormSelect
          className="form-cont-login"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled value="">
            Category
          </option>
          {categories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </FormSelect>

        <Button className="btn-register-cust" onClick={handleRegister}>
          REGISTER
        </Button>
      </Container>
    </div>
  );
};

export default RegisterFreelancer;
