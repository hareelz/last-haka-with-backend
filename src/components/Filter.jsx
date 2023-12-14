import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getCategories,
  getCategoriesFree,
  getFreelancer,
  getOneFreelancer,
} from "../store/actions/freelancerActions";

const Filter = () => {
  const { freelancerList, loading, categories } = useSelector(
    (state) => state.freelancer
  );
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(getFreelancer());
    dispatch(getCategories());
  }, [searchParams]);
  const navigate = useNavigate();
  const filterCategory = (query, value) => {
    const search = new URLSearchParams(window.location.search);

    if (value === "all") {
      search.delete(query);
    } else {
      search.set(query, value);
    }

    const url = `${window.location.pathname}?${search.toString()}`;
    navigate(url);
  };

  return (
    <div className="block-filter">
      <div className="filter-content">
        <h2>Filter</h2>
        <Button
          onClick={() => filterCategory("category", "all")}
          className="filter-btns"
        >
          All
        </Button>
        {categories.map((item) => (
          <Button
            className="filter-btns"
            onClick={() => filterCategory("category", item.slug)}
          >
            {item.name}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Filter;
