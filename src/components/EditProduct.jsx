import React, { useEffect, useState } from 'react';
import { Button, Container, FormControl, FormSelect } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  createProduct,
  getCategories,
  getOneProduct,
  updateProduct,
} from '../store/actions/productActions';

const EditProduct = () => {
  const { categories, oneProduct } = useSelector((state) => state.product);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getOneProduct(id));
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category.id);
    }
  }, [oneProduct]);
  const navigate = useNavigate();

  const handleCreate = () => {
    let newProduct = new FormData();
    newProduct.append('title', title);
    newProduct.append('category', category);
    newProduct.append('description', price);
    newProduct.append('price', price);
    if (image) {
      newProduct.append('image', image);
    }
    newProduct.append('id', id);

    dispatch(updateProduct(newProduct)).then(() => navigate('/products'));
  };

  return (
    <Container>
      <h2>EDIT PRODUCT</h2>
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
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
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
      <Button onClick={handleCreate}>UPDATE</Button>
    </Container>
  );
};

export default EditProduct;
