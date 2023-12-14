import React from "react";
import { Pagination } from "react-bootstrap";

const PaginationList = () => {
  return (
    <Pagination style={{ marginLeft: "23.5em" }}>
      <Pagination.Prev />

      <Pagination.Item active>1</Pagination.Item>

      <Pagination.Item>2</Pagination.Item>

      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationList;
