import React from "react";
import { Button } from "react-bootstrap";
import "../index.css";

const Filter = () => {
  return (
    <div className="block-filter">
      <div className="filter-content">
        <h2>Filter</h2>
        <span className="line-filter"></span>
        <Button className="filter-btns">Frontend Developer</Button>
        <Button className="filter-btns">Web</Button>
        <Button className="filter-btns">UX/UI</Button>
        <Button className="filter-btns">Backend Developer</Button>
      </div>
    </div>
  );
};

export default Filter;
