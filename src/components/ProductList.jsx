import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { getProducts } from '../store/actions/productActions';
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const ProductList = () => {
  const { productList, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getProducts());
  }, [searchParams]);

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {loading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        productList.map((item) => <ProductCard item={item} key={item.id} />)
      )}
      <Container>
        <Pagination />
      </Container>
    </div>
  );
};

export default ProductList;
