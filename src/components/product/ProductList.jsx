import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination";
import ProductCard from "./ProductCard";
import { getFreelancer } from "../../store/actions/freelancerActions";

const ProductList = () => {
  const { freelancerList, loading } = useSelector((state) => state.freelancer);
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(getFreelancer());
  }, [searchParams]);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {loading ? (
        <Spinner animation="border" variant="dark" />
      ) : (
        freelancerList.map((item) => <ProductCard item={item} key={item.id} />)
      )}
      <Container>
        <Pagination />
      </Container>
    </div>
  );
};

export default ProductList;
