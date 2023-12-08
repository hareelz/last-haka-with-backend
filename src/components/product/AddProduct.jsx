import React, { useEffect, useState } from "react";
import { Button, Container, FormControl, FormSelect } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getCategories,
} from "../../store/actions/productActions";

const AddProduct = () => {
  const { categories } = useSelector((state) => state.product);

  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  const handleCreate = () => {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("category", category);
    newProduct.append("description", price);
    newProduct.append("price", price);
    if (image) {
      newProduct.append("image", image);
    }

    dispatch(createProduct(newProduct));
  };

  return (
    <Container>
      <h2>ADD PRODUCT</h2>
      <FormControl
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
        type="text"
      />
      <FormSelect
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option disabled value="">
          choose category
        </option>
        {categories.map((item) => (
          <option value={item.id}>{item.title}</option>
        ))}
      </FormSelect>

      <FormControl
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
        type="text"
      />
      <FormControl
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
        type="text"
      />
      <FormControl
        onChange={(e) => setImage(e.target.files[0])}
        placeholder="image"
        accept="image/*"
        type="file"
      />
      <Button onClick={handleCreate}>CREATE</Button>
    </Container>
  );
};

export default AddProduct;
