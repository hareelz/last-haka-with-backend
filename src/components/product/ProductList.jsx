import React, { useEffect, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Pagination from "../Pagination";
import ProductCard from "./ProductCard";
import { getFreelancer } from "../../store/actions/freelancerActions";
import Filter from "../Filter";

const ProductList = () => {
  const { freelancerList, loading } = useSelector((state) => state.freelancer);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <div className="card__body" style={{ display: "flex", flexWrap: "wrap" }}>
        <Container>
          <Filter />
        </Container>
        {loading ? (
          <Spinner
            style={{ margin: "auto", marginTop: "15em" }}
            animation="border"
            variant="dark"
          />
        ) : (
          freelancerList.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
