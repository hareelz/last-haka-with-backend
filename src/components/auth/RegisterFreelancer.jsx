import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, FormSelect } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form, useNavigate } from "react-router-dom";
import {
  getCategories,
  registerFreelance,
} from "../../store/actions/authActionsFreeLance";

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
      alert("заполните все поля");
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
    <Container>
      <h2>Register Page Freelancer</h2>
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
      <FormControl
        onChange={(e) => setCan(e.target.value)}
        placeholder="what can you"
        type="text"
      />
      <FormControl
        onChange={(e) => setCity(e.target.value)}
        placeholder="city"
        type="text"
      />
      <FormControl
        onChange={(e) => setProfession(e.target.value)}
        placeholder="profession"
        type="text"
      />
      <FormControl
        onChange={(e) => setAvatar(e.target.value)}
        placeholder="avatar"
        type="file"
      />
      <FormSelect
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled value="">
          category
        </option>
        {categories.map((item) => (
          <option key={item.slug} value={item.slug}>
            {item.name}
          </option>
        ))}
      </FormSelect>

      <Button onClick={handleRegister}>Register</Button>
    </Container>
  );
};

export default RegisterFreelancer;
