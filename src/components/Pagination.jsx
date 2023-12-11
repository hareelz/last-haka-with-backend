import React, { useEffect, useState } from "react";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

const PaginationList = () => {
  const { pages } = useSelector((state) => state.freelancer);

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    console.log("Текущая страница:", currentPage);
    console.log("Всего страниц:", pages);

    setSearchParams({
      page: currentPage,
    });
  }, [currentPage, pages]);

  function getPagesCount() {
    const pageCountArr = [];

    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }

    return pageCountArr;
  }

  return (
    <Pagination style={{ marginLeft: "23.5em" }}>
      <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
      {getPagesCount().map((item) =>
        item === currentPage ? (
          <Pagination.Item
            onClick={() => setCurrentPage(item)}
            active
            key={item}
          >
            {item}
          </Pagination.Item>
        ) : (
          <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
            {item}
          </Pagination.Item>
        )
      )}
      <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
    </Pagination>
  );
};

export default PaginationList;
